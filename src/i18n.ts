import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          search: "Search Here .....",
          profile: "View Profile",
          settings: "Settings",
          logout: "Logout",
          account: "My Account",
          sidebar: {
        dashboard: "Dashboard",
        users: "User Management",
        documents: "Documents Management",
        workflows: "Workflow Builders",
        audit: "Audit Logs",
        settings: "Platform Settings",
        ocr: "OCR Settings"
      }
        },
      },
      ar: {
        translation: {
          search: "ابحث هنا...",
          profile: "عرض الملف الشخصي",
          settings: "الإعدادات",
          logout: "تسجيل الخروج",
          account: "حسابي",
          sidebar: {
        dashboard: "لوحة التحكم",
        users: "إدارة المستخدمين",
        documents: "إدارة الوثائق",
        workflows: "بناة سير العمل",
        audit: "سجلات التدقيق",
        settings: "إعدادات النظام",
        ocr: "إعدادات OCR"
      }
        },
      },
    },
  });

export default i18n;
