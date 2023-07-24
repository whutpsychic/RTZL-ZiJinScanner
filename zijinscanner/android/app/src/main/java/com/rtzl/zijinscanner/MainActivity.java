package com.rtzl.zijinscanner;

import android.content.Intent;
import android.os.Bundle;

import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;
import androidx.annotation.NonNull;
import com.honeywell.aidc.*;
import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.EventChannel;
import io.flutter.plugin.common.MethodChannel;

import java.io.UnsupportedEncodingException;

import com.honeywell.aidc.BarcodeReader;
import com.honeywell.aidc.AidcManager;
import java.util.List;
public class MainActivity extends FlutterActivity implements BarcodeReader.BarcodeListener, BarcodeReader.TriggerListener, AidcManager.BarcodeDeviceListener{

    // 来自 flutter 端调用的下行通道名
    // flutter 主动调用原生方法
    public static final String CHANNEL_ACTION = "com.rtzl.zbc/action";
    // 去往 flutter 端的上行通道名
    // 原生向 flutter 主动反馈数据
    public static final String NATIVE_TO_FLUTTER_CHANNEL = "com.rtzl.zbc/honeywell";
    // 广播名
    public static final String INTENT_ACTION_NAME = "io.honeywell.sdk.RTZL";

    private EventChannel.EventSink attachEvent;

    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
        BinaryMessenger messager = flutterEngine.getDartExecutor().getBinaryMessenger();

        new MethodChannel(messager, CHANNEL_ACTION)
                .setMethodCallHandler(
                        (call, result) -> {
                            // 原生toast
                            if (call.method.equals("toast")) {
                                // Display Toast info
                                String content = (String) call.arguments;
                                Toast.makeText(getBaseContext(), content, Toast.LENGTH_LONG).show();
                            } else {
                                result.notImplemented();
                            }
                        }
                );

        //注册监听通道
        new EventChannel(getFlutterEngine().getDartExecutor().getBinaryMessenger(), NATIVE_TO_FLUTTER_CHANNEL).setStreamHandler(
                new EventChannel.StreamHandler() {
                    @Override
                    //注册成功后的回调
                    public void onListen(Object o, EventChannel.EventSink events) {
                        attachEvent = events;
                    }

                    @Override
                    public void onCancel(Object o) {
                    }
                }
        );
    }

    private void popToFlutter(String result) {
        //需要在主线程中执行传值至flutter
        Handler handler = new Handler(Looper.getMainLooper());
        handler.post(() -> attachEvent.success(result));
    }
    // ------------------------------------------------------------------------
    public static final String TAG = "example_demo";

    private AidcManager mAidcManager;
    private BarcodeReader mBarcodeReader;
    private BarcodeReader mInternalScannerReader;
    private boolean mKeyPressed = false;

    class MyCreatedCallback implements AidcManager.CreatedCallback {
        MyCreatedCallback() {
        }

        @Override
        public void onCreated(AidcManager aidcManager) {
            mAidcManager = aidcManager;
            mAidcManager.addBarcodeDeviceListener(MainActivity.this);
            initAllBarcodeReaderAndSetDefault();
        }
    }

    void initAllBarcodeReaderAndSetDefault() {
        List<BarcodeReaderInfo> readerList = mAidcManager.listBarcodeDevices();
        mInternalScannerReader = null;

        for (BarcodeReaderInfo reader : readerList) {
            if ("dcs.scanner.imager".equals(reader.getName())) {
                mInternalScannerReader = initBarcodeReader(mInternalScannerReader, reader.getName());
            }
        }

        if (mInternalScannerReader != null) {
            mBarcodeReader = mInternalScannerReader;
        }
        else {
        }
        if (mBarcodeReader != null) {
            try {
                mBarcodeReader.addBarcodeListener(this);
                mBarcodeReader.addTriggerListener(this);
            }
            catch (Throwable e2) {
                e2.printStackTrace();
            }
            try {
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_NOTIFICATION_GOOD_READ_ENABLED, true);
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_NOTIFICATION_BAD_READ_ENABLED, true);

                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_CODE_39_ENABLED, true);
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_EAN_13_ENABLED, true);
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_EAN_8_ENABLED, true);
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_CODE_39_FULL_ASCII_ENABLED, true);
                mBarcodeReader.setProperty(BarcodeReader.PROPERTY_CODE_93_ENABLED, true);
            } catch (UnsupportedPropertyException e) {
                e.printStackTrace();
            }

        }
    }

    BarcodeReader initBarcodeReader(BarcodeReader mReader, String mReaderName) {
        if (mReader == null) {
            if (mReaderName == null) {
                mReader = mAidcManager.createBarcodeReader();
            } else {
                mReader = mAidcManager.createBarcodeReader(mReaderName);
            }
            try {
                mReader.claim();
            } catch (ScannerUnavailableException e) {
                e.printStackTrace();
            }
            try {
                mReader.setProperty(BarcodeReader.PROPERTY_TRIGGER_CONTROL_MODE, BarcodeReader.TRIGGER_CONTROL_MODE_CLIENT_CONTROL);

            } catch (UnsupportedPropertyException e2) {
                e2.printStackTrace();
            }
        }
        return mReader;
    }

    public void onBarcodeDeviceConnectionEvent(BarcodeDeviceConnectionEvent event) {
    }

    public void onBarcodeEvent(final BarcodeReadEvent event) {
        runOnUiThread(new Runnable() {
            public void run() {

                String barcodeData = new String(event.getBarcodeData().getBytes(event.getCharset()));
                // System.out.println(" --------------------------------------barcodeData ");
                // System.out.println(barcodeData);
                popToFlutter(barcodeData);
            }
        });
    }

    public void onFailureEvent(final BarcodeFailureEvent event) {
        runOnUiThread(new Runnable() {
            public void run() {
            }
        });
    }

    public void onTriggerEvent(TriggerStateChangeEvent event) {
        if (event.getState()) {
            if (!mKeyPressed) {
                mKeyPressed = true;
                doScan(true);
            }
        } else {
            mKeyPressed = false;
            doScan(false);
        }
    }

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AidcManager.create(this, new MyCreatedCallback());
    }

    protected void onResume() {
        super.onResume();
        if (this.mInternalScannerReader != null) {
            try {
                this.mInternalScannerReader.claim();
            } catch (ScannerUnavailableException e) {
                e.printStackTrace();
            }
        }
    }

    protected void onPause() {
        super.onPause();

        if (this.mInternalScannerReader != null) {
            this.mInternalScannerReader.release();
        }
    }

    public void onDestroy() {
        super.onDestroy();

        if (this.mInternalScannerReader != null) {
            this.mInternalScannerReader.removeBarcodeListener(this);
            this.mInternalScannerReader.removeTriggerListener(this);
            this.mInternalScannerReader.close();
            this.mInternalScannerReader = null;
        }
        if (this.mAidcManager != null) {
            this.mAidcManager.removeBarcodeDeviceListener(this);
            this.mAidcManager.close();
        }
    }

    void doScan(boolean do_scan) {
        try {
            if (do_scan) {
            } else {
            }
            mBarcodeReader.decode(do_scan);
        } catch (ScannerNotClaimedException e) {
            e.printStackTrace();
        } catch (ScannerUnavailableException e2) {
            e2.printStackTrace();
        } catch (Exception e3) {
            e3.printStackTrace();
        }
    }
}