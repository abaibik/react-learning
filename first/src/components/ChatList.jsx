import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { ListItemButton } from "@mui/material";

const ChatList = ({ chatList, currentChat }) => {
  const currentChatId = currentChat ? currentChat.id : undefined;
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
          src="/images/avatar.png"
          sx={{ height: 80, width: 80 }}
          alt="avatar"
        />
        <Typography variant="body2">Jane Dow</Typography>
      </Box>
      <Box>
        <List>
          {chatList.map((chat) => {
            return (
              <Link
                key={chat.id}
                to={`/chats/${chat.id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItemButton
                  selected={chat.id === currentChatId}
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
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ChatList;
