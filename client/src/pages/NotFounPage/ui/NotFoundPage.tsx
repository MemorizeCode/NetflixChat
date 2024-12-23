
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";
import { Button } from "@/shared/ui/Button";
const NotFoundPage = () => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.block}`}>
        <h1 className="text-9xl text-center text-white font-extrabold">404</h1>
        <h2 className="text-4xl text-center posit text-white font-extrabold">
          {t("ненайдена")}
        </h2>
        <Button
          className="text-center mt-14"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
