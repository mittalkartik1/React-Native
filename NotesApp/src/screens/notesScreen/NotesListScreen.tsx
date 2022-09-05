import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SCREENS, STRINGS } from "../../constants/enum/GeneralEnum";
import { Note } from "../../constants/interfaces/Note";
import { NotesType } from "../../constants/interfaces/NotesType";
import { fetchAllNotes } from "../../redux/actions/notesAction";
import { RootState } from "../../redux/store";
import { styles } from "./styles";
import auth from '@react-native-firebase/auth';
import { showFullScreenLoader } from "../../utils/LoaderUtil";

const NotesListScreen = ({navigation} : any) => {
    const dispatch = useDispatch();
    const notes : NotesType = useSelector((state : RootState) => state.notes);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        if(notes.email && !isFetched){
            setIsFetched(true);
            dispatch(fetchAllNotes(notes.email))
        }
    }, [notes]);

    const notesItem = (item: Note) => {
        return (
            <TouchableOpacity style={styles.flex1} onPress={() => navigation.navigate(SCREENS.NOTES_DETAIL_SCREEN, {isNew: false, note: item})}>
                <View style={styles.noteItemStyle}>
                    <Text style={styles.listNoteTitleStyle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const emptyView = () => {
        return(
            <View style={styles.centralize}>
                <Text style={styles.noteTextStyle}>{STRINGS.NO_NOTES}</Text>
            </View>
        );
    }

    async function logoutUser() {
        try{
            showFullScreenLoader(true);
            await auth().signOut();            
            navigation.navigate(SCREENS.LOGIN_SCREEN);
        }catch(e: any){} finally{showFullScreenLoader(false);}
    }

    function sortNotes(){
        dispatch(fetchAllNotes(notes.email, true))
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainViewStyle}>
                {
                    notes.notes.length > 0 &&                
                    <TouchableOpacity onPress={sortNotes}>
                        <Image
                            style={styles.sortImageStyle}
                            source={require('../../assets/images/sort.png')} />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={logoutUser}>
                    <Image
                        style={styles.logoutImageStyle}
                        source={require('../../assets/images/logout.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={notes.notes}
                renderItem={({ item }) => notesItem(item)}
                numColumns={2}
                ListEmptyComponent={emptyView}
                contentContainerStyle={styles.listContainerStyle}
                ItemSeparatorComponent={() => <View style={styles.itemSeperatorStyle}></View>}
                columnWrapperStyle={{ flexWrap: 'wrap' }}
            />
            <TouchableOpacity onPressIn={() => navigation.navigate(SCREENS.NOTES_DETAIL_SCREEN, {isNew: true})}>
                <View style={styles.plusViewStyle}>
                    <Image
                        style={styles.plusImageStyle}
                        source={require('../../assets/images/plus.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NotesListScreen;