import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { ActivityIndicator, Dimensions, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, SCREENS } from '../constants/enum/GeneralEnum';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import NotesDetailScreen from '../screens/notesScreen/NotesDetailScreen';
import NotesListScreen from '../screens/notesScreen/NotesListScreen';

const AppNavigator = (_props: any, ref: any) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : 'white',
    };
    const Stack = createNativeStackNavigator();
    const [isLoaderVisible, showLoader] = useState(false);

    useImperativeHandle(ref, () => ({
        showAppWideLoader: (value: boolean) => {
            showLoader(value);
        },
    }));

    return (
        <SafeAreaView style={[backgroundStyle, { flex: 1 }]} >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Stack.Navigator
                initialRouteName={SCREENS.LOGIN_SCREEN}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={SCREENS.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={SCREENS.NOTES_LIST_SCREEN}
                    component={NotesListScreen}
                />
                <Stack.Screen
                    name={SCREENS.NOTES_DETAIL_SCREEN}
                    component={NotesDetailScreen}
                />
            </Stack.Navigator>
            {isLoaderVisible && (
                <>
                    <View style={styles.loaderTopViewStyle} />
                    <View
                        style={styles.loaderBottomViewStyle}>
                        <ActivityIndicator size={'large'} color={COLORS.PRIMARY} />
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loaderTopViewStyle: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        opacity: 0.5,
        backgroundColor: 'black',
        position: 'absolute'
    },
    loaderBottomViewStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100    
    }
})

export default forwardRef(AppNavigator);