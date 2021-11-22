import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/chats/actions";
import {
  selectCurrentChatId,
  selectLastMessage,
} from "../store/chats/selectors";
import { AUTHORS } from "../utils";

export default function Bot() {
  const dispatch = useDispatch();
  const lastMessage = useSelector(selectLastMessage);
  const currentChatId = useSelector(selectCurrentChatId);

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
