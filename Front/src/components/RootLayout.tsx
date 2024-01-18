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
        backgroundImage: `url(../../resources/1652.jpg)`,
        backgroundColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Box
        component="header"
        sx={{
          height: '10%',
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* FIXME: Change logo image*/}
        <NavLink style={{ marginInline: 50 }} to="/">
          <img
            style={{ height: 50, width: 125 }}
            src="../../resources/IMG_1807.png"
            alt="Disfigurator Logo"
          />
        </NavLink>
        <Box sx={{ display: "flex", flexDirection: "row", marginInline: 10 }}>
          <NavLink style={{ paddingInline: 10 }} to="/">
            About
          </NavLink>
          <NavLink style={{ paddingInline: 10 }} to="/">
            News
          </NavLink>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <Outlet />
      </Box>
      <Box component="footer" sx={{ display: "flex", flexShrink: 0 }}>
        <Typography>Intellectual property of Disfigurator © 2023</Typography>
      </Box>
    </Box>
  );
}
