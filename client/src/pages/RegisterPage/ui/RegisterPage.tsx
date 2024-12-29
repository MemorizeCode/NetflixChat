import { RegisterForm } from "@/features/RegisterUser";
import { Suspense } from "react";
import frame from "@/assets/frame.png"
import { Image } from "@/shared/ui/Image";
import { useTranslation } from "react-i18next";
import { Loader } from "@/widget/Loader";
const RegisterPage = () => {

  const { t } = useTranslation()
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg p-4 sm:p-6 md:p-8">
        <div className="max-w-[320px] mx-auto py-8 sm:py-12 md:py-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            {t("register")}
          </h1>
          <Suspense fallback={<Loader />}>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
      <Suspense fallback="Loading...">
        <Image url={frame} className={`w-full h-auto`} />
      </Suspense>
    </div>
  );
};

export default RegisterPage;
