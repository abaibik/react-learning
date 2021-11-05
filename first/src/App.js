import "./App.css";
import MessageList from "./components/MessageList";
import { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";
import { AUTHORS } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/system";
import ChatList from "./components/ChatList";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import ChatIcon from "@mui/icons-material/Chat";
import { Grid } from "@mui/material";

function App() {
  const [messageList, setMessageList] = useState([]);
  // eslint-disable-next-line
  const [chatList, setChatList] = useState([
    { id: uuidv4(), name: "Chat 1", icon: ChatIcon },
  ]);

  const sendMessage = useCallback(
    (message) => {
      setMessageList([...messageList, { ...message, id: uuidv4() }]);
    },
    [setMessageList, messageList]
  );

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }
    const lastMessage = messageList.at(-1);
    if (lastMessage.author === AUTHORS.human) {
      const timeOut = setTimeout(() => {
        sendMessage({
          text: "Your message is very important for me",
          author: AUTHORS.bot,
        });
      }, 1500);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [messageList, sendMessage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <Grid
          container
          className="glas"
          sx={{ marginTop: "2vw", width: "min(60%,1200px)" }}
        >
          <Grid item xs={4}>
            <ChatList chatList={chatList} />
          </Grid>

          <Grid item xs={8}>
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <MessageList messageList={messageList} />

              <Form onSend={sendMessage} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
