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

export const setCurrentChat = (chatId) => ({
  type: SET_CURRENT_CHAT,
  payload: chatId,
});
