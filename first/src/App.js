import "./App.css";
import MessageList from "./components/MessageList";
import { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = useCallback(
    (message) => {
      setMessageList([...messageList, message]);
    },
    [setMessageList, messageList]
  );

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }
    const lastMessage = messageList.at(-1);
    if (lastMessage.author === "Me") {
      setTimeout(() => {
        sendMessage({
          text: "Your message is very important for me",
          author: "Bot",
        });
      }, 1500);
    }
  }, [messageList, sendMessage]);

  return (
    <div className="App wrapper">
      <header className="page-header">
        <h2> Messenger </h2>
      </header>

      <MessageList messageList={messageList} />
      <Form onSend={sendMessage} />
    </div>
  );
}

export default App;
