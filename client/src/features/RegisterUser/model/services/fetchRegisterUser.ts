import $api from "@/app/config/axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


interface RegisterData {
  login: string;
  password: string;
  repeat_password: string;
}

export const fetchRegister:any = createAsyncThunk(
  "registerUser",
  async ({ login, password, repeat_password }: RegisterData, thunkAPI) => {
    try {
      if (password !== repeat_password) {
        return thunkAPI.rejectWithValue("Не верные пароли");
      } else {
        const response = await $api.post("/auth/register", {
          login,
          password,
          repeat_password,
        });
        if(response.status === 200) {
          return response.data
        }
        //re
        if(response.status === 401) {
          return thunkAPI.rejectWithValue(response.data.message)
        }

        if(response.status === 400) {
          return thunkAPI.rejectWithValue(response.data.message)
        }

        return thunkAPI.rejectWithValue("Неизвестная ошибка");
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(`Сервер не отвечает`)

    }
  }
);
