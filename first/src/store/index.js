import { createStore, combineReducers, applyMiddleware } from "redux";
import chatsReducer from "./chats/reducers";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ profile: profileReducer, chats: chatsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
