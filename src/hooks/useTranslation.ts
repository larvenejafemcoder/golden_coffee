import { useLanguage } from '../context/LanguageContext'

export function useTranslation() {
  const { t, language, toggleLanguage, setLanguage } = useLanguage()
  return { t, language, toggleLanguage, setLanguage }
}
