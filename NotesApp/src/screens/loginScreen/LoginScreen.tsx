import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { STRINGS } from '../../constants/enum/GeneralEnum';
import { styles } from './styles';

const LoginScreen = () => {

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: STRINGS.WEB_CLIENT_ID,
          offlineAccess: true,
          scopes: [STRINGS.GOOGLE_SIGNIN_SCOPE_1]
        });
      }, []); 

    async function onGoogleButtonPress() {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            const response = await auth().signInWithCredential(googleCredential);
        } catch (e: any) {
            console.log("errrror" + JSON.stringify(e));
        }
    }

    return (
        <View style={styles.mainViewStyle}>
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={onGoogleButtonPress} />
        </View>
    )
}

export default LoginScreen;