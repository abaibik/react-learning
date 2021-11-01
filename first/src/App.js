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
    <div className="App">
      <header>
        <h2 className="heading"> Messenger </h2>
      </header>

      <section className="chatBox">
        <section className="chat-window">
          <MessageList messageList={messageList} />
        </section>
        <Form onSend={sendMessage} />
      </section>
    </div>
  );
}

export default App;
