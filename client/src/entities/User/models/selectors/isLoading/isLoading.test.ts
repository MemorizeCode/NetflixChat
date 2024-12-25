import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { isLoadingUser } from "./isLoading"


describe("isLoading", () => {
    test("isLoaing true", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                isLoading: true
            }
        }
        expect(isLoadingUser(state as StateScema)).toEqual(true)
    })

    test("isLoaing false", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                isLoading: false
            }
        }
        expect(isLoadingUser(state as StateScema)).toEqual(false)
    })
})