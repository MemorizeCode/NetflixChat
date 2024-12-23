import { KEY_ACCESS, KEY_REFRESH } from "@/shared/const/localStorage/localStorage";
import axios, { AxiosResponse } from "axios";
// alert(env)

const $api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  // headers:{
  //     "Content-Type": "application/json",
  // },
  // timeout:3000
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem(KEY_ACCESS);
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<AxiosResponse, any>(
          import.meta.env.VITE_BACKEND_API + "auth/refresh",
          {
            token: localStorage.getItem(KEY_REFRESH),
          }
        );
        if (response.status === 200) {
          console.log("Генерация токенов или проверка user успешна");
        } else {
          console.log("Ошибка авторизации");
        }
        localStorage.setItem(KEY_ACCESS, response?.data.accesToken);
        localStorage.setItem(KEY_REFRESH, response?.data.refreshToken); //Тут надо как-бы в куки, но мне проще дебажить так
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Сработал config");
      }
    }
    return err.response;
  }
);

export default $api;
