import { StateScema } from "@/app/providers/store/config/StateSchema"
import { DeepPartial } from "@/global"
import { roleUser } from "./roleUser"


//ТЕСТ ПАДАЕТ СО СТРАНИЦЕЙ Not_Found КАВО???
// import { ROLES } from "@/app/providers/router/config/routeConfig"



describe("roleUser", () => {
    test("roleUser is ADMIN", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                roles: "ADMIN"
            }
        }
        expect(roleUser(state as StateScema)).toEqual("ADMIN")
    })

    test("roleUser is ADMIN", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                roles: "USER"
            }
        }
        expect(roleUser(state as StateScema)).toEqual("USER")
    })

    test("roleUser is empty", () => {
        const state: DeepPartial<StateScema> = {
            user: {
                roles: ""
            }
        }
        expect(roleUser(state as StateScema)).toEqual("")
    })
})