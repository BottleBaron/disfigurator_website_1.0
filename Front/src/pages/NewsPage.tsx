/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Post } from "../redux/postSlice";
import { fetchPosts } from "../redux/postThunks";
import { useAppDispatch, useAppSelector } from "../redux/store";

function NewsPage() {
    const dispatch = useAppDispatch();
    const dbPosts = useAppSelector((state: any) => state.post.posts);
    const [isLoaded, togglePageIsLoaded] = useState(false);


    const fetchData = async () => {
        const action = await dispatch(fetchPosts());
        if (fetchPosts.fulfilled.match(action)) {
            console.log("postFetch Succeeded");
            togglePageIsLoaded(true);
        } else console.error(action.payload);
    };

    if (!isLoaded) fetchData()

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
            <Box sx={{ width: "100%", marginBlock: 5 }}>
                {dbPosts.map((post: Post) => (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
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
                            {post.imageUrls.map((image) => (
                                <img
                                    style={{
                                        width: "20%",
                                        height: "auto",
                                        paddingInline: 20,
                                    }}
                                    src={image}
                                    alt="postImage"
                                />
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ width: "80%", margin: 5 }}>
                                <Typography sx={{ fontSize: 18 }}>
                                    {post.content}
                                </Typography>
                            </Box>
                            <p className="caret-slate-700">pid: {post.id}</p>
                        </Box>
                        <hr style={{ width: "100%" }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default NewsPage;
