import type { MainMovieSchema, MainMovieDataSchema} from "./models/types/MainMovieSchema";
import { mainmovieActions, mainmovieReducer, mainmovieSlice } from "./models/slice/mainmovieSlice";
import {fetchMainMovie} from "./models/service/fetchMainMovie"
import { MainMovieAsync } from "./ui/MainMovie.async";
export { mainmovieActions, mainmovieReducer, mainmovieSlice, MainMovieSchema, MainMovieDataSchema,fetchMainMovie,MainMovieAsync };