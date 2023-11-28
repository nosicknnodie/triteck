import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ko from "./locales/ko";

const resource = {
  "en-US": en,
  "ko-KR": ko,
};

i18n.use(initReactI18next).init({
  resources: resource,
  // 초기 설정 언어
  lng: "ko-KR",
  fallbackLng: {
    "en-US": ["en-US"],
    default: ["ko-KR"],
  },
  debug: true,
  defaultNS: "lang",
  ns: ["menu", "lang"],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
