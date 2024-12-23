import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRegister } from "../services/fetchRegisterUser";
import { RegisterUserSchema } from "../types/RegisterSchema";

const initialState: RegisterUserSchema = {
    login: "",
    password: "",
    repeat_password: "",
    isLoading: false,
    error: ''
}

export const registerUserSlice = createSlice({
    name:"regsiterUser",
    initialState: initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setRepeatPassword: (state, action: PayloadAction<string>) => {
            state.repeat_password = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchRegister.pending, (state) => {
            state.isLoading = true
         
        })
        .addCase(fetchRegister.fulfilled, (state) => {
            state.error = ""
            state.isLoading = false
        })
        .addCase(fetchRegister.rejected, (state,action) => {
            state.error = action.payload
            state.isLoading = false
        })
    }
})

export const { actions: registerUserActions } = registerUserSlice
export const { reducer: registerUserReducer} = registerUserSlice 