import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { Language, Locale } from '../types/locale'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

const LOCALE_MAP: Record<Language, Locale> = { en, ja }

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Locale
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language') as Language | null
    return stored === 'en' || stored === 'ja' ? stored : 'ja'
  })

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.lang = newLanguage
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ja' : 'en')
  }, [language, setLanguage])

  const t = LOCALE_MAP[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
