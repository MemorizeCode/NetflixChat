import { fetchMainMovie, MainMovieAsync, mainmovieReducer } from "@/entities/MainMovie";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { Toast } from "@/shared/ui/Toast";
import { Loader } from "@/widget/Loader";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";


const MainPage = () => {


    return (<>
    <Suspense fallback={<Loader/>}>
        <MainMovieAsync />
    </Suspense>
    </>);
}
 
export default MainPage;