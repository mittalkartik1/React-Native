import React from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";

const HomeScreen = () => {

  const getItem = () => {
    return (
      <View style={{ padding: 10, backgroundColor: 'white', marginTop: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Image
            source={require('../../../assets/images/profile_pic.jpeg')}
            style={{ width: 40, height: 40, borderRadius: 40 }} />
          <View>
            <Text style={{ fontWeight: '500', fontSize: 14, marginLeft: 10 }}>Kartik Mittal</Text>
            <Text style={{ fontSize: 12, marginLeft: 10 }}>Profile Of Person</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>21 Hrs</Text>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>This is body of the post, Very long body. Very Very long.This is body of the post, Very long body. Very Very long.This is body of the post, Very long body. Very Very long.This is body of the post, Very long body. Very Very long.This is body of the post, Very long body. Very Very long.This is body of the post, Very long body. Very Very long.</Text>
        <View style={{ borderBottomColor: '#D3D3D3', borderBottomWidth: 1, paddingBottom: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
          <Text style={{ color: '#808080' }}>
            Anonymous and 178 others
          </Text>
          <Text style={{ color: '#808080' }}>
            12 comments
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/like_icon.png')}
              style={{ width: 20, height: 20 }} />
            <Text style={{ fontSize: 10 }}>Like</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/comment_icon.png')}
              style={{ width: 20, height: 20 }} />
            <Text style={{ fontSize: 10 }}>Comment</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/share_icon.png')}
              style={{ width: 20, height: 20 }} />
            <Text style={{ fontSize: 10 }}>Share</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/send_icon.png')}
              style={{ width: 20, height: 20 }} />
            <Text style={{ fontSize: 10 }}>Send</Text>
          </View>
        </View>
      </View>
    )
  }

  const getHeader = () => {
    return(
      <View style={{backgroundColor: 'white', padding: 10, flexDirection: 'row'}}>
        <Image
            source={require('../../../assets/images/profile_pic.jpeg')}
            style={{ width: 30, height: 30, borderRadius: 30 }} />
            <TextInput placeholder="Search..." style={{backgroundColor: '#F6F6F6', flex: 1, marginStart: 10, padding: 5}}/>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={['abc', '', '']}
        renderItem={getItem}
        ListHeaderComponent={getHeader}
      />
    </View>
  );
}

export default HomeScreen;