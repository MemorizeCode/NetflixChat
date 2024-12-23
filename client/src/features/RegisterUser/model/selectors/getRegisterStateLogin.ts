import { StateScema } from "@/app/providers/store/config/StateSchema";

export const getRegisterStateLogin = (state:StateScema) => state?.registerUser?.login || ""