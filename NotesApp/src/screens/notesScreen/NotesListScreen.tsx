import React, { useEffect, useState } from "react";
import { AppState, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants/enum/GeneralEnum";
import { RootState } from "../../redux/store";

const NotesListScreen = () => {
    const dispatch = useDispatch();
    const notes : any = useSelector((state : RootState) => state.notes);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        dispatch({type: 'fetch_notes', payload: 'mittalkartik1@gmail.com'})
        if(notes.email && !isFetched){
            setIsFetched(true);
            dispatch({'type': 'fetch_notes', 'payload': notes.email})
        }
    }, [notes]);

    const notesItem = () => {
        return (
            <TouchableOpacity style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'red', marginHorizontal: 6, borderRadius: 8, height: 125, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Note x</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const emptyView = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.PRIMARY}}>No Notes Added</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, paddingHorizontal: 12, justifyContent: 'flex-end', flexDirection: 'row', borderBottomColor: COLORS.SHADOW, borderBottomWidth: 1, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image
                        style={{ height: 20, width: 20, tintColor: COLORS.PRIMARY, marginRight: 12 }}
                        source={require('../../assets/images/sort.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ height: 25, width: 25, tintColor: COLORS.PRIMARY }}
                        source={require('../../assets/images/logout.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={[]}
                renderItem={({ item }) => notesItem()}
                numColumns={2}
                ListEmptyComponent={emptyView}
                contentContainerStyle={{ marginTop: 12, marginHorizontal: 6, flex: 1 }}
                ItemSeparatorComponent={() => <View style={{ width: 12, height: 12 }}></View>}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
            />
            <TouchableOpacity>
                <View style={{justifyContent: 'center', width: 60, height: 60, position: 'absolute', alignItems: 'center', bottom: 20, right: 20, borderRadius: 40, borderWidth: 1, borderColor: 'red' }}>
                    <Image
                        style={{height: 60, width: 60, zIndex: 12, tintColor: COLORS.PRIMARY }}
                        source={require('../../assets/images/plus.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NotesListScreen;