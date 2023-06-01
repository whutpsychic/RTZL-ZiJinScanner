package com.rtzl.zijinscanner;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

import java.util.Objects;

// 本程序中这个广播并不起作用，但是可以发送消息
public class BarcodeReceiver extends BroadcastReceiver {

    // 接收广播事件
    @Override
    public void onReceive(Context context, Intent intent) {
        if (Objects.equals(intent.getAction(), "io.honeywell.sdk.RTZL")){
//            MainActivity.popResultToFlutter(result);
        }
    }

}