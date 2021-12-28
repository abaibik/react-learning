import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <Link to="/">Home</Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/login">Sign In</Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/signup">Sign Up</Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/profile">Profile</Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/chats">Chats</Link>
        </ListItem>

        <ListItem disablePadding>
          <Link to="/News">News</Link>
        </ListItem>
      </List>
    </>
  );
}
