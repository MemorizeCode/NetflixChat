import { ROLES } from "@/app/providers/router";
import { isAuth, roleUser, userActions } from "@/entities/User";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { Button } from "@/shared/ui/Button";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
const NavBar = memo(() => {
  const dispatch = useDispatch()
  const handleLogout = useCallback(() => {
    
    dispatch(userActions.setLogOut())
  }, [dispatch]);

  const auth = useSelector(isAuth);
  const role = useSelector(roleUser)
  const { t } = useTranslation();
  return (
    <div className={` flex items-center justify-between p-4 z-[100] w-full`}>
      <Link to="/">
        <h1 className={`text-4xl font-bold cursor-pointer ${styles.logo}`}>Hooli</h1>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="mr-5">
            <LanguageSwitcher />
          </div>
        </div>
        {
          role === ROLES.ADMIN && (
            <Link to="/admin" className="mr-5">
              <Button>{t("admin_panel")}</Button>
            </Link>
          )
        }
        {auth ? (
          <div>
            <Link to="/profile">
              <button className="text-white pr-4 transition ease-in-out delay-150 hover:text-emerald-500 duration-300">
                {t("account")}
              </button>
            </Link>
            <Button
              onClick={handleLogout}
              className={` px-6 py-2 rounded cursor-pointer text-white transition ease-in-out delay-150 hover:bg-red-950 duration-300`}
            >
              {t("vixod")}
            </Button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4">
                <p>{t("login")}</p>
              </button>
            </Link>
            <Link to="/register">
              <Button>{t("register")}</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default NavBar;
