import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { SCREENS, STRINGS } from '../../constants/enum/GeneralEnum';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { showFullScreenLoader } from '../../utils/LoaderUtil';

const LoginScreen = ({navigation} : any) => {

    const dispatch = useDispatch();
    let isNavigated = false;

    useEffect(() => {
        showFullScreenLoader(true);
        GoogleSignin.configure({
            webClientId: STRINGS.WEB_CLIENT_ID,
            offlineAccess: true,
            scopes: [STRINGS.GOOGLE_SIGNIN_SCOPE_1]
        });
    }, []);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
        showFullScreenLoader(false);
        if(!!user?.email && !isNavigated){
            isNavigated = true;
            dispatch({'type': 'register_email', 'payload' : user.email})
            navigation.reset({
                index: 0,
                routes: [{ name: SCREENS.NOTES_LIST_SCREEN }]
           })
        }
    }

    async function onGoogleButtonPress() {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (e: any) {}
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