import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getLoginStatePassword } from "./getLoginStatePassword"


describe("getLoginState", ()=>{
    test("return passwordUser", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                password: "passwordUser"
            }
        }
        expect(getLoginStatePassword(state as StateScema)).toEqual("passwordUser")
    })

    test("return empty", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                password: ''
            }
        }
        expect(getLoginStatePassword(state as StateScema)).toEqual('')
    })
})