import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./store";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
}>();

export default createAppAsyncThunk;
