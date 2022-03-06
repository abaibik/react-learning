import { AppBar, BottomNavigation, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <BottomNavigation
      position="static"
      style={{ background: "transparent", gap: "20px", marginLeft: "4rem" }}
    >
      <Typography variant="h6" component="div">
        <Link to="/" style={{ textDecoration: "none", color: "#426696" }}>
          Chats
        </Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/News" style={{ textDecoration: "none", color: "#426696" }}>
          News
        </Link>
      </Typography>
    </BottomNavigation>
  );
}
