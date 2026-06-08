import { Helmet } from 'react-helmet'
import { useTranslation } from '../../hooks/useTranslation'

interface TitlePageProps {
  title: string
}

export default function TitlePage({ title }: TitlePageProps) {
  const { t } = useTranslation()

  return (
    <Helmet>
      <title> {title} - {t.common.siteName} </title>
    </Helmet>
  )
}
