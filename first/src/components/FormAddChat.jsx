import { Button, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../store/chats/actions";

export default function FormAddChat() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const value = inputRef.current.value.trim();
    event.preventDefault();
    if (value === "") {
      return;
    }
    dispatch(addChat(value));
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <Box
      item
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        m: "5rem 3rem 1rem 1rem",
        gap: "0.8rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#426696",
          fontSize: "1.5rem",
          opacity: "0.8",
          fontWeight: "600",
          margin: "1rem",
          textAlign: "center",
        }}
      >
        Add a new chat
      </Typography>

      <OutlinedInput placeholder="Name" inputRef={inputRef} />

      <Button variant="outlined">Add</Button>
    </Box>
  );
}
