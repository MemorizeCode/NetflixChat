import $api from "@/app/config/axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateRoom:any = createAsyncThunk('room/fetchCreateRoom', async (id, thunkAPI) => {
    try{
        const response = await $api.post("/movie/createRoom", {
            filmId: id
        })
        if(!response.data){
            throw new Error("")
        }

        if(response.status === 200){
            return response.data.randomUrlRoom
        }

        return thunkAPI.rejectWithValue("Неизвестная ошибка")
    }
    catch(e){
        return thunkAPI.rejectWithValue("Сервер не отвечает")
    }
})