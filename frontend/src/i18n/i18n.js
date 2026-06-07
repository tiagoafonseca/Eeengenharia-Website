import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPT from './locales/pt.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'pt',
    debug: import.meta.env.DEV,
    interpolation: { escapeValue: false },
    resources: {
        pt: { translation: translationPT },
        en: { translation: translationEN },
        es: { translation: translationES },
        fr: { translation: translationFR },
    },
});

export default i18n;
