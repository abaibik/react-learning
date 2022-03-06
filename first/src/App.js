import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { Routes, Route } from "react-router-dom";
import Glass from "./components/Glass";
import Chats from "./components/Chats";
import { News } from "./components/News";
import Links from "./components/Links";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Glass>
        <Routes>
          <Route path="/News" element={<News />} />
          <Route path="/" element={<Chats />}>
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Routes>
        <Links />
      </Glass>
    </ThemeProvider>
  );
}

export default App;
