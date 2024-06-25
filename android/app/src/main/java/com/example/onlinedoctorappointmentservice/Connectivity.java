package com.example.onlinedoctorappointmentservice;

import static androidx.core.content.ContextCompat.startActivity;

import android.content.Intent;

import org.json.JSONObject;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import com.example.onlinedoctorappointmentservice.MainActivity;
import com.example.onlinedoctorappointmentservice.MyReactActivity;
import com.example.onlinedoctorappointmentservice.SecondActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Connectivity extends ReactContextBaseJavaModule {

    private static final String TAG = "Connectivity";

    public Connectivity(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }
    @ReactMethod
    public void goToSecondActivity() {
        Intent intent = new Intent(getCurrentActivity(), SecondActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}