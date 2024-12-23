import { StateScema } from "@/app/providers/store/config/StateSchema";

export const getLoginStateLogin = (state:StateScema) => state?.loginUser?.login || ""
