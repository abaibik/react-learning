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
      <div className="circle1" sx={{ top: "5%", right: "15%" }}></div>
      <div className="circle2" sx={{ bottom: "5%", left: "10%" }}></div>
      <Box
        className="glas"
        sx={{
          marginTop: "2vw",
          width: "min(60%,1200px)",
          minHeight: "80vh",
          background:
            "linear-gradient(to right bottom,rgba(250, 250, 250, 0.7),rgba(250, 250, 250, 0.3))",
          borderRadius: "2rem",
          zIndex: 2,
          backgroundFilter: "blur(2rem)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
