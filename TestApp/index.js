/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HomeScreen from './src/screens/homeScreen/HomeScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
