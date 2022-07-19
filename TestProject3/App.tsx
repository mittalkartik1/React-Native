import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  SafeAreaView, StatusBar, View
} from 'react-native';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import { downloadFile } from './app/services/http.service';
import { styles } from './app/styles/Styles';
import Theme from './app/styles/Theme';

const App = () => {

  const [loading, setIsLoading] = useState(true);
  const lottieRef = useRef<any>(null);
  let myMusic: Sound | null = null;

  const CustomView = (props: { path: ImageSourcePropType, loading: boolean }) => {
    return (
      <View>
        <ActivityIndicator animating={props.loading} color={'white'} size={80} style={styles.loaderStyle} />
        <Image source={props.path} style={styles.soundIconStyle} />
      </View>
    );
  }

  async function downloadSound(fileUrl: string, fileName: string) {
    let filePath = `${RNFS.CachesDirectoryPath}/${fileName}`;
    const isFileExists = await RNFS.exists(filePath);
    if (!isFileExists) {
      const result = await downloadFile(fileUrl, fileName); //Directly accessing function from service file, later dispatch method can be added
      setIsLoading(false);
      if (result) {
        playSound(fileName);
      } else {
        // Handle the error here
      }
    } else {
      setIsLoading(false);
      playSound(fileName);
    }
  }

  function playSound(fileName: string) {
    Sound.setCategory('Playback');
    myMusic = new Sound(`${RNFS.CachesDirectoryPath}/${fileName}`, Sound.CACHES, (error: any) => {
      if (!error) {
        lottieRef?.current.reset();
        lottieRef?.current.play(); //Reset and Playing the wave animation
        myMusic?.play((onCompletion: any) => {
          if (onCompletion) {
            lottieRef?.current.reset(); //Wave animation will be reset after completetion of sound
          } else {
            // Handle the error here
            lottieRef?.current.reset(); //Wave animation will be reset in case of any error
            console.log('Playback failed due to some issues');
          }
        });
      } else {
        // Handle the error here
        console.log(JSON.stringify(error));
      }
    })
  }

  useEffect(() => {
    const fileUrl = "https://file-examples.com/storage/fe21590a2962d597a9a51ad/2017/11/file_example_MP3_700KB.mp3";
    const fileName = "water_sound.mp3"
    downloadSound(fileUrl, fileName); // Currently we are downloading for only 1 sound

    return (() => {
      myMusic?.release();
    })
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Theme.PRIMARY_COLOR} barStyle={'light-content'} />
      <View style={{ backgroundColor: Theme.PRIMARY_COLOR, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.crossViewStyle}>
            <Image source={require('./app/assets/images/close.png')} style={styles.closeImageStyle} />
          </View>
          <LottieView
            ref={lottieRef}
            progress={0.1}
            source={require('./app/assets/lottie/84628-voice-line-wave-animation.json')}
            loop
            style={{ width: '100%' }}
          />
        </View>
        <View style={styles.bottomViewStyle}>
          <CustomView path={require('./app/assets/images/drop.png')} loading={loading} />
          <CustomView path={require('./app/assets/images/rainbow.png')} loading={false} />
          <CustomView path={require('./app/assets/images/cloud.png')} loading={false} />
          <CustomView path={require('./app/assets/images/thunder.png')} loading={false} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
