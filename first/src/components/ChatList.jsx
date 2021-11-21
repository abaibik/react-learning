import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, ListItemButton, OutlinedInput } from "@mui/material";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const ChatList = () => {
  const { chatList, currentChatId } = useSelector((state) => state.chats);

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
          sx={{ height: 80, width: 80, alignSelf: "center" }}
          alt="avatar"
        />
        <Typography
          variant="h1"
          sx={{
            color: "#426696",
            fontSize: "1rem",
            opacity: "0.8",
            fontWeight: "600",
            mt: "1rem",
            textAlign: "center",
          }}
        >
          Jane Dow
        </Typography>
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
                    fontSize: "1rem",
                  }}
                >
                  <ListItemIcon>
                    <ChatIcon />
                  </ListItemIcon>
                  <Typography sx={{ flexGrow: 1 }}>{chat.name}</Typography>

                  <Tooltip title="Delete chat">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Box>
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
    </Box>
  );
};

export default ChatList;
