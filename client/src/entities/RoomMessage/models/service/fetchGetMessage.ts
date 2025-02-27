import $api from "@/app/config/axios/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchGetMessage:any = createAsyncThunk(
    "getMessagesRoom",
    async (roomId, thunkAPI) => {
        try{
                const response = await $api.get(`/movie/getMsgRooms/${roomId}`)
        
                if(!response.data){
                    throw new Error("")
                }
        
                if(response.status === 200){

                    return response.data.messagesRoom
                }
        }
        catch(e){
            console.log(e)
        }
    }
)
