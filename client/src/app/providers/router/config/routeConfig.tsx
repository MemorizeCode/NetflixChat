
import { AdminPage } from "@/pages/AdminPage";
import { CreateRoomPage } from "@/pages/CreateRoomPage";
import { CurrentMoviePage } from "@/pages/CurrentMoviePage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
// import { MainPage } from "@/pages/MainPage"
import { NotFoundPage } from "@/pages/NotFounPage";
import { ProfilePage } from "@/pages/ProfilePage"
import { RegisterPage } from "@/pages/RegisterPage";
import { RoomPage } from "@/pages/Room";
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = "main",
    LOGIN = "login",
    REGISTER = "register",
    ADMIN = "admin",
    PROFILE = "profile",
    CURRENT_MOVIE = "current_movie",
    CREATE_ROOM = "create_room",
    ROOM = "room",
    NOT_FOUND = "not_found",
}


export enum ROLES {
    ADMIN = "ADMIN",
    USER = "USER"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTER]: "/register",
    [AppRoutes.ADMIN]: "/admin",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.CURRENT_MOVIE]: "/movie/:id",
    [AppRoutes.CREATE_ROOM]: "/createRoom/:id",
    [AppRoutes.ROOM]: "/room/:id",
    [AppRoutes.NOT_FOUND]: "*",
}

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: string[];
  };

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <RegisterPage />
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        authOnly: true,
        roles: [ROLES.ADMIN],
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
        roles: [ROLES.ADMIN, ROLES.USER],
    },
    [AppRoutes.CURRENT_MOVIE]:{
        path: RoutePath.current_movie,
        element: <CurrentMoviePage />,
    },
    [AppRoutes.CREATE_ROOM]:{
        path: RoutePath.create_room,
        element: <CreateRoomPage />,
        authOnly: true,
        roles: [ROLES.ADMIN, ROLES.USER],
    },
    [AppRoutes.ROOM]:{
        path: RoutePath.room,
        element: <RoomPage />,
        authOnly: true,
        roles: [ROLES.ADMIN, ROLES.USER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    }
}
