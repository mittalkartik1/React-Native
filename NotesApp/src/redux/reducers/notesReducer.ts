import { createAction, createSlice } from "@reduxjs/toolkit";
import { NotesType } from "../../constants/interfaces/NotesType";

const initialNotesState : NotesType = {
  email: '',
  notes: []
}

export const addNoteAction = createAction('addNoteAction')
export const updateEmailAction = createAction<string>('updateEmailAction')
export const getNotesAction = createAction<Array<any>>('getNotesAction')
export const editNoteAction = createAction<Array<any>>('editNoteAction')
export const deleteNoteAction = createAction<Array<any>>('deleteNoteAction')

const notesReducer = createSlice({
  name: 'notesReducer',
  initialState: initialNotesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateEmailAction, (state, action) => {
      return {...state, email: action.payload}
    })
    builder.addCase(getNotesAction, (state, action) => {
      return {...state, notes: action.payload.length === 0 ? state.notes : action.payload}
    })
  }
})

export default notesReducer.reducer;