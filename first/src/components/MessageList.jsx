import Message from "./Message";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";

const MessageList = ({ messageList }) => {
  return (
    <Box sx={{ height: "80%" }}>
      <List>
        <ListItem key="1">
          <ListItemText
            align="right"
            primary={messageList.map((message) => {
              return <Message message={message} key={message.id} />;
            })}
          ></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MessageList;
