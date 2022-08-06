package com.testproject4;

import android.util.Base64;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Random;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import androidx.annotation.NonNull;

public class NativeAppModule extends ReactContextBaseJavaModule {
    @NonNull
    @Override
    public String getName() {
        return "NativeAppModule";
    }

    public static String encryptionKey = "ab821eb4b7d352cd";

    @ReactMethod
    public static void encrypt(String inputString, Promise promise) {
        try {
            byte[] data = inputString.getBytes(StandardCharsets.UTF_8);
            byte[] key = encryptionKey.getBytes(StandardCharsets.UTF_8);
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding"); //encryption algorithm
            SecretKeySpec secretKeySpec = new SecretKeySpec(key, "AES");

            byte[] finalIvs = new byte[16]; //creating iv
            new Random().nextBytes(finalIvs);
            IvParameterSpec ivps = new IvParameterSpec(finalIvs);

            cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivps);
            byte[] cipher_text = cipher.doFinal(data); //creating cipher

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream(); //concatenating iv and cipher
            outputStream.write(finalIvs);
            outputStream.write(cipher_text);
            byte[] c = outputStream.toByteArray();

            String final_cipher_text = Base64.encodeToString(c, Base64.DEFAULT); //converting output to base64

            promise.resolve(final_cipher_text);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public static void decrypt(String cipherText, Promise promise){
        try{
            byte[] decodedBase64Text = Base64.decode(cipherText, Base64.DEFAULT);
            byte[] key = encryptionKey.getBytes(StandardCharsets.UTF_8);
            byte[] iv = Arrays.copyOfRange(decodedBase64Text, 0, 16);
            byte[] cipher_text = Arrays.copyOfRange(decodedBase64Text, 16, decodedBase64Text.length);

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding"); //encryption algorithm

            SecretKeySpec secretKeySpec = new SecretKeySpec(key, "AES");
            IvParameterSpec ivps = new IvParameterSpec(iv);
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivps);

            String decryptString = new String(cipher.doFinal(cipher_text), StandardCharsets.UTF_8);

            promise.resolve(decryptString);
        }catch (Exception e){
            promise.reject(e);
        }
    }
}
