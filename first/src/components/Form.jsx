import { useState } from "react";
import { AUTHORS } from "../utils";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Form = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend({ text: value, author: AUTHORS.human });
    setValue("");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="chat-input"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Placeholder"
        autoFocus
        value={value}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} variant="outlined">
        Send
      </Button>
    </Box>
  );
};

export default Form;
