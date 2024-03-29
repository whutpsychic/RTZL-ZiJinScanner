package com.rtzl_smapp;

import android.app.Activity;
import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.IBinder;

import android.util.Log;
import android.util.Printer;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlSerializer;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

import static android.content.ContentValues.TAG;

/**
 * SplashScreen
 * 启动屏
 * from：http://www.devio.org
 * Author:CrazyCodeBoy
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class RroadCastModule extends ReactContextBaseJavaModule {
    public RroadCastModule(ReactApplicationContext reactContext) {
        super(reactContext);

    }

    @Override
    public String getName() {
        return "RNBroadCast";
    }

    /**
     * SendEvent
     */
    @ReactMethod
    public void sendEvent(String eventName, String json) {
        try {
            this.sendBroadCast(eventName, json);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * ReceiveSystemEvent
     */
    @ReactMethod
    public void receiveSystemEvent(boolean state) {
        if (state) this.ON();
        else this.OFF();
    }

    private class receivedActionObject{
        public receivedActionObject(receiveBroadCast rb,String action){
            this.receivedDevice = rb;
            this.receivedAction = action;
        }
        receiveBroadCast receivedDevice;
        String receivedAction;
    }
    List<receivedActionObject> receivedActionObjectList=new ArrayList<receivedActionObject>();
    /**
     * ReceiveEvent
     */
    @ReactMethod
    public void receiveEvent(String action) {
        for(receivedActionObject rdo:receivedActionObjectList){
            if(action.equals(rdo.receivedAction))
                return;
        }
        IntentFilter it = new IntentFilter();
        it.addAction(action);
        receiveBroadCast newListener = new receiveBroadCast();
        getReactApplicationContext().registerReceiver(newListener,it);
        receivedActionObjectList.add(new receivedActionObject(newListener,action));
    }

    /**
     * RemoveEvent
     */
    @ReactMethod
    public void removeEvent(String action) {
        for(receivedActionObject rdo:receivedActionObjectList){
            if(action.equals(rdo.receivedAction))
                getReactApplicationContext().unregisterReceiver(rdo.receivedDevice);
            rdo.receivedDevice=null;
            rdo.receivedAction=null;
        }
    }

    /**
     * RemoveAllEvent
     */
    @ReactMethod
    public void removeAllEvent() {
        for(receivedActionObject rdo:receivedActionObjectList){
                getReactApplicationContext().unregisterReceiver(rdo.receivedDevice);
        }
        this.receivedActionObjectList.clear();
    }

    public void sendBroadCast(String action, String json) throws JSONException {

        JSONObject jsonObject = new JSONObject(json);

        Intent intent = new Intent();
        intent.setAction(action);
        intent.putExtras(fromJson(jsonObject));
        getReactApplicationContext().sendBroadcast(intent);
    }

    Activity mActivity = getCurrentActivity();

    receiveBroadCast rb = null;



    public void ON() {
        rb = new receiveBroadCast();

        IntentFilter it = new IntentFilter();
        for (String action:broadcast_actions)
            it.addAction(action);

        getReactApplicationContext().registerReceiver(rb,it);

    }

    public void OFF() {
        getReactApplicationContext().unregisterReceiver(rb);
    }


    public Bundle fromJson(JSONObject s) {
        Bundle bundle = new Bundle();

        for (Iterator<String> it = s.keys(); it.hasNext(); ) {
            String key = it.next();
            JSONArray arr = s.optJSONArray(key);
            Double num = s.optDouble(key);
            String str = s.optString(key);

            if (arr != null && arr.length() <= 0)
                bundle.putStringArray(key, new String[]{});

            else if (arr != null && !Double.isNaN(arr.optDouble(0))) {
                double[] newarr = new double[arr.length()];
                for (int i = 0; i < arr.length(); i++)
                    newarr[i] = arr.optDouble(i);
                bundle.putDoubleArray(key, newarr);
            } else if (arr != null && arr.optString(0) != null) {
                String[] newarr = new String[arr.length()];
                for (int i = 0; i < arr.length(); i++)
                    newarr[i] = arr.optString(i);
                bundle.putStringArray(key, newarr);
            } else if (!num.isNaN())
                bundle.putDouble(key, num);

            else if (str != null)
                bundle.putString(key, str);

            else
                System.err.println("unable to transform json to bundle " + key);
        }

        return bundle;
    }


    class receiveBroadCast extends BroadcastReceiver {

        @Override
        public void onReceive(Context context, Intent intent) {
            WritableMap idData = Arguments.createMap();
            Bundle bd = intent.getExtras();
            Set<String> st = null;
            if (bd != null) {
                st = bd.keySet();
                for (String str : st) {
                    idData.putString(str, String.valueOf(bd.get(str)));
                }
            }

            sendEventToJs(RroadCastModule.this.getReactApplicationContext(), intent.getAction(), idData);
        }

        public void sendEventToJs(ReactContext reactContext, String eventName, WritableMap params) {
            Log.d(TAG, "sendEventToJs: "+eventName+"==="+params);
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
        }
    }



    final String[] broadcast_actions = {
            "android.accounts.LOGIN_ACCOUNTS_CHANGED" ,
            "android.accounts.action.ACCOUNT_REMOVED" ,
            "android.app.action.ACTION_PASSWORD_CHANGED" ,
            "android.app.action.ACTION_PASSWORD_EXPIRING" ,
            "android.app.action.ACTION_PASSWORD_FAILED" ,
            "android.app.action.ACTION_PASSWORD_SUCCEEDED" ,
            "android.app.action.APPLICATION_DELEGATION_SCOPES_CHANGED" ,
            "android.app.action.APP_BLOCK_STATE_CHANGED" ,
            "android.app.action.DEVICE_ADMIN_DISABLED" ,
            "android.app.action.DEVICE_ADMIN_DISABLE_REQUESTED" ,
            "android.app.action.DEVICE_ADMIN_ENABLED" ,
            "android.app.action.DEVICE_OWNER_CHANGED" ,
            "android.app.action.INTERRUPTION_FILTER_CHANGED" ,
            "android.app.action.LOCK_TASK_ENTERING" ,
            "android.app.action.LOCK_TASK_EXITING" ,
            "android.app.action.NEXT_ALARM_CLOCK_CHANGED" ,
            "android.app.action.NOTIFICATION_CHANNEL_BLOCK_STATE_CHANGED" ,
            "android.app.action.NOTIFICATION_CHANNEL_GROUP_BLOCK_STATE_CHANGED" ,
            "android.app.action.NOTIFICATION_POLICY_ACCESS_GRANTED_CHANGED" ,
            "android.app.action.NOTIFICATION_POLICY_CHANGED" ,
            "android.app.action.PROFILE_OWNER_CHANGED" ,
            "android.app.action.PROFILE_PROVISIONING_COMPLETE" ,
            "android.app.action.SYSTEM_UPDATE_POLICY_CHANGED" ,
            "android.appwidget.action.APPWIDGET_DELETED" ,
            "android.appwidget.action.APPWIDGET_DISABLED" ,
            "android.appwidget.action.APPWIDGET_ENABLED" ,
            "android.appwidget.action.APPWIDGET_HOST_RESTORED" ,
            "android.appwidget.action.APPWIDGET_RESTORED" ,
            "android.appwidget.action.APPWIDGET_UPDATE" ,
            "android.appwidget.action.APPWIDGET_UPDATE_OPTIONS" ,
            "android.bluetooth.a2dp.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.a2dp.profile.action.PLAYING_STATE_CHANGED" ,
            "android.bluetooth.adapter.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.adapter.action.DISCOVERY_FINISHED" ,
            "android.bluetooth.adapter.action.DISCOVERY_STARTED" ,
            "android.bluetooth.adapter.action.LOCAL_NAME_CHANGED" ,
            "android.bluetooth.adapter.action.SCAN_MODE_CHANGED" ,
            "android.bluetooth.adapter.action.STATE_CHANGED" ,
            "android.bluetooth.device.action.ACL_CONNECTED" ,
            "android.bluetooth.device.action.ACL_DISCONNECTED" ,
            "android.bluetooth.device.action.ACL_DISCONNECT_REQUESTED" ,
            "android.bluetooth.device.action.BOND_STATE_CHANGED" ,
            "android.bluetooth.device.action.CLASS_CHANGED" ,
            "android.bluetooth.device.action.FOUND" ,
            "android.bluetooth.device.action.NAME_CHANGED" ,
            "android.bluetooth.device.action.PAIRING_REQUEST" ,
            "android.bluetooth.device.action.UUID" ,
            "android.bluetooth.devicepicker.action.DEVICE_SELECTED" ,
            "android.bluetooth.devicepicker.action.LAUNCH" ,
            "android.bluetooth.headset.action.VENDOR_SPECIFIC_HEADSET_EVENT" ,
            "android.bluetooth.headset.profile.action.AUDIO_STATE_CHANGED" ,
            "android.bluetooth.headset.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.hearingaid.profile.action.ACTIVE_DEVICE_CHANGED" ,
            "android.bluetooth.hearingaid.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.hearingaid.profile.action.PLAYING_STATE_CHANGED" ,
            "android.bluetooth.hiddevice.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.input.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.pan.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.bluetooth.pbap.profile.action.CONNECTION_STATE_CHANGED" ,
            "android.content.pm.action.SESSION_COMMITTED" ,
            "android.hardware.action.NEW_PICTURE" ,
            "android.hardware.action.NEW_VIDEO" ,
            "android.hardware.hdmi.action.OSD_MESSAGE" ,
            "android.hardware.input.action.QUERY_KEYBOARD_LAYOUTS" ,
            "android.hardware.usb.action.USB_ACCESSORY_ATTACHED" ,
            "android.hardware.usb.action.USB_ACCESSORY_DETACHED" ,
            "android.hardware.usb.action.USB_DEVICE_ATTACHED" ,
            "android.hardware.usb.action.USB_DEVICE_DETACHED" ,
            "android.intent.action.ACTION_POWER_CONNECTED" ,
            "android.intent.action.ACTION_POWER_DISCONNECTED" ,
            "android.intent.action.ACTION_SHUTDOWN" ,
            "android.intent.action.AIRPLANE_MODE" ,
            "android.intent.action.APPLICATION_RESTRICTIONS_CHANGED" ,
            "android.intent.action.BATTERY_CHANGED" ,
            "android.intent.action.BATTERY_LOW" ,
            "android.intent.action.BATTERY_OKAY" ,
            "android.intent.action.BOOT_COMPLETED" ,
            "android.intent.action.CAMERA_BUTTON" ,
            "android.intent.action.CLOSE_SYSTEM_DIALOGS" ,
            "android.intent.action.CONFIGURATION_CHANGED" ,
            "android.intent.action.CONTENT_CHANGED" ,
            "android.intent.action.DATA_SMS_RECEIVED" ,
            "android.intent.action.DATE_CHANGED" ,
            "android.intent.action.DEVICE_STORAGE_LOW" ,
            "android.intent.action.DEVICE_STORAGE_OK" ,
            "android.intent.action.DOCK_EVENT" ,
            "android.intent.action.DOWNLOAD_COMPLETE" ,
            "android.intent.action.DOWNLOAD_NOTIFICATION_CLICKED" ,
            "android.intent.action.DREAMING_STARTED" ,
            "android.intent.action.DREAMING_STOPPED" ,
            "android.intent.action.DROPBOX_ENTRY_ADDED" ,
            "android.intent.action.EXTERNAL_APPLICATIONS_AVAILABLE" ,
            "android.intent.action.EXTERNAL_APPLICATIONS_UNAVAILABLE" ,
            "android.intent.action.FACTORY_RESET" ,
            "android.intent.action.FETCH_VOICEMAIL" ,
            "android.intent.action.GTALK_CONNECTED" ,
            "android.intent.action.GTALK_DISCONNECTED" ,
            "android.intent.action.HEADSET_PLUG" ,
            "android.intent.action.HEADSET_PLUG" ,
            "android.intent.action.INPUT_METHOD_CHANGED" ,
            "android.intent.action.INTENT_FILTER_NEEDS_VERIFICATION" ,
            "android.intent.action.LOCALE_CHANGED" ,
            "android.intent.action.LOCKED_BOOT_COMPLETED" ,
            "android.intent.action.MANAGE_PACKAGE_STORAGE" ,
            "android.intent.action.MASTER_CLEAR_NOTIFICATION" ,
            "android.intent.action.MEDIA_BAD_REMOVAL" ,
            "android.intent.action.MEDIA_BUTTON" ,
            "android.intent.action.MEDIA_CHECKING" ,
            "android.intent.action.MEDIA_EJECT" ,
            "android.intent.action.MEDIA_MOUNTED" ,
            "android.intent.action.MEDIA_NOFS" ,
            "android.intent.action.MEDIA_REMOVED" ,
            "android.intent.action.MEDIA_SCANNER_FINISHED" ,
            "android.intent.action.MEDIA_SCANNER_SCAN_FILE" ,
            "android.intent.action.MEDIA_SCANNER_STARTED" ,
            "android.intent.action.MEDIA_SHARED" ,
            "android.intent.action.MEDIA_UNMOUNTABLE" ,
            "android.intent.action.MEDIA_UNMOUNTED" ,
            "android.intent.action.MY_PACKAGE_REPLACED" ,
            "android.intent.action.MY_PACKAGE_SUSPENDED" ,
            "android.intent.action.MY_PACKAGE_UNSUSPENDED" ,
            "android.intent.action.NEW_OUTGOING_CALL" ,
            "android.intent.action.NEW_VOICEMAIL" ,
            "android.intent.action.PACKAGES_SUSPENDED" ,
            "android.intent.action.PACKAGES_UNSUSPENDED" ,
            "android.intent.action.PACKAGE_ADDED" ,
            "android.intent.action.PACKAGE_CHANGED" ,
            "android.intent.action.PACKAGE_DATA_CLEARED" ,
            "android.intent.action.PACKAGE_FIRST_LAUNCH" ,
            "android.intent.action.PACKAGE_FULLY_REMOVED" ,
            "android.intent.action.PACKAGE_INSTALL" ,
            "android.intent.action.PACKAGE_NEEDS_VERIFICATION" ,
            "android.intent.action.PACKAGE_REMOVED" ,
            "android.intent.action.PACKAGE_REPLACED" ,
            "android.intent.action.PACKAGE_RESTARTED" ,
            "android.intent.action.PACKAGE_VERIFIED" ,
            "android.intent.action.PHONE_STATE" ,
            "android.intent.action.PROVIDER_CHANGED" ,
            "android.intent.action.PROXY_CHANGE" ,
            "android.intent.action.QUERY_PACKAGE_RESTART" ,
            "android.intent.action.REBOOT" ,
            "android.intent.action.SCREEN_OFF" ,
            "android.intent.action.SCREEN_ON" ,
            "android.intent.action.SIM_STATE_CHANGED" ,
            "android.intent.action.SPLIT_CONFIGURATION_CHANGED" ,
            "android.intent.action.TIMEZONE_CHANGED" ,
            "android.intent.action.TIME_SET" ,
            "android.intent.action.TIME_TICK" ,
            "android.intent.action.UID_REMOVED" ,
            "android.intent.action.UMS_CONNECTED" ,
            "android.intent.action.UMS_DISCONNECTED" ,
            "android.intent.action.USER_PRESENT" ,
            "android.intent.action.USER_UNLOCKED" ,
            "android.intent.action.WALLPAPER_CHANGED" ,
            "android.media.ACTION_SCO_AUDIO_STATE_UPDATED" ,
            "android.media.AUDIO_BECOMING_NOISY" ,
            "android.media.RINGER_MODE_CHANGED" ,
            "android.media.SCO_AUDIO_STATE_CHANGED" ,
            "android.media.VIBRATE_SETTING_CHANGED" ,
            "android.media.action.CLOSE_AUDIO_EFFECT_CONTROL_SESSION" ,
            "android.media.action.HDMI_AUDIO_PLUG" ,
            "android.media.action.MICROPHONE_MUTE_CHANGED" ,
            "android.media.action.OPEN_AUDIO_EFFECT_CONTROL_SESSION" ,
            "android.media.tv.action.CHANNEL_BROWSABLE_REQUESTED" ,
            "android.media.tv.action.INITIALIZE_PROGRAMS" ,
            "android.media.tv.action.PREVIEW_PROGRAM_ADDED_TO_WATCH_NEXT" ,
            "android.media.tv.action.PREVIEW_PROGRAM_BROWSABLE_DISABLED" ,
            "android.media.tv.action.WATCH_NEXT_PROGRAM_BROWSABLE_DISABLED" ,
            "android.net.conn.BACKGROUND_DATA_SETTING_CHANGED" ,
            "android.net.conn.CONNECTIVITY_CHANGE" ,
            "android.net.conn.RESTRICT_BACKGROUND_CHANGED" ,
            "android.net.nsd.STATE_CHANGED" ,
            "android.net.scoring.SCORER_CHANGED" ,
            "android.net.scoring.SCORE_NETWORKS" ,
            "android.net.wifi.NETWORK_IDS_CHANGED" ,
            "android.net.wifi.RSSI_CHANGED" ,
            "android.net.wifi.SCAN_RESULTS" ,
            "android.net.wifi.STATE_CHANGE" ,
            "android.net.wifi.WIFI_STATE_CHANGED" ,
            "android.net.wifi.aware.action.WIFI_AWARE_STATE_CHANGED" ,
            "android.net.wifi.p2p.CONNECTION_STATE_CHANGE" ,
            "android.net.wifi.p2p.DISCOVERY_STATE_CHANGE" ,
            "android.net.wifi.p2p.PEERS_CHANGED" ,
            "android.net.wifi.p2p.STATE_CHANGED" ,
            "android.net.wifi.p2p.THIS_DEVICE_CHANGED" ,
            "android.net.wifi.rtt.action.WIFI_RTT_STATE_CHANGED" ,
            "android.net.wifi.supplicant.CONNECTION_CHANGE" ,
            "android.net.wifi.supplicant.STATE_CHANGE" ,
            "android.nfc.action.ADAPTER_STATE_CHANGED" ,
            "android.nfc.action.TRANSACTION_DETECTED" ,
            "android.os.action.DEVICE_IDLE_MODE_CHANGED" ,
            "android.os.action.POWER_SAVE_MODE_CHANGED" ,
            "android.provider.Telephony.SECRET_CODE" ,
            "android.provider.Telephony.SIM_FULL" ,
            "android.provider.Telephony.SMS_CB_RECEIVED" ,
            "android.provider.Telephony.SMS_DELIVER" ,
            "android.provider.Telephony.SMS_RECEIVED" ,
            "android.provider.Telephony.SMS_REJECTED" ,
            "android.provider.Telephony.SMS_SERVICE_CATEGORY_PROGRAM_DATA_RECEIVED" ,
            "android.provider.Telephony.WAP_PUSH_DELIVER" ,
            "android.provider.Telephony.WAP_PUSH_RECEIVED" ,
            "android.provider.action.DEFAULT_SMS_PACKAGE_CHANGED" ,
            "android.provider.action.EXTERNAL_PROVIDER_CHANGE" ,
            "android.provider.action.SYNC_VOICEMAIL" ,
            "android.security.STORAGE_CHANGED" ,
            "android.security.action.KEYCHAIN_CHANGED" ,
            "android.security.action.KEY_ACCESS_CHANGED" ,
            "android.security.action.TRUST_STORE_CHANGED" ,
            "android.speech.tts.TTS_QUEUE_PROCESSING_COMPLETED" ,
            "android.speech.tts.engine.TTS_DATA_INSTALLED" ,
            "android.telephony.action.DEFAULT_SMS_SUBSCRIPTION_CHANGED" ,
            "android.telephony.action.DEFAULT_SUBSCRIPTION_CHANGED" ,
            "android.telephony.action.REFRESH_SUBSCRIPTION_PLANS" ,
            "android.telephony.action.SIM_APPLICATION_STATE_CHANGED" ,
            "android.telephony.action.SIM_CARD_STATE_CHANGED" ,
            "android.telephony.action.SIM_SLOT_STATUS_CHANGED" ,
            "android.telephony.action.SUBSCRIPTION_CARRIER_IDENTITY_CHANGED" ,
            "android.telephony.euicc.action.NOTIFY_CARRIER_SETUP_INCOMPLETE" ,
            "android.telephony.euicc.action.OTA_STATUS_CHANGED"};
}


