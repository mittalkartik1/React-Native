import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/profile_pic.jpeg')}
          style={{ width: 100, height: 100, borderRadius: 100, marginTop: 40, marginBottom: 40 }} />
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            About
          </Text>
          <Text style={styles.bodyTextStyle}>
            This is my about. Bla bla bla. This is my about. Bla bla bla. This is my about. Bla bla bla. This is my about. Bla bla bla. This is my about. Bla bla bla. This is my about. Bla bla bla.
          </Text>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Experience
          </Text>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 40, height: 40, alignContent: 'center', marginEnd: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Mobile App Developer</Text>
              <Text style={{ fontSize: 14 }}>Company Name</Text>
              <Text style={{ fontSize: 14, color: '#808080' }}>June 2020 - June 2022</Text>
              <Text style={{ fontSize: 14, color: '#808080' }}>Mohali, Punjab, India</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Education
          </Text>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 40, height: 40, alignContent: 'center', marginEnd: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Kurukshetra University</Text>
              <Text style={{ fontSize: 14 }}>Bachelor of Technology</Text>
              <Text style={{ fontSize: 14, color: '#808080' }}>June 2020 - June 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Skills
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 20 }}>React Native</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 20, height: 20, alignContent: 'center', marginEnd: 10 }} />
            <Text>React Native Developer at Compnay name</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 20, height: 20, alignContent: 'center', marginEnd: 10 }} />
            <Text>React Native Developer at Compnay name</Text>
          </View>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Recommendations
          </Text>
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 20, height: 20, alignContent: 'center', marginEnd: 10 }} />
            <View>
              <Text>XYZ Name</Text>
              <Text>iOS Devleoper</Text>
              <Text>Mohali, Punjab, India</Text>
              <Text style={{marginTop: 20}}>This is the recommendation that I have given to this person few days ago.</Text>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;