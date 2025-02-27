import { RoomMessage } from "@/entities/RoomMessage";
import { Loader } from "@/widget/Loader";
import { Suspense } from "react";
import { useParams } from "react-router-dom";


const Room = () => {

    const { id } = useParams();
    // const idVideo = id?.split("_")[1];

    return (
        <Suspense fallback={<Loader />}>
            <RoomMessage roomId={id}/>
        </Suspense>
    )
}

export default Room;