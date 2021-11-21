import { Button, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function FormAddChat() {
  return (
    <Box
      item
      component="form"
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

      <OutlinedInput placeholder="Name" />

      <Button variant="outlined">Add</Button>
    </Box>
  );
}
