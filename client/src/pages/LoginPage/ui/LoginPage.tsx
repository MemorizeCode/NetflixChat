import frame from "@/assets/frame.png";
import { LoginForm } from "@/features/LoginUser";
import { Image } from "@/shared/ui/Image";
import { Loader } from "@/shared/ui/Loader";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold text-center">{t("login")}</h1>
          <Suspense fallback={<Loader/>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
      <Suspense fallback="Loading...">
        <Image url={frame} className="w-full h-auto" />
      </Suspense>
    </div>
  );
};

export default LoginPage;
