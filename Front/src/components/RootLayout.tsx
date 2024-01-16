import { Box, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <Box sx={{display: 'flex', height: '100vh', flexDirection: 'column', overflowY: 'scroll'}}>
            <Box
                component="header"
                sx={{height: 100, display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between', alignItems: 'center'}}
            >
                {/* FIXME: Change logo image*/}
                <NavLink style={{marginInline: 50}} to="/"><img style={{height: 50, width: 125}} src="../../resources/IMG_1807.png" alt="Disfigurator Logo"/></NavLink>
                <Box sx={{display: 'flex', flexDirection: 'row', marginInline: 10}}>
                    <NavLink style={{paddingInline: 10}} to='/'>About</NavLink>
                    <NavLink style={{paddingInline: 10}} to='/'>News</NavLink>
                </Box>
            </Box>
            <Box component="main" sx={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                {/* FIXME: Replace bg color with themeW*/}
                <Box sx={{display: "flex", width: '70%', backgroundColor: 'grey'}}>
                    <Outlet />
                </Box>
            </Box>
            <Box component="footer" sx={{display: 'flex', flexShrink: 0}}>
                <Typography>
                    Intellectual property of Disfigurator © 2023
                </Typography>
            </Box>
        </Box>
    );
}
