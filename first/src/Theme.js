import { purple, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: "orange",
  },
});

export default theme;
