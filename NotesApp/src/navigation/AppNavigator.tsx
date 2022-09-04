import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SCREENS } from '../constants/enum/GeneralEnum';
import LoginScreen from '../screens/loginScreen/LoginScreen';

const AppNavigator = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const Stack = createNativeStackNavigator();

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Stack.Navigator
                initialRouteName={SCREENS.LOGIN_SCREEN}
                screenOptions={{ headerShown: false}}>
                <Stack.Screen
                    name={SCREENS.LOGIN_SCREEN}
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

export default AppNavigator;