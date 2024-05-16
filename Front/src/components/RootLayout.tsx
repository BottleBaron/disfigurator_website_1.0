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
                        height: "7vw",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 100,
                    }}
                >
                    {/* FIXME: Change logo image*/}
                    <NavLink style={{ marginInline: 50 }} to="/">
                        <img
                            style={{ height: "3.5vw", width: "auto" }}
                            src="../../resources/Disfigurator-Logo-Vit.png"
                            alt="Disfigurator Logo"
                        />
                    </NavLink>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInline: 10,
                        }}
                    >
                        <NavLink
                            style={{
                                paddingInline: 10,
                                fontSize: "1.3vw",
                            }}
                            to="/contact"
                        >
                            CONTACT
                        </NavLink>
                        <NavLink
                            style={{
                                paddingInline: 10,
                                fontSize: "1.3vw",
                            }}
                            to="/news"
                        >
                            NEWS
                        </NavLink>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginInline: 10,
                        }}
                    >
                        <NavLink to="https://www.facebook.com/profile.php?id=100064525667229&locale=sv_SE">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/ic--baseline-facebook.svg"
                                alt="fb"
                            />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/disfigurator/?next=%2F24072013ilij%2Ftagged%2F&">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mdi--instagram.svg"
                                alt="insta"
                            />
                        </NavLink>
                        <NavLink to="https://www.threads.net/@disfigurator">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mingcute--threads-line.svg"
                                alt="threadsIcon"
                            />
                        </NavLink>
                        <NavLink to="https://linktr.ee/disfigurator">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/simple-icons--linktree.svg"
                                alt="linktreeIcon"
                            />
                        </NavLink>
                        <NavLink to="https://open.spotify.com/artist/6QSGrK5gotJxfy6mf3uLfJ?si=9O7q-QEpTxmikc7A9ENqLQ">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mdi--spotify.svg"
                                alt="spotifyIcon"
                            />
                        </NavLink>
                        <NavLink to="https://www.youtube.com/@disfigurator">
                            <img
                                style={{
                                    height: "auto",
                                    width: "1.5vw",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mdi--youtube.svg"
                                alt="YTIcon"
                            />
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
