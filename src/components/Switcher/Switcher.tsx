import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Switcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState("en-US");

  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  }

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");

    if (lang) {
      changeLang(lang);
    } else {
      changeLang("en-US");
    }
  }, []);

  return (
    <div className={`z-10`}>
      <span
        onClick={() => changeLang("ru")}
        className={`${
          selectedLang === "ru" ? `text-primary` : ""
        } mr-4 font-medium font-Involve cursor-pointer transition-opacity duration-500 hover:opacity-70`}
      >
        {t("rus")}
      </span>
      <span
        onClick={() => changeLang("en-US")}
        className={`${
          selectedLang === "en-US" ? `text-primary` : ""
        }  font-medium font-Involve cursor-pointer transition-opacity duration-500 hover:opacity-70`}
      >
        {t("eng")}
      </span>
    </div>
  );
};
