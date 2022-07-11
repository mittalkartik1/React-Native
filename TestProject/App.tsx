/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Image, Modal, SafeAreaView, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/app/screens/homeScreen/HomeScreen';
import PostScreen from './src/app/screens/postScreen/PostScreen';
import ProfileScreen from './src/app/screens/profileScreen/ProfileScreen';
import { initLocalTranslations } from './src/app/services/i18n.service';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    initLocalTranslations();
  },[]);

  return (
    // <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('./src/assets/images/close.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <Text style={{ marginStart: 20, fontWeight: 'bold', fontSize: 18, flex: 1 }}>Share Post</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Image
                source={require('./src/assets/images/profile_pic.jpeg')}
                style={{ width: 40, height: 40, borderRadius: 40 }} />
              <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 10 }}>Kartik Mittal</Text>
            </View>
            <TextInput blurOnSubmit multiline placeholder='What do you want to talk about' textAlignVertical='top' style={{ marginTop: 20, flex: 1, textAlignVertical: 'top' }} />

          </View>

        </SafeAreaView>
      </Modal>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeScreen') {
                  iconName = require('./src/assets/images/home_icon.png');
                } else if (route.name === 'PostScreen') {
                  iconName = require('./src/assets/images/add_post_icon.png');
                } else {
                  iconName = require('./src/assets/images/profile_icon.png');
                }

                // You can return any component that you like here!
                return <Image source={iconName} style={{ width: 30, height: 30, tintColor: focused ? Colors.primary : '#000000' }} />;
              },
              tabBarActiveTintColor: Colors.primary,
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="HomeScreen"
              options={{ tabBarLabel: 'Home' }}
              component={HomeScreen} />
            <Tab.Screen
              name="PostScreen"
              listeners={({ navigation }) => ({
                tabPress: (e) => {
                  e.preventDefault();
                  setModalVisible(true);
                }
              })}
              options={{ tabBarLabel: 'Add Post' }}
              component={PostScreen} />
            <Tab.Screen
              name="ProfileScreen"
              options={{ tabBarLabel: 'Profile' }}
              component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
    // </SafeAreaView>
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
