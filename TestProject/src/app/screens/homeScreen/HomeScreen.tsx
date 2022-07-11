import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { initLocalTranslations, translate } from "../../services/i18n.service";
import { styles } from "./styles";

const HomeScreen = () => {
  const [postData, setPostData] = useState<Array<{body: string}>>([]);

  async function initTranslations(){
    await initLocalTranslations();
    const tempArray = [];
    tempArray.push({body : translate('home_screen.news_feed.post_1')});
    tempArray.push({body : translate('home_screen.news_feed.post_2')});
    tempArray.push({body : translate('home_screen.news_feed.post_3')});
    tempArray.push({body : translate('home_screen.news_feed.post_4')});
    setPostData(tempArray);
  }

  useEffect(() => {
    initTranslations();
  }, []);

  const getItem = (item: string) => {
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
        <Text style={{ marginTop: 10 }}>{item}</Text>
        <View style={styles.commentViewStyle}>
          <Text style={{ color: '#808080' }}>
            Anonymous and 178 others
          </Text>
          <Text style={{ color: '#808080' }}>
            12 comments
          </Text>
        </View>
        <View style={styles.postFooterStyle}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/like_icon.png')}
              style={styles.widthHeight20} />
            <Text style={{ fontSize: 10 }}>Like</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/comment_icon.png')}
              style={styles.widthHeight20} />
            <Text style={{ fontSize: 10 }}>Comment</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/share_icon.png')}
              style={styles.widthHeight20} />
            <Text style={{ fontSize: 10 }}>Share</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/send_icon.png')}
              style={styles.widthHeight20} />
            <Text style={{ fontSize: 10 }}>Send</Text>
          </View>
        </View>
      </View>
    )
  }

  const getHeader = () => {
    return(
      <View style={styles.headerViewStyle}>
        <Image
            source={require('../../../assets/images/profile_pic.jpeg')}
            style={styles.headerImageStyle} />
            <TextInput placeholder="Search..." style={styles.headerSearchStyle}/>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={postData}
        renderItem={({item}) => getItem(item.body)}
        ListHeaderComponent={getHeader}
      />
    </View>
  );
}

export default HomeScreen;