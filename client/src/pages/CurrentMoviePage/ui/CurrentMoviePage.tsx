import { CurrentMovieAsync, currentmovieReducer, fetchCurrentMovie } from "@/entities/CurrentMovie";

import { Button } from "@/shared/ui/Button";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { ImageAsync } from "@/widget/Image";
import { Loader } from "@/widget/Loader";
import { PageLoader } from "@/widget/PageLoader";
import { Raiting } from "@/widget/Raiting";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CurrentMoviePage = () => {

    const {id} = useParams()

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <CurrentMovieAsync />
            </Suspense>
        </>

    );
};

export default CurrentMoviePage;