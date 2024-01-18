/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Switch, Typography } from "@mui/material";
import YoutubePlayer from "./components/YTplayer";
import { useThemeSelector } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useThemeSelector();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        marginInline: "5%",
      }}
    >
      <img
        style={{ height: 250, width: 250 }}
        src="../resources/troja.png"
        alt="Hourglass"
      />

      <YoutubePlayer />

      <Typography>We have light/darkmode</Typography>
      <Switch value={theme} onChange={toggleTheme} />
    </Box>
  );
}

export default App;
