import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import notesReducer from "./reducers/notesReducer";
import reduxSagas from "./sagas";

const rootReducer = combineReducers({
  notes: notesReducer,
});

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleWare),
});
sagaMiddleWare.run(reduxSagas);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;