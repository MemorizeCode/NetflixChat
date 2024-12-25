import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { getLoginStateLogin } from "./getLoginStateLogin"



describe("getLoginState", ()=>{
    test("return User_Login", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                login: "User_Login"
            }
        }
        expect(getLoginStateLogin(state as StateScema)).toEqual("User_Login")
    })

    test("return empty", ()=>{
        const state: DeepPartial<StateScema> = {
            loginUser: {
                login: ''
            }
        }
        expect(getLoginStateLogin(state as StateScema)).toEqual('')
    })
})