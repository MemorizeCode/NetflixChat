import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getErroState } from "./getErroState"

describe("getErrorState", ()=>{
    test("return error", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                error: "Error"
            }
        }
        expect(getErroState(state as StateScema)).toEqual("Error")
    })
})