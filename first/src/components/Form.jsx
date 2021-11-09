import { useRef } from "react";
import { AUTHORS } from "../utils";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const Form = ({ onSend }) => {
  const textInput = useRef(null);

  const handleSubmit = (event) => {
    const value = textInput.current.value.trim();
    event.preventDefault();
    if (value === "") {
      return;
    }
    onSend({ text: value, author: AUTHORS.human });
    textInput.current.focus();
    textInput.current.value = "";
  };

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
