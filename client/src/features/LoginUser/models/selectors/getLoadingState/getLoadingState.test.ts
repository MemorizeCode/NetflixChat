import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getLoadingState } from "./getLoadingState"

describe("getLoadingState", ()=>{
    test("loading true", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                isLoading: true
            }
        }
        expect(getLoadingState(state as StateScema)).toEqual(true)
    })

    test("loading false", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                isLoading: false
            }
        }
        expect(getLoadingState(state as StateScema)).toEqual(false)
    })
})