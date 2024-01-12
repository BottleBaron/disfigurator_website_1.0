import { Box, Switch, Typography } from "@mui/material";
import { useThemeSelector } from "./context/ThemeContext";

function App() {
    const { theme, toggleTheme } = useThemeSelector();

    return (
        <Box className="flex flex-1 justify-center items-center">
            <Typography>We have light/darkmode</Typography>
            <Switch value={theme} onChange={toggleTheme} />
        </Box>
    );
}

export default App;
