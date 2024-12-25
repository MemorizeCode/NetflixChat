import { KEY_REFRESH } from "@/shared/const/localStorage/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchIsAuth:any = createAsyncThunk(
    "isAuth",
    async () => {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}/auth/refresh`,{
            token: localStorage.getItem(KEY_REFRESH),
        })

        if(response.status === 200){
            return response.data
        }
        return false; 

    }
)
// "http://localhost:5000/api/auth/refresh"