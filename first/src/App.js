import "./App.css";
import Message from "./components/Message.jsx";

function App() {
  const text = "Lalala";
  return (
    <div className="App wrapper">
      <header className="page-header">
        <Message message={text} />
      </header>
    </div>
  );
}

export default App;
