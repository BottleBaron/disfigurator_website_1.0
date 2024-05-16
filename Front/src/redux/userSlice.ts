/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: string;
    username: string;
    password: string;
}

export interface PostState {
    users: User[];
}

const initialState: PostState = {
    users: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsers: (state: any, action: PayloadAction<PostState>) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchUsers.fulfilled,
            (state, action: PayloadAction<User[]>) => {
                state.users = action.payload;
            }
        );
    },
});

export const fetchUsers = createAppAsyncThunk<User, void>(
    "users/get",
    async (n, thunkApi) => {
        try {
            return await getUsers();
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const { setUsers } = userSlice.actions;
export const userReducer = userSlice.reducer;
