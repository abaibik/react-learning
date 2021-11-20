import { ADD_CHAT } from "./actions";
import { v4 as uuidv4 } from "uuid";

const currentChatId = uuidv4();

const initialState = {
  chatList: [
    { id: currentChatId, name: "Chat 1" },
    { id: uuidv4(), name: "Chat 2" },
  ],
  currentChatId,
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: uuidv4(),
            name: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;
