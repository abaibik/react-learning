import { green, blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: "2rem",
  },
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
