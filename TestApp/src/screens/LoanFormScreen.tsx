import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppStyles, styles } from "../styles/AppStyles";
import { checkIfValidEmail, checkIfValidName } from "../utils/Utils";
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { NavigationContainer } from "@react-navigation/native";

export const LoanFormScreen = ({navigation} : any) => {
    const [identityType, setIdentityType] = useState(
        [
            { name: 'Driver License', selected: true },
            { name: 'Non-Driver/State ID', selected: false },
            { name: 'US Military', selected: false },
            { name: 'US Passport', selected: false },
        ])

    const [state, setState] = useState({
        fname: { value: '', error: '' },
        lname: { value: '', error: '' },
        email: { value: '', error: '' },
        dob: { value: '', error: '' },
        phone: { value: '', error: '' },
        sAddress: { value: '', error: '' },
        houseNumber: { value: '', error: '' },
        zipcode: { value: '', error: '' },
        state: { value: '', error: '' },
        idType: { value: identityType[0], error: '' },
        idNumber: { value: '', error: '' },
        idState: { value: '', error: '' }
    });

    const [date, setDate] = useState({ date: new Date(), isOpen: false });

    function toggleIdentityType(selectedIndex: number) {
        setFormState('idType', identityType[selectedIndex].name);
        const indentityArray = identityType.map((item, index) => {
            item.selected = index === selectedIndex;
            return item;
        });
        setIdentityType(indentityArray)
    }

    function setFormState(key: string, value: string, error: string = "") {
        setState((prevState) => ({ ...prevState, [key]: { value, error } }))
    }

    function onRegister() {
        let error = false;
        if (!state.fname.value) {
            setFormState("fname", state.fname.value, "Please enter first name");
            error = true;
        } else if (!checkIfValidName(state.fname.value)) {
            setFormState("fname", state.fname.value, "Please enter valid first name");
            error = true;
        }

        if (!state.lname.value) {
            setFormState("lname", state.lname.value, "Please enter last name");
            error = true;
        } else if (!checkIfValidName(state.lname.value)) {
            setFormState("lname", state.lname.value, "Please enter valid last name");
            error = true;
        }

        if (!state.email.value) {
            setFormState("email", state.email.value, "Please enter email");
            error = true;
        } else if (!checkIfValidEmail(state.email.value)) {
            setFormState("email", state.email.value, "Please enter valid email");
            error = true;
        }

        if (!state.dob.value) {
            setFormState("dob", state.dob.value, "Please select date");
            error = true;
        }

        if (!state.phone.value) {
            setFormState("phone", state.phone.value, "Please enter phone");
            error = true;
        } else if (state.phone.value.length < 10) {
            setFormState("phone", state.phone.value, "Please enter valid phone");
            error = true;
        }
        if (!state.sAddress.value) {
            setFormState("sAddress", state.sAddress.value, "Please enter street address");
            error = true;
        }
        if (!state.houseNumber.value) {
            setFormState("houseNumber", state.houseNumber.value, "Please enter apartment number");
            error = true;
        }
        if (!state.zipcode.value) {
            setFormState("zipcode", state.zipcode.value, "Please enter zipcode");
            error = true;
        } else if (state.zipcode.value.length < 6) {
            setFormState("zipcode", state.zipcode.value, "Please enter valid zipcode");
            error = true;
        }
        if (!state.state.value) {
            setFormState("state", state.state.value, "Please enter state");
            error = true;
        }
        if (!state.idNumber.value) {
            setFormState("idNumber", state.idNumber.value, "Please enter id number");
            error = true;
        }
        if (!state.idState.value) {
            setFormState("idState", state.idState.value, "Please enter state");
            error = true;
        }
        if (!error) {
            // submit this data by hitting api
            let SubmitData = {
                PersonalDetails: {
                    FirstName: state.fname.value,
                    LastName: state.lname.value,
                    EmailAddress: state.email.value,
                    PhoneNumber: "+91" + state.phone.value,
                    DateOfBirth: state.dob.value,
                },
                Address: {
                    StreetAddress: state.sAddress.value,
                    ApartmentNumber: state.houseNumber.value,
                    ZipCode: state.zipcode.value,
                    State: state.state.value,
                },
                Identification: {
                    ResidentialProof: state.idType.value,
                    ResidentialProofID: state.idType.value,
                    IdNumber: state.idNumber.value,
                    IdState: state.idState.value,
                }
            }
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
                    <View style={[styles.inputViewStyle, { marginRight: 5, borderColor: state.fname.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>First Name</Text>
                        <TextInput
                            value={state.fname.value}
                            returnKeyType={'done'}
                            style={styles.textInputStyle}
                            onChangeText={value => setFormState('fname', value)}
                        />
                        {
                            state.fname.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.fname.error}</Text>
                        }
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5, borderColor: state.lname.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>Last Name</Text>
                        <TextInput
                            value={state.lname.value}
                            returnKeyType={'done'}
                            style={styles.textInputStyle}
                            onChangeText={value => setFormState('lname', value)}
                        />
                        {
                            state.lname.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.lname.error}</Text>
                        }
                    </View>
                </View>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12, borderColor: state.email.error ? AppStyles.color.error : '#e6e6e6' }]}>
                    <Text>Email</Text>
                    <TextInput
                        value={state.email.value}
                        returnKeyType={'done'}
                        onChangeText={(value) => setFormState('email', value)}
                        style={styles.textInputStyle}
                    />
                    {
                        state.email.error.length > 0 &&
                        <Text style={styles.errorStyle}>{state.email.error}</Text>
                    }
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5, borderColor: state.dob.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>Date of Birth</Text>
                        <TouchableOpacity onPress={() => setDate(prevState => ({ ...prevState, isOpen: true }))}>
                            <TextInput
                                editable={false}
                                focusable={false}
                                style={styles.textInputStyle}
                                value={state.dob.value.length > 0 ? moment(date.date).format('DD/MM/YYYY') : ''}
                                onChangeText={(value) => setFormState('dob', value)}
                            />
                        </TouchableOpacity>
                        {
                            state.dob.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.dob.error}</Text>
                        }
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5, borderColor: state.phone.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>Phone Number</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>+91</Text>
                            <TextInput
                                returnKeyType='done'
                                keyboardType='numeric'
                                value={state.phone.value}
                                onChangeText={(value) => setFormState('phone', value)}
                                style={{
                                    borderBottomColor: '#808080',
                                    borderBottomWidth: 1,
                                    flex: 1,
                                    padding: 0
                                }}
                            />
                        </View>
                        {
                            state.phone.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.phone.error}</Text>
                        }
                    </View>
                </View>
            </>
        );
    }

    const setAddressView = () => {
        return (
            <>
                <Text style={[styles.font18bold, { fontSize: 16, marginTop: 16, borderColor: state.idState.error ? AppStyles.color.error : '#e6e6e6' }]}>
                    Address
                </Text>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12, borderColor: state.sAddress.error ? AppStyles.color.error : '#e6e6e6' }]}>
                    <Text>Street Address</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        value={state.sAddress.value}
                        onChangeText={(value) => setFormState('sAddress', value)}
                    />
                    {
                        state.sAddress.error.length > 0 &&
                        <Text style={styles.errorStyle}>{state.sAddress.error}</Text>
                    }
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5, borderColor: state.houseNumber.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>Apartment Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            value={state.houseNumber.value}
                            onChangeText={(value) => setFormState('houseNumber', value)}
                        />
                        {
                            state.houseNumber.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.houseNumber.error}</Text>
                        }
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5, borderColor: state.zipcode.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>Zip Code</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            value={state.zipcode.value}
                            onChangeText={(value) => setFormState('zipcode', value)}
                        />
                        {
                            state.zipcode.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.zipcode.error}</Text>
                        }
                    </View>
                </View>
                <View style={[styles.inputViewStyle, { flex: 0, marginTop: 12, borderColor: state.state.error ? AppStyles.color.error : '#e6e6e6' }]}>
                    <Text>State</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        value={state.state.value}
                        onChangeText={(value) => setFormState('state', value)}
                    />
                    {
                        state.state.error.length > 0 &&
                        <Text style={styles.errorStyle}>{state.state.error}</Text>
                    }
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
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleIdentityType(0)}>
                        <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginRight: 5, borderColor: '#e6e6e6' }]}>
                            <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={identityType[0].selected ? require('../../assets/icons/radio_selected.png') : require('../../assets/icons/radio_unselected.png')} />
                            <Text>{identityType[0].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleIdentityType(1)}>
                        <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginLeft: 5, borderColor: '#e6e6e6' }]}>
                            <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={identityType[1].selected ? require('../../assets/icons/radio_selected.png') : require('../../assets/icons/radio_unselected.png')} />
                            <Text>{identityType[1].name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleIdentityType(2)}>
                        <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginRight: 5, borderColor: '#e6e6e6' }]}>
                            <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={identityType[2].selected ? require('../../assets/icons/radio_selected.png') : require('../../assets/icons/radio_unselected.png')} />
                            <Text>{identityType[2].name}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleIdentityType(3)}>
                        <View style={[styles.inputViewStyle, styles.flexRowAlignCenter, { marginLeft: 5, borderColor: '#e6e6e6' }]}>
                            <Image style={{ height: 20, width: 20, marginEnd: 8 }} source={identityType[3].selected ? require('../../assets/icons/radio_selected.png') : require('../../assets/icons/radio_unselected.png')} />
                            <Text>{identityType[3].name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.rowViewStyle}>
                    <View style={[styles.inputViewStyle, { marginRight: 5, borderColor: state.idNumber.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>ID Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            value={state.idNumber.value}
                            onChangeText={(value) => setFormState('idNumber', value)}
                        />
                        {
                            state.idNumber.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.idNumber.error}</Text>
                        }
                    </View>
                    <View style={[styles.inputViewStyle, { marginLeft: 5, borderColor: state.idState.error ? AppStyles.color.error : '#e6e6e6' }]}>
                        <Text>ID State</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            value={state.idState.value}
                            onChangeText={(value) => setFormState('idState', value)}
                        />
                        {
                            state.idState.error.length > 0 &&
                            <Text style={styles.errorStyle}>{state.idState.error}</Text>
                        }
                    </View>
                </View>
            </>
        );
    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/icons/close.png')} style={{ height: 15, width: 15, margin: 15 }} />
            </TouchableOpacity>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={styles.topViewStyle}>
                        <Text style={styles.font18bold}>Customer Information</Text>
                        {setPersonalDetailsView()}
                        {setAddressView()}
                        {setIdentificationView()}
                        <DatePicker
                            modal
                            mode={'date'}
                            date={date.date}
                            open={date.isOpen}
                            onConfirm={(date) => {
                                setDate({ isOpen: false, date: date })
                                setFormState("dob", date.getTime().toString())
                            }}
                            onCancel={() => setDate(prevState => ({ ...prevState, isOpen: false }))}
                        />
                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={onRegister}>
                            <View style={styles.submitButtonStyle}>
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}