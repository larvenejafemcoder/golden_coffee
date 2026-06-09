import { useLanguage } from '../context/LanguageContext'
import type { Language, Locale } from '../types/locale'

interface UseTranslationReturn {
  t: Locale
  language: Language
  toggleLanguage: () => void
  setLanguage: (language: Language) => void
}

export function useTranslation(): UseTranslationReturn {
  const { t, language, toggleLanguage, setLanguage } = useLanguage()
  return { t, language, toggleLanguage, setLanguage }
}
