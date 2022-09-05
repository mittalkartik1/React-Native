import { FirebaseNote } from "../../constants/interfaces/Note";

export type FetchNotesActionType = {
  type: string;
  payload: {email: string, sortNotes: boolean};
}

export type AddNotesActionType = {
  type: string;
  payload: {email: string, note: FirebaseNote, onComplete: () => void};
}

export type EditNoteActionType = {
  type: string;
  payload: {email: string, noteId: string, note: FirebaseNote, onComplete: () => void};
}

export type DeleteNoteActionType = {
  type: string;
  payload: {email: string, noteId: string, onComplete: () => void};
}