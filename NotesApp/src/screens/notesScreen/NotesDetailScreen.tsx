import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { showFullScreenLoader } from "../../utils/LoaderUtil";

const NotesDetailScreen = () => {

    const [isEditable, setIsEditable] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, paddingHorizontal: 12, flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => showFullScreenLoader(true)}>
                        <Image
                            style={{ height: 24, width: 24, tintColor: 'red' }}
                            source={require('../../assets/images/left_arrow.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setIsEditable(true)}>
                    <Image
                        style={{ height: 20, width: 20, tintColor: 'red', marginRight: 20 }}
                        source={require('../../assets/images/pencil.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ height: 20, width: 20, tintColor: 'red', marginRight: 20 }}
                        source={require('../../assets/images/delete.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ height: 25, width: 25, tintColor: 'red' }}
                        source={require('../../assets/images/save.png')} />
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder="Note Title"
                editable={isEditable}
                placeholderTextColor={'gray'}
                style={{marginHorizontal: 12, fontWeight: 'bold', fontSize: 24, color: 'black'}}
            />
            <TextInput
                placeholder="Enter note"
                multiline
                editable={isEditable}
                placeholderTextColor={'gray'}
                style={{marginHorizontal: 12, fontSize: 16, color: 'black'}}
            />
        </View>
    );
}

export default NotesDetailScreen;