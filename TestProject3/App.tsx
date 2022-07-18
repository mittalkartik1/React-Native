import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  SafeAreaView, StatusBar, StyleSheet, View
} from 'react-native';


const App = () => {

  const styles = StyleSheet.create({
    loaderStyle: {
      position: 'absolute', 
      left: 0, 
      right: 0, 
      top: 0, 
      bottom: 0
    },
    soundIconStyle: {
      height: 40, 
      width: 40, 
      tintColor: 'white'
    },
    crossViewStyle: { 
      backgroundColor: 'white', 
      borderRadius: 8, 
      height: 30, 
      width: 30, 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginStart: 20, 
      marginTop: 10 }
  });

  const CustomView = (props: { path: ImageSourcePropType }) => {
    return (
      <View>
        <ActivityIndicator animating color={'white'} size={80} style={styles.loaderStyle} />
        <Image source={props.path} style={styles.soundIconStyle} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
      <StatusBar backgroundColor={'#495DC0'} barStyle={'light-content'} />
      <View style={{ backgroundColor: '#495DC0', flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.crossViewStyle}>
            <Image source={require('./app/assets/images/close.png')} style={{ height: 20, width: 20, tintColor: '#495DC0' }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 30 }}>
          <CustomView path={require('./app/assets/images/drop.png')} />
          <CustomView path={require('./app/assets/images/rainbow.png')} />
          <CustomView path={require('./app/assets/images/cloud.png')} />
          <CustomView path={require('./app/assets/images/thunder.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
