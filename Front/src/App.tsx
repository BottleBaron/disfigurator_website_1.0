/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import YoutubePlayer from "./components/YTplayer";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        marginInline: "5%",
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <YoutubePlayer />
      </Box>

      <Box sx={{ width: "80%", marginBlock: 5 }}>
        <Typography style={{ fontSize: 34, fontWeight: 'bold' }}>NEWS</Typography>
        <hr style={{ width: "100%" }} />
        <Typography style={{fontSize: 18}}>
          news go here
        </Typography>
      </Box>

      <Box sx={{ width: "80%", marginBlock: 5 }}>
        <Typography style={{ fontSize: 34, fontWeight: 'bold' }}>BIO</Typography>
        <hr style={{ width: "100%" }} />
        <Typography style={{fontSize: 18}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          pellentesque elit eget gravida cum sociis. Pellentesque habitant morbi
          tristique senectus et netus. Donec pretium vulputate sapien nec
          sagittis aliquam. In nisl nisi scelerisque eu ultrices vitae auctor.
          Dui ut ornare lectus sit amet est placerat. Et netus et malesuada
          fames ac turpis egestas. Eget dolor morbi non arcu. Quis enim lobortis
          scelerisque fermentum dui faucibus in. Erat velit scelerisque in
          dictum non. Facilisis sed odio morbi quis commodo odio aenean.
          Consequat ac felis donec et odio pellentesque diam volutpat.
        </Typography>
      </Box>

      <img
        style={{ height: 250, width: 250 }}
        src="../resources/troja.png"
        alt="Hourglass"
      />
    </Box>
  );
}

export default App;
