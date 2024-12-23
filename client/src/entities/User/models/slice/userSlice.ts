import { KEY_ACCESS, KEY_REFRESH } from "@/shared/const/localStorage/localStorage";
import { fetchIsAuth } from "../service/isAuth";
import { UserSchema } from "../types/UserSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: UserSchema = {
  auth: false,
  isLoading: false,
  roles: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.roles = [action.payload];
    },
    setAuthData: (state, action) => {
      state.auth = true
      state.roles = [action.payload.role];
      localStorage.setItem(KEY_ACCESS, action.payload.accesToken);
      localStorage.setItem(KEY_REFRESH, action.payload.refreshToken);
    },
    setLogOut: (state) => {
      state.auth = false;
      state.roles = [];
      localStorage.removeItem(KEY_ACCESS);
      localStorage.removeItem(KEY_REFRESH);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIsAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIsAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth = action.payload;
      })
      .addCase(fetchIsAuth.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

