import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import Glass from "./components/Glass";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Home from "./components/Home";
import { News } from "./components/News";
import { SignForm } from "./components/SignForm";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Glass>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignForm />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route index path="/profile" element={<Profile />} />
          <Route path="/News" element={<News />} />
          <Route path="/chats" element={<Chats />}>
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Routes>
      </Glass>
    </ThemeProvider>
  );
}

export default App;
