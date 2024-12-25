import i18n from "@/app/config/i18n/i18n";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

export const LanguageDecorator = (story: () => JSX.Element) => {
    return (
        <Suspense fallback={<div>Loading lng...</div>}>
            <I18nextProvider i18n={i18n}>
                {story()}
            </I18nextProvider>
        </Suspense>
    );
};
