import React, { useState } from 'react';
import {
  NativeModules,
  SafeAreaView, StatusBar, StyleSheet, Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setState] = useState({text: '', encryptedText: '', decryptedText: ''})

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  async function encryptData() {
    if(state.text.length <= 0){
      ToastAndroid.show("Enter text first", ToastAndroid.SHORT);
      return;
    }
    try {
      const output = await NativeModules.NativeAppModule.encrypt(state.text);
      setState(prevState => ({...prevState, encryptedText: output}));
    } catch (e: any) {
      ToastAndroid.show("Some error occured", ToastAndroid.SHORT);  
    }
  }

  async function decryptData() {
    if(state.encryptedText.length <= 0){
      ToastAndroid.show("Encrypt some data first", ToastAndroid.SHORT);
      return;
    }
    try {
      const input = await NativeModules.NativeAppModule.decrypt(state.encryptedText);
      setState(prevState => ({...prevState, decryptedText: input}));
    } catch (e: any) {
      ToastAndroid.show("Some error occured", ToastAndroid.SHORT);
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 12 }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Enter any text'
          multiline
          onChangeText={(value) => setState(prevState => ({...prevState, text: value}))}
        />
        <TouchableOpacity style={{ width: '100%' }} onPress={encryptData}>
          <View style={styles.buttonViewStyle}>
            <Text style={{ color: 'white' }}>Encrypt</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.boldTextStyle}>Encrypted Text:</Text>
        <Text style={styles.textStyle}>{state.encryptedText}</Text>
        <TouchableOpacity style={{ width: '100%' }} onPress={decryptData}>
          <View style={styles.buttonViewStyle}>
            <Text style={{ color: 'white' }}>Decrypt</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.boldTextStyle}>Decrypted Text:</Text>
        <Text style={styles.textStyle}>{state.decryptedText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boldTextStyle: { marginTop: 20, fontWeight: 'bold', fontSize: 14, color: 'black', alignSelf: 'flex-start' },
  buttonViewStyle: { backgroundColor: '#2c50ff', padding: 12, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  textStyle: { marginTop: 5, fontSize: 14, color: 'black', alignSelf: 'flex-start' },
  textInputStyle: { borderColor: '#2c50ff', borderWidth: 1, borderRadius: 20, width: '100%', paddingHorizontal: 12 }
})

export default App;
