import {RegisterUserSchema} from './model/types/RegisterSchema';
export type {RegisterUserSchema}

import { registerUserSlice, registerUserActions, registerUserReducer} from "./model/slice/registerSlice"
export { registerUserSlice, registerUserActions, registerUserReducer };

import { fetchRegister } from "./model/services/fetchRegisterUser"
export { fetchRegister }

import { RegisterForm } from './ui/RegisterForm.async';
export { RegisterForm }

import { getErrorsState } from './model/selectors/getErrorsState';
import { getLoadingState } from './model/selectors/getLoadingState';
import { getRegisterStateLogin } from './model/selectors/getRegisterStateLogin';
import { getRegisterStatePassword } from './model/selectors/getRegisterStatePassword';
import { getRegisterStateRP } from './model/selectors/getRegisterStateRP';

export { getErrorsState, getLoadingState, getRegisterStateLogin, getRegisterStatePassword, getRegisterStateRP }