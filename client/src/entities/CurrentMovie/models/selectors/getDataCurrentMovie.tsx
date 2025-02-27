import { StateScema } from "@/app/providers/store/config/StateSchema";

export const getIdCurrentMovie = (state: StateScema) => state.currentMovie?.id
export const getTitleCurrentMovie = (state: StateScema) => state.currentMovie?.title
export const getBodyCurrentMovie = (state: StateScema) => state.currentMovie?.body
export const getValueCurrentMovie = (state: StateScema) => state.currentMovie?.value
export const getAvatarCurrentMovie = (state: StateScema) => state.currentMovie?.avatar
export const getDateCurrentMovie = (state: StateScema) => state.currentMovie?.date
export const getRaitingCurrentMovie = (state: StateScema) => state.currentMovie?.raiting
export const getIsLoading = (state: StateScema) => state.currentMovie?.isLoading

