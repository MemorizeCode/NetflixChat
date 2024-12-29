import type {CurrentMovieSchema} from "./models/types/CurrentMovieSchema";
import { currentmovieActions, currentmovieReducer } from "./models/slice/currentmovieSlice";
import {fetchCurrentMovie} from './models/service/fetchCurrentMovie'
import { CurrentMovieAsync } from "./ui/CurrentMovie.async";
import {getIdCurrentMovie, getAvatarCurrentMovie, getBodyCurrentMovie, getDateCurrentMovie, getIsLoading, getRaitingCurrentMovie, getTitleCurrentMovie, getValueCurrentMovie} from "./models/selectors/getDataCurrentMovie"
export {fetchCurrentMovie, currentmovieActions, currentmovieReducer, CurrentMovieSchema,CurrentMovieAsync}
export {getIdCurrentMovie, getAvatarCurrentMovie, getBodyCurrentMovie, getDateCurrentMovie, getIsLoading, getRaitingCurrentMovie, getTitleCurrentMovie, getValueCurrentMovie}