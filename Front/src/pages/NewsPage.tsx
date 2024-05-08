import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { fetchPosts } from "../redux/postThunks";
import { useAppDispatch, useAppSelector } from "../redux/store";

function NewsPage() {
    const dispatch = useAppDispatch();
    const dbPosts = useAppSelector((state) => state.post.posts);

    const fetchData = async () => {
        const action = await dispatch(fetchPosts());
        if (fetchPosts.fulfilled.match(action)) {
            console.log("postFetch Succeeded");
        } else console.error(action.payload);
    };

    useEffect(() => {
        fetchData();
        console.log("NewsPage Mounted");
    });

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
                {dbPosts.map((post) => (
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
                        </Box>
                        <hr style={{ width: "100%" }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default NewsPage;
