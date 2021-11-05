import { Box } from "@mui/system";

const Message = ({ message }) => {
  const { text, author } = message;
  return (
    <Box className="message">
      <span className="message-author">{author}</span>:
      <span className="message-text">{text}</span>
    </Box>
  );
};
export default Message;
