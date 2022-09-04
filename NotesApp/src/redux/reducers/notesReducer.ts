import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesType } from "../../constants/interfaces/NotesType";
// import { hitToolkitTestApi } from "../actions/hitApiAction";

const initialNotesState : NotesType = {
  email: '',
  notes: []
}

// export const hitAddNote = createAsyncThunk(
//   'notes/addNote',
//   async () => {
//     const response = await firestore().collection('users').doc('mittalkartik1@gmail').collection('notes').get();
//     console.log("===>firestores"+JSON.stringify(response));
//     // const response = await fetchCount(amount);
//     // return response.data;
//   }
// );

export const addNoteAction = createAction('addNoteAction')
export const updateEmailAction = createAction<string>('updateEmailAction')
export const getNotesAction = createAction<Array<any>>('getNotesAction')

const notesReducer : any = createSlice({
  name: 'notesReducer',
  initialState: initialNotesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNoteAction, (state, { payload }) => {
      console.log("===>","added case")
      return {...state}
      // state.data = payload;
    })
    builder.addCase(updateEmailAction, (state, action) => {
      console.log("===>","added case")
      return {...state, email: action.payload}
    })
    builder.addCase(getNotesAction, (state, action) => {
      console.log("===>payloadadeed"+JSON.stringify(action.payload));
      return {...state, notes: action.payload}
    })
  }
})

// export const {updateNote, deleteNote} = notesReducer.actions
export default notesReducer.reducer;