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
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { removeChat } from "../store/chats/actions";
import { selectCurrentChatId } from "../store/chats/selectors";

export default function Chat({ chat }) {
  const currentChatId = useSelector(selectCurrentChatId);
  const dispatch = useDispatch();
  const deleteChat = useCallback(() => {
    dispatch(removeChat(chat.id));
  }, [chat.id, dispatch]);
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
          <IconButton onClick={deleteChat}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemButton>
    </Link>
  );
}
