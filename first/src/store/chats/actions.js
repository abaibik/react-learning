export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name,
});

export const removeChat = (id) => ({
  type: REMOVE_CHAT,
  payload: id,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});
