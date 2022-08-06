import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { styles } from "../styles/AppStyles";
import { checkIfValidName } from "../utils/Utils";

export const LoanFormScreen = () => {
    const [state, setState] = useState({ fname: '', lname: '', email: '' })

    function onChangeName(text: string, type: string){
        const isValidName = checkIfValidName(text);
        if (type === 'fname') {
            setState(prevState => ({ ...prevState, fname: isValidName ? text : text.slice(0, -1) }))
        } else {
            setState(prevState => ({ ...prevState, lname: isValidName ? text : text.slice(0, -1) }))
        }
    }

    const setPersonalDetailsView = () => {
        return (
            <>
                <Text style={[styles.font18bold, { fontSize: 16, marginTop: 16 }]}>
                    Personal details
                </Text>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5 }]}>
                        <Text>First Name</Text>
                        <TextInput
                            value={state.fname}
                            returnKeyType={'done'}
                            style={styles.textInputStyle}
                            onChangeText={value => onChangeName(value, 'fname')}
                        />
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5 }]}>
                        <Text>Last Name</Text>
                        <TextInput
                            value={state.lname}
                            returnKeyType={'done'}
                            style={styles.textInputStyle}
                            onChangeText={value => onChangeName(value, 'lname')}
                        />
                    </View>
                </View>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12 }]}>
                    <Text>Email</Text>
                    <TextInput
                        value={state.email}
                        returnKeyType={'done'}
                        onChangeText={(value) => setState(prevState => ({...prevState, email: value}))}
                        style={styles.textInputStyle}
                    />
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5 }]}>
                        <Text>Date of Birth</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5 }]}>
                        <Text>Phone Number</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>+91</Text>
                            <TextInput
                                returnKeyType='done'
                                keyboardType='numeric'
                                style={{
                                    borderBottomColor: '#808080',
                                    borderBottomWidth: 1,
                                    flex: 1,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </>
        );
    }

    const setAddressView = () => {
        return (
            <>
                <Text style={[styles.font18bold, { fontSize: 16, marginTop: 16 }]}>
                    Address
                </Text>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12 }]}>
                    <Text>Street Address</Text>
                    <TextInput
                        style={styles.textInputStyle}
                    />
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5 }]}>
                        <Text>Apartment Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5 }]}>
                        <Text>Zip Code</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />
                    </View>
                </View>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12 }]}>
                    <Text>State</Text>
                    <TextInput
                        style={styles.textInputStyle}
                    />
                </View>
            </>
        );
    }

    const setIdentificationView = () => {
        return (
            <>
                <Text style={[styles.font18bold, { fontSize: 16, marginTop: 16 }]}>
                    Identification
                </Text>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginRight: 5 }]}>
                        <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={require('../../assets/icons/radio_selected.png')} />
                        <Text style={{ flex: 1 }}>Driver License</Text>
                    </View>
                    <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginLeft: 5 }]}>
                        <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={require('../../assets/icons/radio_selected.png')} />
                        <Text style={{ flex: 1 }}>Non-Driver/State ID</Text>
                    </View>
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginRight: 5 }]}>
                        <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={require('../../assets/icons/radio_selected.png')} />
                        <Text style={{ flex: 1 }}>US Military</Text>
                    </View>
                    <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginLeft: 5 }]}>
                        <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={require('../../assets/icons/radio_selected.png')} />
                        <Text style={{ flex: 1 }}>US Passport</Text>
                    </View>
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5 }]}>
                        <Text>ID Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5 }]}>
                        <Text>ID State</Text>
                        <TextInput
                            style={styles.textInputStyle}
                        />
                    </View>
                </View>
            </>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.topViewStyle}>
                <Text style={styles.font18bold}>Customer Information</Text>
                {setPersonalDetailsView()}
                {setAddressView()}
                {setIdentificationView()}
            </View>
        </View>
    );
}