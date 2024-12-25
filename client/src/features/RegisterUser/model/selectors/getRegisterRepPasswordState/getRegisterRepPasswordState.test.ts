import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getRegisterStateRP } from "./getRegisterStateRP"




describe("getRepPasswordState", ()=>{
    test("return User_password", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                repeat_password: "User_password"
            }
        }
        expect(getRegisterStateRP(state as StateScema)).toEqual("User_password")
    })

    test("return empty", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                repeat_password: ''
            }
        }
        expect(getRegisterStateRP(state as StateScema)).toEqual('')
    })
})