import { DynamicLoader } from "@/shared/ui/DynamicLoader";
import { ReducersList } from "@/shared/ui/DynamicLoader/ui/DynamicLoader";
import { FormEvent, memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/shared/ui/Input";
import { registerUserActions, registerUserReducer } from "../model/slice/registerSlice";
import { fetchRegister } from "../model/services/fetchRegisterUser";
import { RoutePath } from "@/app/providers/router/config/routeConfig";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingState } from "../model/selectors/getLoadingState";
import { getRegisterStateLogin } from "../model/selectors/getRegisterStateLogin";
import { getRegisterStatePassword } from "../model/selectors/getRegisterStatePassword";
import { getRegisterStateRP } from "../model/selectors/getRegisterStateRP";
// import { getErrorsState } from "../model/selectors/getErrorsState";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";


const RegisterForm = memo(() => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getLoadingState);
  const login = useSelector(getRegisterStateLogin);
  const password = useSelector(getRegisterStatePassword);
  const repeat_password = useSelector(getRegisterStateRP);
  // const error = useSelector(getErrorsState);

  const onChangeLogin = useCallback(
    (e: string) => {
      dispatch(registerUserActions.setLogin(e));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (e: string) => {
      dispatch(registerUserActions.setPassword(e));
    },
    [dispatch]
  );

  const onChangePasswordRepeat = useCallback(
    (e: string) => {
      dispatch(registerUserActions.setRepeatPassword(e));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = await dispatch(
        fetchRegister({ login, password, repeat_password })
      );
      if(response.meta.requestStatus === "fulfilled"){
        navigate(RoutePath.login)
      }
    },
    [dispatch, login, password, repeat_password, navigate]
  );


  const initialReducers: ReducersList = {
    registerUser: registerUserReducer,
  };

  const {t} = useTranslation()

  return (
    <DynamicLoader initialReducers={initialReducers} unmount={true}>
      <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
        <Input
          placeholder={t("loginForm")}
          value={login}
          onChange={(e) => onChangeLogin(e.target.value)}
          typeInput="text"
          size="large"
          className="my-2"
        />
        <Input
          onChange={(e) => onChangePassword(e.target.value)}
          className="my-2"
          placeholder={t("passwordForm")}
          typeInput="password"
          size="large"
          value={password}
        />
        <Input
          onChange={(e) => onChangePasswordRepeat(e.target.value)}
          className={`my-2`}
          size="large"
          typeInput="password"
          placeholder={t("repeatedPasswordForm")}
          value={repeat_password}
        />
        <Button
          className={`mt-2`}
          isLoading={isLoading}
        >
          Регистрация
        </Button>

        <p className="py-8">
          <span className="text-gray-600">Нет акааунта?</span>
          <Link to="/login">Логин</Link>
        </p>
      </form>
    </DynamicLoader>
  );
});

export default RegisterForm;
