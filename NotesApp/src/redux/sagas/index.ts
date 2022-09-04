import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import firestore from '@react-native-firebase/firestore';
import { addNoteAction, getNotesAction, updateEmailAction } from '../reducers/notesReducer';

async function* fetchNotes({ payload }: any) {
    try {
        const notesArray : Array<any> = []
        const userEmail = yield call(() => firestore().collection('users').doc(payload).get());
        // if(userEmail.exists){
        //     const userNotes = yield call(firestore().collection('users').doc(payload).collection('notes').get());
        //     userNotes.forEach((item: any) => {
        //         const notesObject = {id: item.id, title: item.data().noteTitle, body: item.data().noteBody}
        //         notesArray.push(notesObject);
        //     })
        // }
        yield put({type: getNotesAction.type, payload: notesArray})
    } catch (e: any) {
        console.log("===>eooo" + JSON.stringify(e))
    }
}

// export function* hitAddNoteApi(action: any)  : any {
//     try{
//         let response = yield call(getFirebaseData);
//         // let response = yield call(hitDemo);
//         console.log("===>reso"+JSON.stringify(response));
//         yield put(addNoteAction);
//     }catch(e: any){
//         console.log("errrror"+JSON.stringify(e))
//     }
//     // yield put('')
// }

export function* updateEmail({ payload }: any) {
    yield put({ type: updateEmailAction.type, payload: payload })
}

export default function* reduxSagas() {
    yield all([
        // takeEvery('register_email', updateEmail),
        takeEvery('fetch_notes', fetchNotes)    
    ])
}