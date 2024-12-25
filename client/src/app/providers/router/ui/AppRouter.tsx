import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps, routeConfig } from "../config/routeConfig";
import PrivateRouter from "./PrivateRouter";
import { PageLoader } from "@/widget/PageLoader";


const AppRouter = () => {
  const renderWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader/>}>{route.element}</Suspense>
    );

    return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.authOnly ? (
              <PrivateRouter roles={route.roles}>{element}</PrivateRouter>
            ) : (
              element
            )
          }
        ></Route>
      );

  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWrapper)}</Routes>;
};

export default AppRouter;
