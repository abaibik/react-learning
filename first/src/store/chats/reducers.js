import {
  ADD_CHAT,
  REMOVE_CHAT,
  SEND_MESSAGE,
  SET_CURRENT_CHAT,
} from "./actions";
import { v4 as uuidv4 } from "uuid";

const currentChatId = uuidv4();

const initialState = {
  chatList: [
    { id: currentChatId, name: "Chat 1", messages: [] },
    { id: uuidv4(), name: "Chat 2", messages: [] },
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
    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChatId: action.payload,
      };
    case SEND_MESSAGE: {
      const { message, chatId } = action.payload;
      const chatList = [...state.chatList];
      const targetChatIdx = chatList.findIndex((chat) => {
        return chat.id === chatId;
      });
      if (targetChatIdx === -1) {
        return state;
      }
      chatList[targetChatIdx].messages.push({ ...message, id: uuidv4() });
      return {
        ...state,
        chatList,
      };
    }
    case REMOVE_CHAT: {
      const chatList = [...state.chatList];
      const targetChatIdx = chatList.findIndex((chat) => {
        return chat.id === action.payload;
      });
      if (targetChatIdx === -1) {
        return state;
      }
      chatList.splice(targetChatIdx, 1);
      return {
        ...state,
        chatList,
      };
    }
    default:
      return state;
  }
};

export default chatsReducer;
