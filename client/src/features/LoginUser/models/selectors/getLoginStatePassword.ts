import { StateScema } from "@/app/providers/store/config/StateSchema";

export const getLoginStatePassword = (state:StateScema) => state?.loginUser?.password || ""
