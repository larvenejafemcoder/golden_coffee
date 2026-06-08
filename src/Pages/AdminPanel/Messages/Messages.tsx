import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Messages() {
  const { t } = useTranslation()
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [showMessageReplyModal, setShowMessageReplyModal] = useState(false)
  const [showMessageReplyTextModal, setShowMessageReplyTextModal] = useState(false)

  const showRemoveMessageAlert = () => {
    Swal.fire({
      text: t.adminMessages.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminMessages.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showRemoveMessageReplyAlert = () => {
    Swal.fire({
      text: t.adminMessages.deleteReplyConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminMessages.deleteReplySuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showMessageReplyAlert = () => {
    Swal.fire({
      text: t.adminMessages.replySuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt,
    })
    setShowMessageReplyModal(false)
  }

  return (
    <>
      <TitlePage title={t.adminMessages.pageTitle} />
      <section className='messages-container'>
        <AdminPanelTableTitle
          title={t.adminMessages.messages}
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={[t.adminMessages.name, t.adminMessages.phone, t.adminMessages.message, t.adminMessages.reply, t.adminMessages.delete]}
            sectionsTableWidth={['w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96', 'w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14', 'w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                Hadi Heidari Azar
              </td>
              <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}>{t.adminMessages.replyButton}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>2</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                Ghadir Yelmeh
              </td>
              <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}>{t.adminMessages.replyButton}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>2</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96'>
                Mohammad Amin Saeedi Rad
              </td>
              <td className='line-clamp-2 w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyModal(true)}>{t.adminMessages.replyButton}</button>
              </td>
              <td className='w-10 sm:w-10 md:w-14 ipad:w-12 lg:w-10 xl:w-12'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showMessageModal}
          setShowModalState={setShowMessageModal}
          title={t.adminMessages.messageText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowMessageModal(false)}>{t.adminMessages.iSee}</button>
          </div>
        </Modal>
        <Modal
          showModalState={showMessageReplyModal}
          setShowModalState={setShowMessageReplyModal}
          title={t.adminMessages.replyToMessage}
        >
          <div className='space-y-2'>
            <div>
              <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder={t.adminMessages.replyPlaceholder}></textarea>
            </div>
            <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showMessageReplyAlert}>{t.adminMessages.sendReply}</button>
              <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowMessageReplyModal(false)}>{t.adminMessages.cancel}</button>
            </div>
          </div>
        </Modal>
      </section>
      <section className='message-replies-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminMessages.replies}
          isList={true}
        >
          <DataTable
            headerItemCount={4}
            headerItemTitle={[t.adminMessages.name, t.adminMessages.message, t.adminMessages.reply, t.adminMessages.delete]}
            sectionsTableWidth={['w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]', 'w-10 sm:w-12 lg:w-16 xl:w-20', 'w-10 sm:w-12 lg:w-16 xl:w-20', 'w-9 sm:w-12 lg:w-16 xl:w-20']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>2</td>
              <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>3</td>
              <td className='line-clamp-2 w-52 sm:w-72 md:w-80 ipad:w-80 xl:w-[450px]'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-10 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(true)}>{t.adminMessages.view}</button>
              </td>
              <td className='w-9 sm:w-12 lg:w-16 xl:w-20'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveMessageReplyAlert}>{t.adminMessages.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showMessageReplyTextModal}
          setShowModalState={setShowMessageReplyTextModal}
          title={t.adminMessages.replyText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowMessageReplyTextModal(false)}>{t.adminMessages.iSee}</button>
          </div>
        </Modal>
      </section>
    </>
  )
}
