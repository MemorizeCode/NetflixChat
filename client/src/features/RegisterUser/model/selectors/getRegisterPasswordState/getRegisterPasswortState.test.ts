import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getRegisterStatePassword } from "./getRegisterStatePassword"



describe("getPasswordState", ()=>{
    test("return User_password", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                password: "User_password"
            }
        }
        expect(getRegisterStatePassword(state as StateScema)).toEqual("User_password")
    })

    test("return empty", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                password: ''
            }
        }
        expect(getRegisterStatePassword(state as StateScema)).toEqual('')
    })
})