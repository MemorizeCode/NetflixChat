import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getErrorsState } from "./getErrorsState"


describe("getErrorState", ()=>{
    test("return error", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                error: "Error"
            }
        }
        expect(getErrorsState(state as StateScema)).toEqual("Error")
    })
})