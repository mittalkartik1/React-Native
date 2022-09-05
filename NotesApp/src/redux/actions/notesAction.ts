import { FirebaseNote } from "../../constants/interfaces/Note";
import { AddNotesActionType, DeleteNoteActionType, EditNoteActionType, FetchNotesActionType } from "../types/notesType";

export const fetchAllNotes = (
  email: string,
  sortNotes: boolean = false
): FetchNotesActionType => ({
  type: 'fetch_notes',
  payload: {email, sortNotes},
});

export const addNote = (
  email: string,
  note: FirebaseNote,
  onComplete: () => void
): AddNotesActionType => ({
  type: 'add_note',
  payload: {email, note, onComplete},
});

export const editNote = (
  email: string,
  noteId: string,
  note: FirebaseNote,
  onComplete: () => void
): EditNoteActionType => ({
  type: 'edit_note',
  payload: {email, noteId, note, onComplete},
});

export const deleteNote = (
  email: string,
  noteId: string,
  onComplete: () => void
): DeleteNoteActionType => ({
  type: 'delete_note',
  payload: {email, noteId, onComplete},
});