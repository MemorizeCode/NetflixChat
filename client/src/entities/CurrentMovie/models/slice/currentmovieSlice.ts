import { createSlice } from "@reduxjs/toolkit";
import { CurrentMovieSchema } from "../types/CurrentMovieSchema";
import { fetchCurrentMovie } from "../service/fetchCurrentMovie";

const intitailState: CurrentMovieSchema = {
    id: 0,
    title: '',
    body: '',
    url: '',
    avatar: '',
    date: '',
    value: 0,
    raiting: 0,
    createdAt: '',
    isLoading: false
}

export const currentmovieSliceName = createSlice({
    name:"currentmovie",
    initialState: intitailState,
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(fetchCurrentMovie.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCurrentMovie.fulfilled, (state, action) => {
            state.isLoading = false
            //Надо наверное было сделать поле data и тужа уже пихать данные, ну ладно
            state.id = action.payload.id
            state.title = action.payload.title
            state.body = action.payload.body
            state.url = action.payload.url
            state.avatar = action.payload.avatar
            state.date = action.payload.date
            state.value = action.payload.value
            state.raiting = action.payload.raiting
        })
        builder.addCase(fetchCurrentMovie.rejected, (state, action) => {
            state.isLoading = false
        })
    },
})

export const { actions: currentmovieActions } = currentmovieSliceName
export const { reducer: currentmovieReducer } = currentmovieSliceName