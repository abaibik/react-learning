import { createStore, combineReducers } from "redux";
import chatsReducer from "./chats/reducers";
import { profileReducer } from "./profile/reducer";

const store = createStore(
  combineReducers({ profile: profileReducer, chats: chatsReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
