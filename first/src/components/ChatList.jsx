import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ChatList = ({ chatList }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <h2>Chat List</h2>
      <List>
        {chatList.map((chat) => {
          return (
            <ListItem disablePadding key={chat.id}>
              {chat.name}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ChatList;
