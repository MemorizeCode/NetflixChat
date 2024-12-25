
import $api from "@/app/config/axios/api";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface LoginSchema {
  login: string;
  password: string;
}

export const fetchLoginUser: any = createAsyncThunk(
  "fetchLoginUser",
  async ({ login, password }: LoginSchema, thunkAPI) => {
    try {
      const response = await $api.post("/auth/login", {
        login,
        password,
      });

      if(!response.data){
        throw new Error("Ошибка")
      }
      
      if(response.status === 200){
        return thunkAPI.dispatch(userActions.setAuthData(response.data))
      }
      
      //re
      if(response.status === 401){
        return thunkAPI.rejectWithValue(response.data.message)
      }

      if(response.status === 400){
        return thunkAPI.rejectWithValue(response.data.message)
      }
      
      return thunkAPI.rejectWithValue("Неизвестная ошибка");
    }
    
    catch(e){
      return thunkAPI.rejectWithValue(`Error: ${e}`)
    }
  }
);
