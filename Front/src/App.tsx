import { Box, Switch, Typography } from "@mui/material";
import { useThemeSelector } from "./context/ThemeContext";

function App() {
    const { theme, toggleTheme } = useThemeSelector();

    return (
        <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{height: 250, width: 250}} src="../resources/troja.png" alt="Hourglass"/>

            <Typography>We have light/darkmode</Typography>
            <Switch value={theme} onChange={toggleTheme} />
        </Box>
    );
}

export default App;
