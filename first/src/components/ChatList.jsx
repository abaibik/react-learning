import List from "@mui/material/List";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Chat from "./Chat";
import FormAddChat from "./FormAddChat";

const ChatList = () => {
  const chatList = useSelector((state) => state.chats.chatList);

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
            return <Chat key={chat.id} chat={chat} />;
          })}
        </List>
      </Box>
      <FormAddChat />
    </Box>
  );
};

export default ChatList;
