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

public class MainActivity extends FlutterActivity {

    // 来自 flutter 端调用的下行通道名
    // flutter 主动调用原生方法
    public static final String CHANNEL_ACTION = "com.rtzl.zbc/action";
    // 去往 flutter 端的上行通道名
    // 原生向 flutter 主动反馈数据
    public static final String NATIVE_TO_FLUTTER_CHANNEL = "com.rtzl.zbc/honeywell";
    // 广播名
    public static final String INTENT_ACTION_NAME = "io.honeywell.sdk.RTZL";

    private AidcManager manager;
    private BarcodeReader barcodeReader;
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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AidcManager.create(MainActivity.this, new AidcManager.CreatedCallback() {
            @Override
            public void onCreated(AidcManager aidcManager) {
                try {
                    manager = aidcManager;
                    barcodeReader = manager.createBarcodeReader();

                    barcodeReader.claim();
                    barcodeReader.addBarcodeListener(barcodeListener);

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    // 广播自定义意图
    public void broadcastIntent() {
        try {
            Intent intent = new Intent();
            intent.setAction(INTENT_ACTION_NAME);
            intent.setClass(this, Class.forName("com.rtzl.zijinscanner.BarcodeReceiver"));
            sendBroadcast(intent);
        } catch (ClassNotFoundException e) {
            System.out.println(e);
        }
    }

    private final BarcodeReader.BarcodeListener barcodeListener = new BarcodeReader.BarcodeListener() {
        @Override
        public void onBarcodeEvent(BarcodeReadEvent barcodeReadEvent) {
            String result = null;
            try {
                result = new String(barcodeReadEvent.getBarcodeData().getBytes("ISO-8859-1"), "UTF-8");
//                BarcodeReceiver.setResult(result);
//                broadcastIntent();
                popToFlutter(result);
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException(e);
            }
        }

        @Override
        public void onFailureEvent(BarcodeFailureEvent barcodeFailureEvent) {

        }
    };

    private void popToFlutter(String result) {
        //需要在主线程中执行传值至flutter
        Handler handler = new Handler(Looper.getMainLooper());
        handler.post(() -> attachEvent.success(result));
    }

}