/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import "./assets/customfontstyling.css";
import YoutubePlayer from "./components/YTPlayer";
import { fetchPosts } from "./redux/postThunks";
import { useAppDispatch, useAppSelector } from "./redux/store";

function App() {
  const dbPosts = useAppSelector((p) => p.post.posts);
  const dispatch = useAppDispatch();

  const [isLoaded, setPageIsLoaded] = useState(false);

  const fetchData = async () => {
    const action = await dispatch(fetchPosts());
    if (fetchPosts.fulfilled.match(action)) {
      console.log("postFetch Succeeded");
      setPageIsLoaded(true);
    } else console.error(action.payload);
  };

  if (!isLoaded) fetchData();

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
        //flex: 1,
        width: '100vw',
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

      <Box sx={{ width: "80%", maxWidth: "1500px", marginBlock: 5 }}>
        <Typography style={{ fontSize: 34, paddingBottom:"2rem", fontFamily: 'BloodSeeker, sans-serif'
         }}>
          RECENT NEWS
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
                  maxWidth: "700px",
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

      <Box sx={{ width: "80%", maxWidth: '1500px', marginBlock: 5 }}>
        <Typography style={{ fontSize: 34, fontFamily:"BloodSeeker, sans-serif" }}>
          BIO
        </Typography>
        <hr style={{ width: "100%" }} />
        <Typography style={{ fontSize: 18 }}>
        Disfigurator is a thrash metal band from Borås that delivers headbanging songs and has played with artists such as Bullet and Creeping Flesh. In 2009, three of Disfigurator's current members started a project that would later become the band you know today. As the band adds new members, Disfigurator started playing shows.
         To this day, Disfigurator has released two singles "What is mosh (Demo)" (2022) and "Turning the hourglass" (2023). The band is currently working on their first ever EP, due for release in 2024 and ensuring the realization of their ideal sound.
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
