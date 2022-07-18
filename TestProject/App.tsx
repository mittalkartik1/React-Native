/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Section: React.FC<{
  title: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    flex: 1
  };

  useEffect(() => {
    // Initializing Google SDK
    GoogleSignin.configure({
      webClientId: '814038083926-nr3hkpc601ljtms9dqqhmekof8db9e48.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices()
      console.log("===>aayaaaa");
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      console.log("===>"+idToken);

      // // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // // Sign-in the user with the credential
      const userCredentials = await auth().signInWithCredential(googleCredential);
      console.log("===>userCreds" + JSON.stringify(userCredentials));
    } catch (e: any) {
      console.log("===>credsError" + JSON.stringify(e));
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={onGoogleButtonPress} />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
