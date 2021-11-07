import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ChatList = ({ chatList }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "2vw" }}>
      <Box
        sx={{
          margin: "3rem",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Avatar
          src="./images/avatar.png"
          sx={{ height: 80, width: 80 }}
          alt="avatar"
        />
        <Typography variant="body2">Jane Dow</Typography>
      </Box>
      <Box>
        <List>
          {chatList.map((chat) => {
            return (
              <ListItem
                key={chat.id}
                sx={{
                  display: "flex",
                  margin: "2rem, 0rem",
                  padding: "1rem, 5 rem",
                  fontFamily: "Poppins",
                }}
              >
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
