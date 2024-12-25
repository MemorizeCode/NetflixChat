
import { AdminPage } from "@/pages/AdminPage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage"
import { NotFoundPage } from "@/pages/NotFounPage";
import { ProfilePage } from "@/pages/ProfilePage"
import { RegisterPage } from "@/pages/RegisterPage";
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = "main",
    LOGIN = "login",
    REGISTER = "register",
    ADMIN = "admin",
    PROFILE = "profile",
    NOT_FOUND = "not_found",
    NOT_FOUNDTWO = "not_found_two"
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
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.NOT_FOUNDTWO]: "*/*"
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.NOT_FOUNDTWO]: {
        path: RoutePath.not_found_two,
        element: <NotFoundPage />,
    },
}
