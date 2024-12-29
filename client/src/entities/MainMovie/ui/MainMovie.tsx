import DynamicLoader, { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { useDispatch, useSelector } from "react-redux";
import { mainmovieReducer } from "../models/slice/mainmovieSlice";
import { Suspense, useEffect } from "react";
import { fetchMainMovie } from "../models/service/fetchMainMovie";
import { getDataMainMoviesState } from "../models/selectors/getDataMainMoviesState/getDataMainMoviesState";

import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { getIsLoadingState } from "../models/selectors/getIsLoadingState/getIsLoadingState";
import { valueTransform } from "@/shared/lib/valueTransform/valueTransform";
import { ImageAsync } from "@/widget/Image";
import { MainMovieDataSchema } from "../models/types/MainMovieSchema";
import { Loader } from "@/widget/Loader";


const MainMovie = () => {

    const dispatch = useDispatch();
    const initialState: ReducersList = {
        "mainMovie": mainmovieReducer
    }
    const data = useSelector(getDataMainMoviesState) //БУДЕТ МАССИВ ФИЛЬМОВ
    const isLoading = useSelector(getIsLoadingState)
    const value = valueTransform(data?.value)
    const dataDate = data?.createdAt.split("T")[0]

    useEffect(() => {
        dispatch(fetchMainMovie())
    }, [])
    return (
        <DynamicLoader initialReducers={initialState} unmount>
            {
                isLoading ? <Loader /> : <div className="relative w-full h-[700px] flex flex-col items-center justify-center text-white">
                    <Suspense fallback={<Loader />}>
                        <ImageAsync bg={true} src={`${import.meta.env.VITE_BACKEND_SERVER}${data?.avatar}`} />
                    </Suspense>
                    <div className="absolute z-10 top-16 left-10 p-6 max-w-2xl text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data?.title}</h2>
                        <p className="text-base md:text-lg mb-6">{data?.body}</p>
                        {/* <div className="flex items-center mb-4 text-sm md:text-base">
                        <span className="mr-4"><span className="font-semibold bg-green-500 px-2 rounded">{data?.raiting}</span></span>
                        <span className="mr-4"><span className="font-semibold">{data?.date}</span></span>
                        <span><span className="font-semibold">{value}</span></span>
                    </div> */}
                        <Link to={`/movie/${data?.id}`}>
                            <Button>
                                Смотерть
                            </Button>
                        </Link>
                    </div>
                </div>
            }

        </DynamicLoader>
    );
}
export default MainMovie