import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Help: 'Help',
          Marketplace: 'Marketplace',
          Logout: 'Logout',
          Password: 'Password',
          'Sign In': 'Sign In',
          'Signing In': 'Signing In',
          Confirm: 'Confirm',
          'Select Rating': 'Select Rating',
          Email: 'Email',
          'Write Here': 'Write Here',
          Loading: 'Loading',
          'How to Log In': 'How to Log In',
          'To log into the app one user was made': 'To log into the app one user was made',
          USER: 'USER',
          PASSWORD: 'PASSWORD',
          'How to get loans average': 'How to get loans average',
          'Log into the app, then click on the button and wait': 'Log into the app, then click on the button and wait',
          Beware: 'Beware',
          'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.':
            'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.',
          'Please be sure to not use them, otherwise strange behavior may occur.':
            'Please be sure to not use them, otherwise strange behavior may occur.',
        },
        BETrans: {
          "passwords don't match (ಠ_ಠ)": "passwords don't match (ಠ_ಠ)",
          "user doesn't exist t(-.-t)": "user doesn't exist t(-.-t)",
          Problem: 'Problem',
        },
      },
      sk: {
        translations: {
          Help: 'Pomoc',
          Marketplace: 'Tržisko',
          Logout: 'Odhlásiť',
          Password: 'Heslo',
          'Sign In': 'Prihlásiť sa',
          'Signing In': 'Prihlasujem',
          Email: 'Email',
          'Write Here': 'Píšte sem',
          Loading: 'Nahrávam',
          Confirm: 'Potvrď',
          'Select Rating': 'Zvoľ rating',
          'How to Log In': 'Ako sa prihlásiť',
          'To log into the app one user was made': 'Pre účely aplikácie bol vytvorený jeden používateľ',
          USER: 'POUŽÍVATEĽ',
          PASSWORD: 'HESLO',
          'How to get loans average': 'Ako dostať priemer pôžičok',
          'Log into the app, then click on the button and wait':
            'Prihláste sa do aplikácie, kliknite na tlačítko a čakajte',
          Beware: 'Upozornenie',
          'Some plugins doing grammar corrections (like Grammarly) may cause app disfunction.':
            'Niektoré pluginy slúžiace na kontrolu pravopisu (napr. Grammarly), môžu spôsobovať problémy.',
          'Please be sure to not use them, otherwise strange behavior may occur.':
            'Aby ste predišli divnému chovaniu aplikácie, uistite sa, že ich nepoužívate.',
        },
        BETrans: {
          "passwords don't match (ಠ_ಠ)": 'heslo nesedí (ಠ_ಠ)',
          "user doesn't exist t(-.-t)": 'užívateľ neexistuje t(-.-t)',
          Problem: 'Problém',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
