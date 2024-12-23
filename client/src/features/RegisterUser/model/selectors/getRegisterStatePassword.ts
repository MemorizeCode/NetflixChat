import { StateScema } from "@/app/providers/store/config/StateSchema";


export const getRegisterStatePassword = (state: StateScema) => state?.registerUser?.password || ""
    