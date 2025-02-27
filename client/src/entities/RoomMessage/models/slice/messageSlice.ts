import { createSlice } from "@reduxjs/toolkit"
import { MessageDataSchema, MessageSchema } from "../types/MessageSchema"
import { fetchGetMessage } from "../service/fetchGetMessage"

const initialStateData: MessageDataSchema[] = [{
    id: 0,
    title: '',
    roomId: '',
    name: ''
}]

const initialState: MessageSchema = {
    roomId: "",
    isLoading: false,
    data: initialStateData,
}


const messageSlie = createSlice({
    name: "movie",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetMessage.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchGetMessage.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchGetMessage.rejected, (state) => {
            state.isLoading
        })
    }
})

export const { actions: messageSlice } = messageSlie
export const { reducer: messageReducer } = messageSlie