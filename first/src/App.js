import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { AUTHORS } from "./utils";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import Glass from "./components/Glass";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Home from "./components/Home";

function App() {
  const [messageList, setMessageList] = useState([]);

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
      <Glass>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/profile" element={<Profile />} />
          <Route
            path="/chats"
            element={
              <Chats messageList={messageList} sendMessage={sendMessage} />
            }
          >
            <Route
              path=":chatId"
              element={
                <Chats messageList={messageList} sendMessage={sendMessage} />
              }
            />
          </Route>
        </Routes>
      </Glass>
    </ThemeProvider>
  );
}

export default App;
