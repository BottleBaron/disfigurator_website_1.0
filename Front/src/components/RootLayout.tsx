import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { useThemeSelector } from "../context/ThemeContext";

export default function RootLayout() {
    const { theme } = useThemeSelector();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Box
                sx={{
                    display: "flex",
                    height: "100vh",
                    flexDirection: "column",
                    overflowY: "scroll",
                    overflow: "scroll",
                }}
            >
                <Box
                    component="header"
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 100,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* FIXME: Change logo image*/}
                    <NavLink style={{ marginInline: 50 }} to="/">
                        <img
                            style={{ height: "auto", width: 125 }}
                            src="../../resources/Disfigurator-Logo-Vit.png"
                            alt="Disfigurator Logo"
                        />
                    </NavLink>
                    <Box>
                        <p>Sometext </p>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginInline: 10,
                        }}
                    >
                        <NavLink style={{ paddingInline: 10 }} to="/">
                            About
                        </NavLink>
                        <NavLink style={{ paddingInline: 10 }} to="/">
                            News
                        </NavLink>
                    </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ position: "relative" }}>
                        <img
                            style={{
                                height: "auto",
                                width: "30%",
                                position: "absolute",
                                top: "10vw",
                                left: "35.2%",
                            }}
                            src="../../resources/Disfigurator-Logo-vit.png"
                            alt="Logo"
                        />
                    </Box>
                    <img
                        style={{ width: "100%" }}
                        src="../../resources/MentalBanner(1).svg"
                        alt="Banner"
                    />
                </Box>
                <Box
                    component="main"
                    sx={{
                        display: "flex",
                        position: "relative",
                        top: 0,
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    <Outlet />
                </Box>
                <Box
                    component="footer"
                    sx={{
                        display: "flex",
                        flexShrink: 0,
                        position: "relative",
                    }}
                >
                    <Typography>
                        Intellectual property of Disfigurator © 2023
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
