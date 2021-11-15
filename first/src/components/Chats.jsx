import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router";
import ChatList from "./ChatList";
import Form from "./Form";
import MessageList from "./MessageList";

export default function Chats({
  chatList,
  messageList,
  sendMessage,
  currentChat,
  setCurrentChatId,
}) {
  const { chatId } = useParams();
  useEffect(() => {
    setCurrentChatId(chatId);
  }, [chatId, setCurrentChatId]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <ChatList chatList={chatList} currentChat={currentChat} />
      </Grid>

      <Grid item xs={8} sx={{ borderLeft: 1, borderColor: "#6484ad" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <MessageList messageList={messageList} currentChat={currentChat} />

          <Form onSend={sendMessage} />
        </Box>
      </Grid>
    </Grid>
  );
}
