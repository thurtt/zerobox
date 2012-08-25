package com.flyerzero.zerobox;


import org.apache.cordova.*;
import android.os.Bundle;
import android.view.WindowManager;

public class ZeroBoxActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}