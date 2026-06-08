import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  const router = useRoutes(routes)
  return (
    <LanguageProvider>
      {router}
    </LanguageProvider>
  )
}
