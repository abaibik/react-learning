import { createStore, combineReducers, applyMiddleware } from "redux";
import chatsReducer from "./chats/reducers";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { newsReducer } from "./news/reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["news"],
};

const persistedReducer = persistReducer(
  persistConfig,

  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    news: newsReducer,
  })
);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
