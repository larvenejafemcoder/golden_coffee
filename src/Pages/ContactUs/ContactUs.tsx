import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Swal from 'sweetalert2'
import { useTranslation } from '../../hooks/useTranslation'

export default function ContactUs() {
  const { t } = useTranslation()

  const showAlert = () => {
    Swal.fire({
      text: t.contactUs.submitButton,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
  }

  return (
    <>
      <TitlePage title={t.contactUs.pageTitle} />
      <Header />
      <section className='contact-us'>
        <div className="container flex flex-col items-center mt-28 md:mt-48 mb-20">
          <div className="space-y-10 max-w-2xl">
            <div>
              <img loading="lazy" src="/images/blogs/contact.png" alt="お問い合わせ画像" className='mx-auto' />
            </div>
            <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6 md:p-8">
              <h3 className='text-black dark:text-white text-2xl xs:text-3xl font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300 pb-1'>{t.contactUs.missionTitle}</h3>
              <p className='mt-5 leading-relaxed'>
                {t.contactUs.missionText1}
                <br /><br />
                {t.contactUs.missionText2}
              </p>
            </div>
            <div>
              <h3 className='text-black dark:text-white text-center text-2xl xs:text-3xl font-dana-bold tracking-tighter'>{t.contactUs.formTitle}</h3>
              <p className='text-base xs:text-lg sm:text-xl mt-4 font-dana-medium text-zinc-500 dark:text-gray-400 text-center'>
                技術的な問題、コラボレーション、その他お問い合わせは、以下のフォームからご連絡ください。
              </p>
            </div>
            <div>
              <form className='space-y-3' onSubmit={(event) => event.preventDefault()}>
                <div className='space-y-2'>
                  <label htmlFor="name" className='text-black dark:text-white text-sm xs:text-base'>{t.contactUs.nameLabel}</label>
                  <input type="text" placeholder={t.contactUs.namePlaceholder} id='name' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="user-tel" className='text-black dark:text-white text-sm xs:text-base'> Phone Number <span className='text-xs'>|</span> 電話番号 </label>
                  <input type="tel" placeholder='e.g. 09123456789' id='user-tel' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="user-email" className='text-black dark:text-white text-sm xs:text-base'>{t.contactUs.emailLabel}</label>
                  <input type="email" placeholder={t.contactUs.emailPlaceholder} id='user-email' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="user-message" className='text-black dark:text-white text-sm xs:text-base'>{t.contactUs.messageLabel}</label>
                  <textarea rows={5} placeholder={t.contactUs.messagePlaceholder} id='user-message' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base resize-none' />
                </div>
                <button className='bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 transition-colors' onClick={showAlert}>
                  {t.contactUs.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
