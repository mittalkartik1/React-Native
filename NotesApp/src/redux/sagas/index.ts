import { all, call, put, takeLatest } from 'redux-saga/effects'
import firestore from '@react-native-firebase/firestore';
import { addNoteAction, deleteNoteAction, editNoteAction, getNotesAction, updateEmailAction } from '../reducers/notesReducer';
import { showFullScreenLoader } from '../../utils/LoaderUtil';
import { decrypt, encrypt } from '../../utils/EncryptionUtil';

function* fetchNotes({ payload }: any) : any {
    const notesArray : Array<any> = []
    showFullScreenLoader(true);
    try {        
        const userEmail = yield call(() => firestore().collection('users').doc(payload.email).get());
        if(userEmail.exists){
            if(payload?.sortNotes){
                const userNotes = yield call(() => firestore().collection('users').doc(payload.email).collection('notes').orderBy('createdAt', 'asc').get());
                userNotes.forEach((item: any) => {
                    const notesObject = {id: item.id, title: item.data().noteTitle, body: item.data().noteBody}
                    notesArray.push(notesObject);
                })
            }else{
                const userNotes = yield call(() => firestore().collection('users').doc(payload.email).collection('notes').get());
                userNotes.forEach((item: any) => {
                    const notesObject = {id: item.id, title: decrypt(item.data().noteTitle), body: decrypt(item.data().noteBody)}
                    notesArray.push(notesObject);
                })
            }            
        }
        yield put({type: getNotesAction.type, payload: notesArray})
    } catch (e: any) {
        yield put({type: getNotesAction.type, payload: notesArray})
    } finally{
        showFullScreenLoader(false)
    }
}

function* addNote({ payload }: any) : any {
    showFullScreenLoader(true);
    try {
        const userEmail = yield call(() => firestore().collection('users').doc(payload.email).get());
        if(userEmail.exists){
            yield call(() => firestore().collection('users').doc(payload.email).collection('notes').add({noteBody: encrypt(payload.note.noteBody), noteTitle: encrypt(payload.note.noteTitle), 'createdAt': new Date().getTime()}))
        }else{
            yield call(() => firestore().collection('users').doc(payload.email).set({'extra': 'extra'}));
            yield call(() => firestore().collection('users').doc(payload.email).collection('notes').add({noteBody: encrypt(payload.note.noteBody), noteTitle: encrypt(payload.note.noteTitle), 'createdAt': new Date().getTime()}))        
        }
        yield* fetchNotes({payload: {email: payload.email}});      
        yield put({type: addNoteAction.type})
    } catch (e: any) {
        yield put({type: addNoteAction.type})
    } finally{
        showFullScreenLoader(false)
        payload.onComplete();
    }
}

function* editNote({ payload }: any) : any {
    showFullScreenLoader(true);
    try {
        yield call(() => firestore().collection('users').doc(payload.email).collection('notes').doc(payload.noteId).update({noteBody: encrypt(payload.note.noteBody), noteTitle: encrypt(payload.note.noteTitle)}))
        yield* fetchNotes({payload: {email: payload.email}});      
        yield put({type: editNoteAction.type})
    } catch (e: any) {
        yield put({type: editNoteAction.type})
    } finally{
        showFullScreenLoader(false)
        payload.onComplete();
    }
}

function* deleteNote({ payload }: any) : any {
    showFullScreenLoader(true);
    try {
        yield call(() => firestore().collection('users').doc(payload.email).collection('notes').doc(payload.noteId).delete())
        yield* fetchNotes({payload: {email: payload.email}});      
        yield put({type: deleteNoteAction.type})
    } catch (e: any) {
        yield put({type: deleteNoteAction.type})
    } finally{
        showFullScreenLoader(false)
        payload.onComplete();
    }
}

export function* updateEmail({ payload }: any) {
    yield put({ type: updateEmailAction.type, payload: payload })
}

export default function* reduxSagas() {
    yield all([
        takeLatest('register_email', updateEmail),
        takeLatest('fetch_notes', fetchNotes),
        takeLatest('add_note', addNote),
        takeLatest('edit_note', editNote),
        takeLatest('delete_note', deleteNote)    
    ])
}