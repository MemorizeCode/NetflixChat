import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginUserSchema } from "../types/LoginUserSchema"
import { fetchLoginUser } from "../service/loginByUser"

const initialState: LoginUserSchema = {
    login: "",
    password: "",
    isLoading: false,
    error: ""
}

export const loginUserSlice = createSlice({
    name: "loginUserSlice",
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchLoginUser.fulfilled, (state) => {
                state.isLoading = false
                state.error = ""
            })
            .addCase(fetchLoginUser.rejected, (state,action) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})

export const { actions: loginUserActions } = loginUserSlice
export const {reducer: loginUserSliceReducer} =  loginUserSlice