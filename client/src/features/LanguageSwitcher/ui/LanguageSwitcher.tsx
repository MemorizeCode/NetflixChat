import { FC } from "react";
import { useTranslation } from "react-i18next";
interface LanguageSwitcherProps {};

const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {

    const { i18n } = useTranslation()

    return (
        <div>
            <button onClick={()=>i18n.changeLanguage('ru')}>RU</button>
            <button onClick={()=>i18n.changeLanguage('en')}>EN</button>
        </div>
    );
}

export default LanguageSwitcher