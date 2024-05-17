/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import YoutubePlayer from "./components/YTPlayer";
import { useAppSelector } from "./redux/store";

function App() {
  const dbPosts = useAppSelector((p) => p.post.posts);
  
  
  let post = dbPosts.at(0);

  if(post == undefined) {
    post = {
        id: "",
        title: "",
        content: "",
        imageUrl: "",
    };
  }

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
        <Typography style={{ fontSize: 34, fontWeight: "bold", paddingBottom:"2rem"
         }}>
          NEWS
        </Typography>
        <hr style={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <hr style={{ width: "100%" }} />
          <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  flex: 1,
                  maxWidth: "60%",
                  height: "auto",
                  paddingInline: 20,
                }}
                src={post.imageUrl}
                alt="postImage"
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
              <Box sx={{ width: "80%", margin: 5 }}>
                <Typography sx={{ fontSize: 18 }}>{post.content}</Typography>
              </Box>
            </Box>
            <hr style={{ width: "100%" }} />
        </Box>
      </Box>

      <Box sx={{ width: "80%", marginBlock: 5 }}>
        <Typography style={{ fontSize: 34, fontWeight: "bold" }}>
          BIO
        </Typography>
        <hr style={{ width: "100%" }} />
        <Typography style={{ fontSize: 18 }}>
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
