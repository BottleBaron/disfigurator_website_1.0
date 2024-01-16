import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { useThemeSelector } from "./context/ThemeContext";

function ThemeInit() {
  const { theme } = useThemeSelector();

  return (
    <div className="flex">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </div>
  );
}

export default ThemeInit;
