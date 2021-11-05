import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";

const ChatList = ({ chatList }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "2vw" }}>
      <Box sx={{ marginBottom: "5vh", alignSelf: "center" }}>
        <img className="img-avatar" src="./images/avatar.png" alt="avatar" />
        <p>Jane Dow</p>
      </Box>
      <Box>
        <List>
          {chatList.map((chat) => {
            return (
              <ListItem key={chat.id}>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                {chat.name}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;
