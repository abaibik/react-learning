import { useState, useRef } from "react";
import { AUTHORS } from "../utils";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

const Form = ({ onSend }) => {
  const [value, setValue] = useState("");
  const textInput = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend({ text: value, author: AUTHORS.human });
    setValue("");
    textInput.current.focus();
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
        gap: "10px",
      }}
    >
      <OutlinedInput
        placeholder="Print your message"
        autoFocus
        value={value}
        onChange={handleChange}
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
