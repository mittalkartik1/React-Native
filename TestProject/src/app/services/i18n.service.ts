import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enResources from '../locales/en/translation.json';

export async function initLocalTranslations() {
  i18next
    .createInstance()
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      keySeparator: '.',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: true,
      },
      lng: 'en',
      ns: ['common'],
      resources: {
        en: {
          common: enResources,
        },
      },
    });
}

export const translate = (key: string, params: Array<number | string> = []) => {
  return i18next.t(key, params);
};
