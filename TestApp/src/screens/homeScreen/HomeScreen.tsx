import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, useColorScheme,
  View
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { UserData } from '../../model/UserDataModel';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from './styles';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [state, setState] = useState<UserData | null>(null);
  const [character, setCharacter] = useState<any>(null);
  const marvelCharacters = [
    {
      name: 'Hulk',
      color: 'Green',
      weight: '100 KG',
      image: require('./src/assets/images/hulk.png')
    },
    {
      name: 'Iron Man',
      color: 'Red',
      weight: '90 KG',
      image: require('./src/assets/images/iron_man.png')
    },
    {
      name: 'Captain America',
      color: 'Blue',
      weight: '80 KG',
      image: require('./src/assets/images/captain_america.png')
    },
    {
      name: 'Thor',
      color: 'Grey & Red',
      weight: '120 KG',
      image: require('./src/assets/images/thor.png')
    }
  ];

  async function getUserData() {
    try {
      const response: any = await axios.get('https://reqres.in/api/users/2');
      const userObject: UserData = response.data.data;
      setState({ ...userObject, isSelected: false });
    } catch (e: any) {
      ToastAndroid.show("Some error occured!!", ToastAndroid.BOTTOM);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
    flex: 1
  };

  const userDetailItem = (item: { key: string, value: any }) => {
    const userData: any = state;
    return (
      <View style={{ marginBottom: 14 }}>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          {item.key}
        </Text>
        <View style={styles.inputStyle}>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>{`${userData[item.value]}`}</Text>
        </View>
      </View>
    );
  }

  const ProfilePicView = (props: { image: string }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: props.image }} style={styles.profilePicStyle} />
        {
          state !== null &&
          <TouchableOpacity onPress={() => setState((prevState) => ({ ...prevState, isSelected: !state.isSelected }))}>
            <Image source={state?.isSelected ? require('./src/assets/icons/toggle_enable.png') : require('./src/assets/icons/toggle_disable.png')} style={{ height: 55, width: 55 }} />
          </TouchableOpacity>
        }

      </View>
    );
  }

  const setCharacterView = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 18, alignItems: 'center' }}>
        <Image source={marvelCharacters[character].image} style={{ height: 80, width: 80 }} />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text>{`Name: ${marvelCharacters[character].name}`}</Text>
          <Text>{`Color: ${marvelCharacters[character].color}`}</Text>
          <Text>{`Weight: ${marvelCharacters[character].weight}`}</Text>
        </View>
      </View>
    );
  }

  const setFooterView = () => {
    return (
      <View style={{ marginBottom: 14 }}>
        <Text style={{ fontSize: 16, marginBottom: 8 }}>
          {'Select any character'}
        </Text>
        <SelectDropdown
          rowStyle={styles.width100}
          buttonStyle={styles.width100}
          rowTextStyle={{ textAlign: 'left' }}
          data={marvelCharacters}
          defaultButtonText={'Select any character'}
          onSelect={(_selectedItem, index) => {
            setCharacter(index);
          }}
          buttonTextAfterSelection={(selectedItem, _index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, _index) => {
            return item.name
          }}
        />
        {
          character !== null && setCharacterView()
        }
      </View>
    );
  }

  const userProperties: Array<{ key: string, value: any }> = [{ key: 'Id', value: 'id' }, { key: 'First Name', value: 'first_name' }, { key: 'Last Name', value: 'last_name' }, { key: 'Email', value: 'email' }, { key: 'Activation Status', value: 'isSelected' }]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          padding: 12,
          alignItems: 'center',
        }}>
        {
          state !== null ?
            <FlatList
              style={styles.width100}
              data={userProperties}
              ListHeaderComponentStyle={{ alignItems: 'center', marginBottom: 18 }}
              renderItem={({ item }) => userDetailItem(item)}
              ListHeaderComponent={<ProfilePicView image={state.avatar} />}
              ListFooterComponent={setFooterView}
            />
            :
            <View></View>
        }
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
