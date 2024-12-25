import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getRegisterStateLogin } from "./getRegisterStateLogin"



describe("getLoginState", ()=>{
    test("return User_Login", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                login: "User_Login"
            }
        }
        expect(getRegisterStateLogin(state as StateScema)).toEqual("User_Login")
    })

    test("return empty", ()=>{
        const state: DeepPartial<StateScema> = {
            registerUser: {
                login: ''
            }
        }
        expect(getRegisterStateLogin(state as StateScema)).toEqual('')
    })
})