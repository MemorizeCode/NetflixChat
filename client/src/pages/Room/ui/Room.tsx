import { useParams } from "react-router-dom";

const Room = () => {

    const { id } = useParams();
    const idVideo = id?.split("_")[1];

    return (
        <div>Room</div>
    )
}

export default Room;