/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPost, getPosts, putPost } from "../../api/postApi";
import { Post } from "./postSlice";
import createAppAsyncThunk from "./utils";

export const addPost = createAppAsyncThunk<void, Post>(
    "post/create",
    async (newPost: Post, thunkAPI) => {
        try {
            await createPost(newPost);
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const fetchPosts = createAppAsyncThunk<Post[], void>(
    "post/get",
    async (n, thunkApi) => {
        try {
            return await getPosts();
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
export const updatePost = createAppAsyncThunk<Post, Post>(
    "post/update",
    async (updatedPost: Post, thunkAPI) => {
        if (!updatedPost._id) {
            return thunkAPI.rejectWithValue(
                "userData requires an Id to update"
            );
        }
        try {
            await putPost(updatedPost);
            return updatedPost;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deletePost = createAppAsyncThunk<string, string>(
    "post/delete",
    async (postId: string, thunkAPI) => {
        try {
            await deletePost(postId);
            return postId;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
