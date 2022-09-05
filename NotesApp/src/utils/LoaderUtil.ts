import { createRef } from "react";
import { Alert, Platform, ToastAndroid } from "react-native";

export const appNavRef:any = createRef();

export const showFullScreenLoader = (value: boolean) => {
  if (appNavRef.current) {
    appNavRef.current.showAppWideLoader(value);
  }
};

export const showMessage = (msg: string) => {
  if(Platform.OS === 'android'){
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  }else{
    Alert.alert(msg)
  }
}
