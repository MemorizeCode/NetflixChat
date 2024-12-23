import { UserSchema } from "./models/types/UserSchema";
import { userReducer, userSlice, userActions } from "./models/slice/userSlice";
import {fetchIsAuth} from "./models/service/isAuth"

import { isAuth } from "./models/selectors/isAuth";
import { isLoadingUser } from "./models/selectors/isLoading";
import { roleUser } from "./models/selectors/roleUser";


export { fetchIsAuth } 
export {userReducer, userSlice, isAuth, isLoadingUser, roleUser, userActions} 
export type { UserSchema } 