import { Box } from "@mui/system";
import { useState } from "react";

export const SignForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassw = (e) => {
    setPassw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(email, passw);
  };

  return (
    <Box item component="form" onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={handleChangeEmail} />
      <input type="password" value={passw} onChange={handleChangePassw} />
      <input type="submit" />
    </Box>
  );
};
