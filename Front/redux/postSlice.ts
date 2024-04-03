/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Post {
    id: string;
    title: string;
    content: string;
    imageUrls: string[];
}

export let PostState: Post[];

const initialState: typeof PostState = [];

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state: any, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
    },
    extraReducers: {},
});

export const postReducer = postSlice.reducer;
