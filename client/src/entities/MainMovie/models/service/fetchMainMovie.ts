import $api from "@/app/config/axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMainMovie:any = createAsyncThunk("fetchMainMovie", async (_, thunkAPI) => {
    try{
        const response = await $api.get("/movie/getMainMovie")
        if(!response.data){
            throw new Error("")
        }

        if(response.data){
            return response.data
        }
        return thunkAPI.rejectWithValue("Неизвестная ошибка")
    }
    catch(e){
        return thunkAPI.rejectWithValue("Сервер не отвечает")
    }
})