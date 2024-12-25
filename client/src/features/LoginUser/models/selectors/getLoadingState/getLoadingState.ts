import { StateScema } from "@/app/providers/store/config/StateSchema";


export const getLoadingState = (state: StateScema) => state?.loginUser?.isLoading;
