import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

const SignupScreen = ({ navigation }: any) => {
  const [state, setState] = useState({ fname: '', lname: '', email: '', password: '', cpassword: '' });
  function setAppState(key: string, value: string) {
    setState((prevState) => ({ ...prevState, [key]: value }))
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="First Name"
          onChangeText={(value) => setAppState("fname", value)}
          value={state.fname}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Last Name"
          onChangeText={(value) => setAppState("lname", value)}
          value={state.lname}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          onChangeText={(value) => setAppState("email", value)}
          value={state.email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setAppState("password", value)}
          value={state.password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(value) => setAppState("cpassword", value)}
          value={state.cpassword}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('TabScreen')}>
        <View style={styles.submitButtonStyle}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.primary,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  submitButtonStyle: {
    padding: 12,
    backgroundColor: '#2c50ff',
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: 40,
    alignItems: 'center'
  }
});

export default SignupScreen;
