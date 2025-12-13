import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// importa os JSONs
import translationPT from './translations/portuguese.json';
import translationEN from './translations/english.json';
import translationES from './translations/spanish.json';
import translationFR from './translations/french.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'pt', // idioma default
    debug: true,       // só durante desenvolvimento
    interpolation: {
        escapeValue: false // react já protege contra XSS
    },
    resources: {
        pt: { translation: translationPT },
        en: { translation: translationEN },
        es: { translation: translationES },
        fr: { translation: translationFR },
    }
});

export default i18n;