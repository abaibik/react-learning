import { Box } from "@mui/system";

export default function Glass({ children }) {
  return (
    <Box
      className="App"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right top, #65dfc9, #6cdbeb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="circle1"></div>
      <div className="circle2"></div>
      <Box className="glas" sx={{ marginTop: "2vw", width: "min(60%,1200px)" }}>
        {children}
      </Box>
    </Box>
  );
}
