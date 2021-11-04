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

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([{ id: uuidv4(), name: "Chat 1" }]);

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
        <header>
          <h2 className="heading"> Messenger </h2>
        </header>

        <Box sx={{ display: "flex" }}>
          <ChatList chatList={chatList} />
          <MessageList messageList={messageList} />
        </Box>

        <Form onSend={sendMessage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
