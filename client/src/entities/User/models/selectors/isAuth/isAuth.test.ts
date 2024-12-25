import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { isAuth } from "./isAuth"

describe("isAuth", () => {
    test("isAuth true", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                auth: true
            }
        }
        expect(isAuth(state as StateScema)).toEqual(true)
    })

    test("isAuth false", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                auth: false
            }
        }
        expect(isAuth(state as StateScema)).toEqual(false)
    })
})