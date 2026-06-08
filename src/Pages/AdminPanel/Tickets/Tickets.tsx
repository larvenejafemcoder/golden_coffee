import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Tickets() {
  const { t } = useTranslation()
  const [showTicketDescriptionModal, setShowTicketDescriptionModal] = useState(false)
  const [showTicketReplyModal, setShowTicketReplyModal] = useState(false)
  const [showTicketReplyTextModal, setShowTicketReplyTextModal] = useState(false)

  const showTicketReplyAlert = () => {
    Swal.fire({
      text: t.adminTickets.replySuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowTicketReplyModal(false)
  }

  const showRemoveTicketAlert = () => {
    Swal.fire({
      text: t.adminTickets.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminTickets.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showRemoveTicketReplyAlert = () => {
    Swal.fire({
      text: t.adminTickets.deleteReplyConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminTickets.deleteReplySuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showTicketTopicAlert = () => {
    Swal.fire({
      text: t.adminTickets.ticketText,
      confirmButtonText: t.adminTickets.iSee
    })
  }

  return (
    <>
      <TitlePage title={t.adminTickets.pageTitle} />
      <section className='tickets-container'>
        <AdminPanelTableTitle
          title={t.adminTickets.tickets}
          isList={true}
        >
          <DataTable
            headerItemCount={6}
            headerItemTitle={[t.adminTickets.user, t.adminTickets.phone, t.adminTickets.subject, t.adminTickets.text, t.adminTickets.reply, t.adminTickets.delete]}
            sectionsTableWidth={['w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72', 'w-20 sm:w-20 md:w-24 ipad:w-20 lg:w-28 xl:w-36', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-10 sm:w-10 md:w-14 ipad:w-7 lg:w-14 xl:w-16', 'w-7 sm:w-9 md:w-16 ipad:w-9 lg:w-14 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                Hadi Heidari Azar
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}>{t.adminTickets.replyButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>2</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                Mohsen Golestani
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}>{t.adminTickets.replyButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>3</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                Sara Hosseini
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}>{t.adminTickets.replyButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>4</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                Elnaz Shakeri
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}>{t.adminTickets.replyButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>5</td>
              <td className='line-clamp-2 w-32 sm:w-44 md:w-60 lg:w-64 xl:w-72'>
                Ghadir Yelmeh
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyModal(true)}>{t.adminTickets.replyButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showTicketDescriptionModal}
          setShowModalState={setShowTicketDescriptionModal}
          title={t.adminTickets.ticketText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(false)}>{t.adminTickets.iSee}</button>
          </div>
        </Modal>
        <Modal
          showModalState={showTicketReplyModal}
          setShowModalState={setShowTicketReplyModal}
          title={t.adminTickets.replyToTicket}
        >
          <div className='space-y-2'>
            <div>
              <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder={t.adminTickets.replyPlaceholder}></textarea>
            </div>
            <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showTicketReplyAlert}>{t.adminTickets.sendReply}</button>
              <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowTicketReplyModal(false)}>{t.adminTickets.cancel}</button>
            </div>
          </div>
        </Modal>
      </section>
      <section className='ticket-replies-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminTickets.replies}
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={[t.adminTickets.user, t.adminTickets.subject, t.adminTickets.text, t.adminTickets.reply, t.adminTickets.delete]}
            sectionsTableWidth={['w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-10 sm:w-10 md:w-14 ipad:w-7 lg:w-14 xl:w-16', 'w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16', 'w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketReplyAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>2</td>
              <td className='line-clamp-2 w-36 sm:w-64 md:w-80 lg:w-80 xl:w-80'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showTicketTopicAlert}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketDescriptionModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-12 lg:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(true)}>{t.adminTickets.view}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-11 lg:w-14 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveTicketReplyAlert}>{t.adminTickets.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showTicketReplyTextModal}
          setShowModalState={setShowTicketReplyTextModal}
          title={t.adminTickets.replyText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowTicketReplyTextModal(false)}>{t.adminTickets.iSee}</button>
          </div>
        </Modal>
      </section>
    </>
  )
}
