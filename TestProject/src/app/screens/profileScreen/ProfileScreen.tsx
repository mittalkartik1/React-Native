import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { translate } from "../../services/i18n.service";
import { styles } from "./styles";

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/profile_pic.jpeg')}
          style={styles.headerImageStyle} />
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            About
          </Text>
          <Text style={styles.bodyTextStyle}>{translate('profile_screen.about_me')}</Text>
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
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Mobile App Developer</Text>
              <Text style={{ fontSize: 14, color: '#696969' }}>Company Name</Text>
              <Text style={{ fontSize: 14, color: '#A9A9A9' }}>June 2020 - June 2022</Text>
              <Text style={{ fontSize: 14, color: '#A9A9A9' }}>Mohali, Punjab, India</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Education
          </Text>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/university.png')}
              style={{ width: 40, height: 40, alignContent: 'center', marginEnd: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Kurukshetra University</Text>
              <Text style={{ fontSize: 14, color: '#696969' }}>Bachelor of Technology</Text>
              <Text style={{ fontSize: 14, color: '#A9A9A9' }}>June 2020 - June 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerViewStyle}>
          <Text style={styles.headerTextStyle}>
            Skills
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 20 }}>React Native</Text>
          <View style={styles.skillContentStyle}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 20, height: 20, alignContent: 'center', marginEnd: 10 }} />
            <Text>React Native Developer at Xicom Technologies</Text>
          </View>
          <View style={styles.skillContentStyle}>
            <Image
              source={require('../../../assets/images/profile_pic.jpeg')}
              style={{ width: 20, height: 20, alignContent: 'center', marginEnd: 10 }} />
            <Text>Android Developer at Apptunix</Text>
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
            <View style={{ flex: 1 }}>
              <Text>XYZ Name</Text>
              <Text>iOS Devleoper</Text>
              <Text>Mohali, Punjab, India</Text>
              <Text style={{ marginTop: 20 }}>{translate('profile_screen.recommendation')}</Text>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;