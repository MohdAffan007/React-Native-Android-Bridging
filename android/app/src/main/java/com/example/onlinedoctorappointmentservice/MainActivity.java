package com.example.onlinedoctorappointmentservice;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import com.example.onlinedoctorappointmentservice.R;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = findViewById(R.id.button);

        button.setOnClickListener(view -> {
            Intent intent = new Intent(MainActivity.this, MyReactActivity.class);

            Bundle intials = new Bundle();

            intials.putString("action", "move to react native button");
            intials.putString("platform", "android");
            intent.putExtra("initialProps",intials);
            startActivity(intent);
        });
        // Initially load Screen1Fragment
//        if (savedInstanceState == null) {
////            loadFragment(new Screen1Fragment(), false);
//        }
    }

//    public void loadFragment(Fragment fragment, boolean addToBackStack) {
//        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
//        transaction.replace(R.id.fragment_container, fragment);
//        if (addToBackStack) {
//            transaction.addToBackStack(null);
//        }
//        transaction.commit();
//    }
}
