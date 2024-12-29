import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateRoom } from "../service/fetchCreateRoom";
import { CreateRoomSchema } from "../types/CreateRoomSchema";

const initialState: CreateRoomSchema = {
    id: '',
    isLoading: false,
    error: '',
}

export const createRoomSlice = createSlice({
    name: "createRoom",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateRoom.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCreateRoom.fulfilled, (state, payload) => {
                state.isLoading = false;
                console.log(payload.payload)
                state.id = payload.payload
            })
            .addCase(fetchCreateRoom.rejected, (state,payload) => {
                state.isLoading = false;
                console.log(payload)
                // state.error = action.payload
            });
    },
});

export const { actions: createRoomActions } = createRoomSlice;
export const { reducer: createRoomReducer } = createRoomSlice;