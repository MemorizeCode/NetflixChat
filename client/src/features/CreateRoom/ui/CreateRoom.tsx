import { currentmovieReducer, fetchCurrentMovie } from "@/entities/CurrentMovie"
import { DynamicLoader } from "@/shared/ui/DynamicLoader"
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCreateRoom } from "../models/service/fetchCreateRoom"
import { getIdCreateRoom } from "../models/selectors/getIdCreateRoom"
import { createRoomReducer } from "../models/slice/createroomSlice"

const CreateRoom = () => {

    const initialReducers: ReducersList = {
        "createRoom": createRoomReducer
    }
    const {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const randomUrlRoom = useSelector(getIdCreateRoom)
    console.log(randomUrlRoom)
    useEffect(()=>{
        dispatch(fetchCreateRoom(id))
    },[])

    if(randomUrlRoom){
        navigate(`/room/${randomUrlRoom}`)
    }

    return (
        <div>
            <DynamicLoader initialReducers={initialReducers} unmount>
                <></>
            </DynamicLoader>
        </div>
    )
}

export default CreateRoom