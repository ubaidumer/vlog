import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import locI18next from "loc-i18next";
import translationUrdu from "./translationUrdu.json";
i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Introduction: "Introduction",
        "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
          "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop",
        "Plugins to detect the user language":
          "Plugins to detect the user language",
        "Plugins to load translations": "Plugins to load translations",
        "Optionally cache the translations":
          "Optionally cache the translations",
        Advantages: "Advantages",
        "Flexibility to use other packages": "Flexibility to use other packages"
      }
    },
    jap: {
      translations: {
        Introduction: "前書き",
        "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
          "Webからモバイルとデスクトップに製品をローカライズするための完全なソリューションを提供する国際化フレームワークです",
        "Plugins to detect the user language":
          "ユーザー言語を検出するためのプラグイン",
        "Plugins to load translations": "翻訳をロードするためのプラグイン",
        "Optionally cache the translations": "必要に応じて翻訳をキャッシュする",
        Advantages: "利点",
        "Flexibility to use other packages": "他のパッケージを使用する柔軟性"
      }
    },

    nl: {
      translations: translationUrdu
    },

    ger: {
      translations: {
        Introduction: "Einführung",
        "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
          "ist ein Internationalisierungs-Framework, das eine Komplettlösung für die Lokalisierung Ihres Produkts vom Web auf das Handy und den Desktop bietet",
        "Plugins to detect the user language":
          "Plugins zur Erkennung der Benutzersprache",
        "Plugins to load translations": "Plugins zum Laden von Übersetzungen",
        "Optionally cache the translations":
          "Optional die Übersetzungen zwischenspeichern",
        Advantages: "Vorteile",
        "Flexibility to use other packages":
          "Flexibilität zur Verwendung anderer Pakete"
      }
    },
    fre: {
      translations: {
        Introduction: "Introduction",
        "is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop":
          "est un cadre d'internationalisation qui offre une solution complète pour localiser votre produit du Web au mobile et au bureau",
        "Plugins to detect the user language":
          "Plugins pour détecter la langue de l'utilisateur",
        "Plugins to load translations": "Plugins pour charger les traductions",
        "Optionally cache the translations":
          "Cachez éventuellement les traductions",
        Advantages: "Les avantages",
        "Flexibility to use other packages":
          "Flexibilité d'utiliser d'autres packages"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
