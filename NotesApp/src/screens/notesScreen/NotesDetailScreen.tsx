import React, { useEffect, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { STRINGS } from "../../constants/enum/GeneralEnum";
import { Note } from "../../constants/interfaces/Note";
import { addNote, deleteNote, editNote } from "../../redux/actions/notesAction";
import { getReduxState } from "../../redux/store";
import { showMessage } from "../../utils/LoaderUtil";
import { styles } from "./styles";

const NotesDetailScreen = (props: any) => {
    const [{ isEditable, isNew }, setNoteState] = useState({ isEditable: false, isNew: false });
    const [note, setNote] = useState<Note>({ id: '', title: '', body: '' });
    const dispatch = useDispatch();
    const { email } = getReduxState().notes;

    useEffect(() => {
        if (props.route.params.isNew) {
            setNoteState({ isEditable: true, isNew: true });
        } else {
            setNote(props.route.params.note);
        }
    }, [])

    function onSaveClick() {
        if (note.title.length === 0) {
            showMessage('Enter note title first!!');
        } else if (note.body.length === 0) {
            showMessage('Enter note body first!!');
        } else {
            if (isNew) {
                dispatch(addNote(email, { noteTitle: note.title, noteBody: note.body }, props.navigation.goBack));
            } else {
                dispatch(editNote(email, note.id, { noteTitle: note.title, noteBody: note.body }, props.navigation.goBack));
            }
        }
    }

    function onDeleteClick() {
        //alert can be added later            
        dispatch(deleteNote(email, note.id, props.navigation.goBack));
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailViewStyle}>
                <View style={styles.flex1}>
                    <TouchableOpacity onPress={props.navigation.goBack}>
                        <Image
                            style={styles.backImageStyle}
                            source={require('../../assets/images/left_arrow.png')} />
                    </TouchableOpacity>
                </View>
                {
                    !isNew &&
                    <>
                        <TouchableOpacity onPress={() => setNoteState((prevState) => ({ ...prevState, isEditable: true }))}>
                            <Image
                                style={styles.editImageStyle}
                                source={require('../../assets/images/pencil.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onDeleteClick}>
                            <Image
                                style={styles.editImageStyle}
                                source={require('../../assets/images/delete.png')} />
                        </TouchableOpacity>
                    </>
                }
                <TouchableOpacity onPress={onSaveClick}>
                    <Image
                        style={styles.saveImageStyle}
                        source={require('../../assets/images/save.png')} />
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder={STRINGS.NOTE_TITLE}
                editable={isEditable}
                placeholderTextColor={'gray'}
                value={note.title}
                onChangeText={(text: string) => setNote((prevState) => ({ ...prevState, title: text }))}
                style={styles.noteTitleStyle}
            />
            <TextInput
                placeholder={STRINGS.ENTER_NOTE}
                multiline
                editable={isEditable}
                placeholderTextColor={'gray'}
                value={note.body}
                onChangeText={(text: string) => setNote((prevState) => ({ ...prevState, body: text }))}
                style={styles.noteBodyStyle}
            />
        </View>
    );
}

export default NotesDetailScreen;