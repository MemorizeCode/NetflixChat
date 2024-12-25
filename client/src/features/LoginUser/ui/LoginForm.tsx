import { RoutePath } from "@/app/providers/router/config/routeConfig";
import { getErroState, getLoadingState } from "@/features/LoginUser";
import { Button } from "@/shared/ui/Button";
import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { Input } from "@/shared/ui/Input";
import { FormEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLoginStateLogin } from "../models/selectors/getLoginState/getLoginStateLogin";
import { getLoginStatePassword } from "../models/selectors/getPasswordState/getLoginStatePassword";
import { fetchLoginUser } from "../models/service/loginByUser";
import { loginUserActions, loginUserSliceReducer } from "../models/slice/loginUserSlice";


const LoginForm = () => {

    const initialReducers: ReducersList = {
        "loginUser" : loginUserSliceReducer
    }

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(getLoginStateLogin);
    const password = useSelector(getLoginStatePassword);
    const erros = useSelector(getErroState);
    const isLoading = useSelector(getLoadingState);
  
    const onChangeLogin = useCallback(
      (e: string) => {
        dispatch(loginUserActions.setLogin(e));
      },
      [dispatch]
    );
  
    const onChangePassword = useCallback(
      (e: string) => {
        dispatch(loginUserActions.setPassword(e));
      },
      [dispatch]
    );
  
    const handleSubmit = useCallback(
      async (e: FormEvent) => {
        e.preventDefault();
        const result = await dispatch(fetchLoginUser({ login, password }));
        if(result.meta.requestStatus === "fulfilled"){
          navigate(RoutePath.profile);
        }
      },
      [dispatch, login, password, navigate]
    );

    return (
    <DynamicLoader initialReducers={initialReducers} unmount>
      <form className="w-full flex flex-col py-4 " onSubmit={handleSubmit}>
        <Input
          autoFocus={true}
          onChange={(e) => onChangeLogin(e.target.value)}
          className={`my-2`}
          typeInput="text"
          size="large"
          placeholder={t("loginForm")}
          value={login}
        />
        <Input
          onChange={(e) => onChangePassword(e.target.value)}
          className={` p-3 my-2 bg-gray-700 rounded`}
          typeInput="password"
          placeholder={t("passwordForm")}
          value={password}
          size="large"
        />
        <Button
          className={`mt-2`}
          isLoading={isLoading}
        >
          {t("login")}
        </Button>
        {
          erros && <p className="text-red-600">{erros}</p>
        }
        <p className="py-8">
          <span className="text-gray-600">{t("haveAcc")}</span>
          <Link to="/register">{t("register")}</Link>
        </p>
      </form>
    </DynamicLoader>
  );
};

export default LoginForm;
