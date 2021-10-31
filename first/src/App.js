import "./App.css";
import MessageList from "./components/MessageList";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (message) => {
    setMessageList([...messageList, message]);
  };

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
