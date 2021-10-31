import "./App.css";
import Message from "./components/Message.jsx";
import MessageList from "./components/MessageList";
import { useState } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);

  const text = "Lalala";
  return (
    <div className="App wrapper">
      <header className="page-header">
        <Message text={text} />
      </header>
      <div>
        <MessageList messageList={messageList} />
      </div>
    </div>
  );
}

export default App;
