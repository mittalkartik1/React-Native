import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import LoanScreen from '../screens/LoanScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import SignupScreen from '../screens/SignupScreen';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingPaymentScreen from '../screens/PaymentScreen';
import { LoanFormScreen } from '../screens/LoanFormScreen';
import { AppStyles } from '../styles/AppStyles';


const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='SignupScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
      />
      <Stack.Screen name="TabScreen" component={MyTabs} />
      <Stack.Screen name="LoanFormScreen" component={LoanFormScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon = require('../../assets/icons/home_icon.png');
          const tintColor = focused ? AppStyles.color.primary : AppStyles.color.grey

          if (route.name === 'Home') {
            icon = require('../../assets/icons/home_icon.png');
          } else if (route.name === 'Search') {
            icon = require('../../assets/icons/search_icon.png');
          }else if (route.name === 'Loans') {
            icon = require('../../assets/icons/loan_icon.png');
          }else if (route.name === 'Profile') {
            icon = require('../../assets/icons/profile_icon.png');
          }

          return <Image source={icon} style={{height: 25, width: 25, tintColor: tintColor}} />;
        },
        tabBarActiveTintColor: AppStyles.color.primary,
        tabBarInactiveTintColor: AppStyles.color.grey,
      })}
    >
      <Tab.Screen name="Home" component={HomeTabs} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Loans" component={LoanScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const TopTabs = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="LoanList" component={LoanScreen} />
      <TopTabs.Screen name="PaymentList" component={UpcomingPaymentScreen} />
    </TopTabs.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator;