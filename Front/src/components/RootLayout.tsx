import { Box, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <Box className="flex flex-col h-screen">
            <Box
                component="header"
                className="flex flex-row justify-between items-center h-16"
            >
                <NavLink to="/">Disfigurator</NavLink>
            </Box>
            <Box className="flex flex-1">
                <Box className="flex-grow w-6/12 bg-white">
                    <Outlet />
                </Box>
            </Box>
            <Box component="footer" className="flex-shrink-0">
                <Typography>
                    Intellectual property of Disfigurator © 2023
                </Typography>
            </Box>
        </Box>
    );
}
