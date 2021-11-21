import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/chats/actions";
import { AUTHORS } from "../utils";

export default function Bot() {
  const dispatch = useDispatch();
  const lastMessage = useSelector((state) => {
    const currentChat = state.chats.chatList.find((chat) => {
      return chat.id === state.chats.currentChatId;
    });
    if (!currentChat || currentChat.messages.length === 0) {
      return undefined;
    }
    return currentChat.messages.at(-1);
  });
  const currentChatId = useSelector((state) => state.chats.currentChatId);

  useEffect(() => {
    if (lastMessage === undefined) {
      return;
    }

    if (lastMessage.author === AUTHORS.human) {
      setTimeout(() => {
        dispatch(
          sendMessage(
            {
              text: "Your message is very important for me",
              author: AUTHORS.bot,
            },
            currentChatId
          )
        );
      }, 1500);
    }
  }, [dispatch, lastMessage, currentChatId]);
  return <></>;
}
