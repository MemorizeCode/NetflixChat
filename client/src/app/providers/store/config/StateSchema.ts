
import { UserSchema } from "@/entities/User";
import { LoginUserSchema } from "@/features/LoginUser";
import { RegisterUserSchema } from "@/features/RegisterUser";
import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";


export interface StateScema {
  user: UserSchema

  //async
  registerUser?: RegisterUserSchema
  loginUser?: LoginUserSchema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScema>;
  reduce: (
    state: StateScema,
    action: AnyAction
  ) => ReducersMapObject<StateScema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxManagerTypes extends EnhancedStore<StateScema> {
  reducerManager: ReducerManager;
}

export type StateSchemaKey = keyof StateScema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateScema;
}
