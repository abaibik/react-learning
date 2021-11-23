import { useEffect, useRef } from "react";
import { AUTHORS } from "../utils";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/chats/actions";
import { selectCurrentChatId } from "../store/chats/selectors";

const Form = () => {
  const textInput = useRef(null);
  const dispatch = useDispatch();
  const currentChatId = useSelector(selectCurrentChatId);

  const handleSubmit = (event) => {
    const value = textInput.current.value.trim();
    event.preventDefault();
    if (value === "") {
      return;
    }
    dispatch(
      sendMessage({ text: value, author: AUTHORS.human }, currentChatId)
    );
    textInput.current.focus();
    textInput.current.value = "";
  };

  useEffect(() => {
    textInput.current.focus();
  }, [currentChatId]);

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
        disabled={!currentChatId}
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
