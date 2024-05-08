/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, fetchPosts, updatePost } from "./postThunks";

export interface Post {
    _id: string;
    title: string;
    content: string;
    imageUrls: string[];
}

export interface PostState {
    posts: Post[];
}

const initialState: PostState = {
    posts: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state: any, action: PayloadAction<PostState>) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchPosts.fulfilled,
            (state, action: PayloadAction<Post[]>) => {
                state.posts = action.payload;
            }
        );
        builder.addCase(
            addPost.fulfilled,
            (state, action: PayloadAction<void>) => {
                // Gör något här, kanske köra en fetch?
            }
        );
        builder.addCase(updatePost.fulfilled, (state, action) => {
            const updatedPostIndex = state.posts.findIndex(
                (household) => household._id === action.payload._id
            );
            if (updatedPostIndex !== -1) {
                state.posts[updatedPostIndex] = action.payload;
            }
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter(
                (post) => post._id !== action.payload
            );
        });
    },
});

export const { setPosts } = postSlice.actions;
export const postReducer = postSlice.reducer;
