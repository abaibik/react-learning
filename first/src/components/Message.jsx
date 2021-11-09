import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { AUTHORS } from "../utils";

const Message = ({ message }) => {
  const { text, author } = message;
  const align = author === AUTHORS.bot ? "start" : "end";
  const background = author !== AUTHORS.bot ? "#65dfc9" : "#6cdbeb";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: align,
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          border: 1,
          borderRadius: 16,
          borderColor: "#65dfc9",
          padding: "0.8rem",
          marginBottom: "0.5rem",
          background: background,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default Message;
