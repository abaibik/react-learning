import { AUTHORS } from "../../utils";

export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const removeChat = (id) => ({
  type: REMOVE_CHAT,
  payload: id,
});

export const sendMessage = (message, chatId) => ({
  type: SEND_MESSAGE,
  payload: { message, chatId },
});

export const addMessageWithBotReply = (messageTxt, chatId) => (dispatch) => {
  dispatch(sendMessage({ text: messageTxt, author: AUTHORS.human }, chatId));

  const botMessage = {
    text: "Your message is very important for me",
    author: AUTHORS.bot,
  };
  setTimeout(() => dispatch(sendMessage(botMessage, chatId)), 1500);
};

export const setCurrentChat = (chatId) => ({
  type: SET_CURRENT_CHAT,
  payload: chatId,
});
