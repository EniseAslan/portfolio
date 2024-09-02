import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Contact Form": "Contact Form",
      "Full Name": "Full Name",
      "Email Address": "Email Address",
      "Your Message": "Your Message",
      "Country": "Country",
      "Send Message": "Send Message",
      "Enter your email": "Enter your email",
      "Enter your name":"Enter your name",
      "Enter your message":"Enter your message",
      "This field is required": "This field is required",
      "Message must be at least 20 characters long": "Message must be at least 20 characters long",
      "Select a country": "Select a country",
    }
  },
  tr: {
    translation: {
      "Contact Form": "İletişim Formu",
      "Full Name": "Ad Soyad",
      "Email Address": "E-posta Adresi",
      "Your Message": "Mesajınız",
      "Enter your email": "Email adresi giriniz",
      "Enter your name":"İsminizi giriniz",
      "Enter your message": "Mesajınızı giriniz",
      "Country": "Ülke",
      "Send Message": "Mesaj Gönder",
      "This field is required": "Bu alan gereklidir",
      "Message must be at least 20 characters long": "Mesaj en az 20 karakter uzunluğunda olmalıdır",
      "Select a country": "Bir ülke seçin",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
