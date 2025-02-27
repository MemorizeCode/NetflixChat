import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { memo, useEffect } from "react";
import { messageReducer } from "../models/slice/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesRoom } from "../models/selectors/getMessagesRoom";
import { fetchGetMessage } from "../models/service/fetchGetMessage";
import { Button } from "@/shared/ui/Button";

interface RoomMessageProps {
    roomId: string | undefined
}

const RoomMessage = memo(({ roomId }: RoomMessageProps) => {
    console.log("@rerender")

    const initialReducers: ReducersList = {
        "messageRoom": messageReducer
    }
    const dispatch = useDispatch();
    const data = useSelector(getMessagesRoom)

    useEffect(() => {
        dispatch(fetchGetMessage(roomId))
    }, [])

    return (
        <DynamicLoader initialReducers={initialReducers} unmount>
            <div className="w-96 h-[710px]">
                <h2 className="text-white font-bold text-3xl mb-4">Chat</h2>
                <div className="h-[604px] bg-slate-900">
                    <div className="h-full overflow-y-auto" >
                        {
                            data?.map((item) => {
                                return (
                                    <div className="chat-message flex  items-center mb-4 bg-slate-600 p-4 rounded-xl">
                                        <div className="chat-text bg-gray-800 p-3 rounded-md min-w-36">
                                            <p className="text-white min-w-2 text-wrap">{item.name}</p>
                                            <p className="text-white min-w-2 text-wrap">{item.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </DynamicLoader>
    )
})


export default RoomMessage;