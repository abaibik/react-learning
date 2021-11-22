export function selectCurrentChatId(state) {
  return state.chats.currentChatId;
}

export function selectChatList(state) {
  return state.chats.chatList;
}

export function selectCurrentChat(state) {
  const chatList = selectChatList(state);
  const currentChatId = selectCurrentChatId(state);
  return chatList.find((chat) => {
    return chat.id === currentChatId;
  });
}

export function selectCurrentChatMessages(state) {
  const currentChat = selectCurrentChat(state);
  if (!currentChat) {
    return [];
  }
  return currentChat.messages;
}

export function selectLastMessage(state) {
  const messages = selectCurrentChatMessages(state);
  if (messages.length === 0) {
    return undefined;
  }
  return messages.at(-1);
}
