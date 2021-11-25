import { useEffect, useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithBotReply } from "../store/chats/actions";
import { selectCurrentChat } from "../store/chats/selectors";

const Form = () => {
  const textInput = useRef(null);
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const handleSubmit = (event) => {
    const value = textInput.current.value.trim();
    event.preventDefault();
    if (value === "") {
      return;
    }
    dispatch(addMessageWithBotReply(value, currentChat.id));
    textInput.current.focus();
    textInput.current.value = "";
  };

  useEffect(() => {
    textInput.current.focus();
  }, [currentChat]);

  return (
    <Box
      item
      component="form"
      noValidate
      autoComplete="off"
      className="chat-input"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifySelf: "flex-end",
        p: 1,
        m: 1,
        gap: "0.8rem",
      }}
    >
      <OutlinedInput
        placeholder="Print your message"
        autoFocus
        inputRef={textInput}
        disabled={!currentChat}
        sx={{
          flexGrow: 1,
        }}
      />

      <Button onClick={handleSubmit} variant="outlined">
        Send
      </Button>
    </Box>
  );
};

export default Form;
