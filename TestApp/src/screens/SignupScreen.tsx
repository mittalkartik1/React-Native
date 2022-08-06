import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppStyles } from '../styles/AppStyles';
import { checkIfValidEmail, checkIfValidName, storeProfileData } from '../utils/Utils';

const SignupScreen = ({ navigation }: any) => {

  const [state, setState] = useState({ fname: { value: '', error: '' }, lname: { value: '', error: '' }, email: { value: '', error: '' }, password: { value: '', error: '' }, cpassword: { value: '', error: '' } });

  function setAppState(key: string, value: string, error: string = "") {
    setState((prevState) => ({ ...prevState, [key]: { value, error } }))
  }
  function onRegister() {
    let error = false;
    if (!state.fname.value) {
      setAppState("fname", state.fname.value, "Please enter first name");
      error = true;
    } else if (!checkIfValidName(state.fname.value)) {
      setAppState("fname", state.fname.value, "Please enter valid first name");
      error = true;
    }

    if (!state.lname.value) {
      setAppState("lname", state.lname.value, "Please enter last name");
      error = true;
    } else if (!checkIfValidName(state.lname.value)) {
      setAppState("lname", state.lname.value, "Please enter valid last name");
      error = true;
    }

    if (!state.email.value) {
      setAppState("email", state.email.value, "Please enter email");
      error = true;
    } else if (!checkIfValidEmail(state.email.value)) {
      setAppState("email", state.email.value, "Please enter valid email");
      error = true;
    }

    if (!state.password.value) {
      setAppState("password", state.password.value, "Please enter password");
      error = true;
    } else if (state.password.value.length < 8) {
      setAppState("password", state.password.value, "Password should contain atleast 8 letters");
      error = true;
    }

    if (!state.cpassword.value) {
      setAppState("cpassword", state.cpassword.value, "Please enter password");
      error = true;
    } else if (state.cpassword.value !== state.password.value) {
      setAppState("cpassword", state.cpassword.value, "Both passwords should match");
      error = true;
    }

    if (!error) {
      //send data to api and store some data to show in app
      storeProfileData({
        fname: state.fname.value,
        lname: state.lname.value,
        email: state.email.value,
        isRegistered: true
      })
      
      navigation.reset({
        routes: [{ name: 'TabScreen' }]
      });
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
        <View style={[styles.InputContainer, { borderColor: !state.fname.error ? AppStyles.color.grey : AppStyles.color.error }]}>
          <TextInput
            style={styles.body}
            placeholder="First Name"
            onChangeText={(value) => setAppState("fname", value)}
            value={state.fname.value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          state.fname.error.length > 0 &&
          <Text style={styles.errorStyle}>{state.fname.error}</Text>
        }
        <View style={[styles.InputContainer, { borderColor: !state.lname.error ? AppStyles.color.grey : AppStyles.color.error }]}>
          <TextInput
            style={styles.body}
            placeholder="Last Name"
            onChangeText={(value) => setAppState("lname", value)}
            value={state.lname.value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          state.lname.error.length > 0 &&
          <Text style={styles.errorStyle}>{state.lname.error}</Text>
        }
        <View style={[styles.InputContainer, { borderColor: !state.email.error ? AppStyles.color.grey : AppStyles.color.error }]}>
          <TextInput
            style={styles.body}
            placeholder="E-mail Address"
            onChangeText={(value) => setAppState("email", value)}
            value={state.email.value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          state.email.error.length > 0 &&
          <Text style={styles.errorStyle}>{state.email.error}</Text>
        }
        <View style={[styles.InputContainer, { borderColor: !state.password.error ? AppStyles.color.grey : AppStyles.color.error }]}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(value) => setAppState("password", value)}
            value={state.password.value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          state.password.error.length > 0 &&
          <Text style={styles.errorStyle}>{state.password.error}</Text>
        }
        <View style={[styles.InputContainer, { borderColor: !state.cpassword.error ? AppStyles.color.grey : AppStyles.color.error }]}>
          <TextInput
            style={styles.body}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(value) => setAppState("cpassword", value)}
            value={state.cpassword.value}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        {
          state.cpassword.error.length > 0 &&
          <Text style={styles.errorStyle}>{state.cpassword.error}</Text>
        }
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={onRegister}>
          <View style={styles.submitButtonStyle}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  },
  errorStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'left',
    color: 'red'
  }
});

export default SignupScreen;
