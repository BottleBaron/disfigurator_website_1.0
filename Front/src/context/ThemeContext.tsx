import { Theme, createTheme } from "@mui/material";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeSelector = () => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error("useTheme must be used within a ThemeContextProvider");

    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

// FIXME:  themeproviderprops
export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const loadClientThemePreference = () => {
        
        /*
        const prefersDarktheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        console.log(prefersDarktheme);
        return prefersDarktheme
            ? createTheme({
                  palette: {
                      mode: "dark",
                  },
              })
            : createTheme({
                  palette: {
                      mode: "light",
                  },
              });
        */
        return createTheme({
                palette: {
                    mode: "dark",
                },});
    };

    const [theme, setTheme] = useState<Theme>(loadClientThemePreference);

    useEffect(() => {
        setTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        console.log(theme);

        if (theme.palette.mode === "light")
            setTheme(createTheme({ palette: { mode: "dark" } }));
        else setTheme(createTheme({ palette: { mode: "light" } }));
    };

    const contextValue: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
