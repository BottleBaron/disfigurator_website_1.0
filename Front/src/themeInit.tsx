import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { useThemeSelector } from "./context/ThemeContext";

function ThemeInit() {
  const { theme } = useThemeSelector();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  );
}

export default ThemeInit;
