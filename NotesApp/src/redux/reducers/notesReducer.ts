import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { hitToolkitTestApi } from "../actions/hitApiAction";

const initialNotesState = {
  data: null
}

const notesReducer = createSlice({
  name: 'apiReducer',
  initialState: initialNotesState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(hitToolkitTestApi.fulfilled, (state, { payload }) => {
    //   state.data = payload;
    // })
    // builder.addCase(hitToolkitTestApi.pending, (state) => {
    //   // state.data = payload;
    // })
    // builder.addCase(hitToolkitTestApi.rejected, (state) => {
    //   // state.data = payload;
    // })
  }
})
export default notesReducer.reducer;