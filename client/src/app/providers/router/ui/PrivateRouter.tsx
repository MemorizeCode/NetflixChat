import { ReactNode, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { RoutePath } from "../config/routeConfig";
import { useSelector } from "react-redux";
import { isAuth, isLoadingUser, roleUser } from "@/entities/User";

interface PrivateRouterProps {
  children: ReactNode;
  roles: string[] | undefined;
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const { roles, children } = props;

  const auth = useSelector(isAuth);
  const isLoading = useSelector(isLoadingUser);
  const role = useSelector(roleUser)

  const hasRole = useMemo(() => {
    if (!roles) {
      return false;
    }
    return roles.some((requiredRole: string) => {
      const hasRole = role?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, role]);

  if (isLoading) {
    return null;
  }

  if (!auth) {
    return <Navigate to={RoutePath.login} replace />;
  }

  if (!hasRole) {
    return <Navigate to={RoutePath.main} replace />;
  }
  return children;
};

export default PrivateRouter;
