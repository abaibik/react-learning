import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import Glass from "./components/Glass";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Home from "./components/Home";
import Bot from "./components/Bot";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Glass>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/profile" element={<Profile />} />
          <Route path="/chats" element={<Chats />}>
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Routes>
        <Bot />
      </Glass>
    </ThemeProvider>
  );
}

export default App;
