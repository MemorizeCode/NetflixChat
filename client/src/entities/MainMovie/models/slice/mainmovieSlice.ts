import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MainMovieDataSchema, MainMovieSchema } from "../types/MainMovieSchema"
import { fetchMainMovie } from "../service/fetchMainMovie"


const initialStateData: MainMovieDataSchema = {
    id: 0,
    title: '',
    body: '',
    url: '',
    avatar: '',
    date: '',
    value: 0,
    raiting: 0,
    createdAt: '',
}

const initialState: MainMovieSchema = {
    idLoading: false,
    error: '',
    data: initialStateData
}   


export const mainmovieSlice = createSlice({
    name: 'mainmovie',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<MainMovieSchema>) => {
            state.data = action.payload.data
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchMainMovie.pending, (state) => {
            state.idLoading = true
        })
        builder.addCase(fetchMainMovie.fulfilled, (state, action) => {
            state.idLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchMainMovie.rejected, (state, action) => {
            state.idLoading = false
            state.error = action.payload
        })
    },
})

export const { actions: mainmovieActions } = mainmovieSlice
export const { reducer: mainmovieReducer } = mainmovieSlice