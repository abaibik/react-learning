import Message from "./Message";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h1"
        sx={{
          color: "#426696",
          fontSize: "3rem",
          opacity: "0.8",
          fontWeight: "600",
          margin: "1rem",
        }}
      >
        Messenger
      </Typography>
      <List sx={{ overflow: "auto", height: "70vh", marginRight: "0.3rem" }}>
        {messageList.map((message) => {
          return (
            <ListItem key={message.id}>
              <Message message={message} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default MessageList;
