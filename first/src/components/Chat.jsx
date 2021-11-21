import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatIcon from "@mui/icons-material/Chat";
import { useSelector } from "react-redux";

export default function Chat({ chat }) {
  const currentChatId = useSelector((state) => state.chats.currentChatId);
  return (
    <Link to={`/chats/${chat.id}`} style={{ textDecoration: "none" }}>
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
}
