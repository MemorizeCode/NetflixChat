import { Button } from "@/shared/ui/Button";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { ImageAsync } from "@/widget/Image";
import { Raiting } from "@/widget/Raiting";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentmovieReducer } from "../models/slice/currentmovieSlice";
import { fetchCurrentMovie } from "../models/service/fetchCurrentMovie";
import { Link, useParams } from "react-router-dom";
import { getAvatarCurrentMovie, getBodyCurrentMovie, getDateCurrentMovie, getIdCurrentMovie, getIsLoading, getRaitingCurrentMovie, getTitleCurrentMovie, getValueCurrentMovie } from "../models/selectors/getDataCurrentMovie";
import { valueTransform } from "@/shared/lib/valueTransform/valueTransform";



const CurrentMovie = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const initialReducers: ReducersList = {
        "currentMovie": currentmovieReducer
    }

    useEffect(() => {
        dispatch(fetchCurrentMovie(id))
    }, [])

    const idMovie = useSelector(getIdCurrentMovie)
    const titleMovie = useSelector(getTitleCurrentMovie)
    const bodyMovie = useSelector(getBodyCurrentMovie)
    const valueMovie = useSelector(getValueCurrentMovie)
    const avatarMovie = useSelector(getAvatarCurrentMovie)
    const raitingMovie = useSelector(getRaitingCurrentMovie)
    const dateMovie = useSelector(getDateCurrentMovie)
    const isLoading = useSelector(getIsLoading)

    const transformValue = valueTransform(valueMovie)
    
    return (
        <Suspense fallback={"Loading data..."} >
            <DynamicLoader initialReducers={initialReducers} unmount>
                <div className="relative bg-black w-full min-h-screen text-white overflow-hidden">
                    <Suspense fallback="Loading...">
                        <ImageAsync bg={true} src={`${import.meta.env.VITE_BACKEND_SERVER}${avatarMovie}`} />
                    </Suspense>
                    <div className="relative px-4 pt-10 md:px-8 lg:px-16 max-w-7xl">
                        <h1 className="lg:text-8xl max-sm:text-3xl font-bold mt-8 mb-2 leading-tight  text-white text-left">
                            {titleMovie}
                        </h1>
                        <div className="flex items-center text-sm md:text-base mb-4 mt-4">
                            <Raiting text={raitingMovie} />
                            <span className="relative inline-block before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 m-2" />
                            <span className="mr-2">{dateMovie}</span>
                            <span className="relative inline-block before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 m-2" />
                            <span className="mr-2">Боевик</span>
                            <span className="relative inline-block before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 m-2" />
                            <span className="mr-2">{transformValue}</span>
                            <span className="relative inline-block before:content-['•'] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 m-2" />
                            <span>16+</span>
                        </div>
                        <p className="text-[20px] mb-6 max-w-2xl">
                            {bodyMovie}
                        </p>
                        <div className="text-sm md:text-base mb-6">
                            <p className="text-[18px] pt-2">
                                <span className="font-medium">Режиссёр:</span> <span >Эндони Руссо, Джо Руссо, Джосс Уидон</span>
                            </p>
                            <p className="text-[18px] pt-2">
                                <span className="font-medium">Актёры:</span> <span >Роберт Дауни мл. , Крис Эванс, Марк Руффало, Крис Хемсфорт, Скарлет Йоханссон, Джереми Реннер и другие </span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 mb-10">
                            <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition duration-200">Смотреть</button>
                            <Link to={`/createRoom/${idMovie}`}>
                                <Button>Смотреть</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </DynamicLoader>
        </Suspense>
    );
};

export default CurrentMovie;