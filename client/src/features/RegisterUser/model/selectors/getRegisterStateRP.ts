import { StateScema } from "@/app/providers/store/config/StateSchema";


export const getRegisterStateRP = (state: StateScema) => state?.registerUser?.repeat_password || ""