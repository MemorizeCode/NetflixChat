import $api from "@/app/config/axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrentMovie: any = createAsyncThunk("fetchCurrentMovie", async (id, thunkAPI) => {
    try{
        const response = await $api.get(`/movie/getMovieById/${id}`)

        if(!response.data){
            throw new Error("")
        }
        if(response.status == 200){
            console.log(response.data)
            return response.data
        }
        throw new Error("Ошибка")
    }
    catch(e){
        return thunkAPI.rejectWithValue("Сервер не отвечает")
    }
})