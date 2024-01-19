import { Box, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        // FIXME: Background image not working properly
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
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >
                <img
                    style={{
                        width: "10%",
                        height: "auto",
                        position: "absolute",
                        top: "20%",
                        left: "45%",
                    }}
                    src="../../resources/Disfigurator-Logo-Vit.png"
                    alt="Disfigurator Logo"
                />
                <img
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -2,
                    }}
                    src="../../resources/MentalBanner(1).svg"
                    alt="MentalBanner"
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
            <Box component="footer" sx={{ display: "flex", flexShrink: 0 }}>
                <Typography>
                    Intellectual property of Disfigurator © 2023
                </Typography>
            </Box>
        </Box>
    );
}
