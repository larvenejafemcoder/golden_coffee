import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Comments() {
  const { t } = useTranslation()
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showCommentReplyModal, setShowCommentReplyModal] = useState(false)
  const [showCommentReplyTextModal, setShowCommentReplyTextModal] = useState(false)
  const [showEditCommentModal, setShowEditCommentModal] = useState(false)

  const showProductAlert = () => {
    Swal.fire({
      text: t.adminComments.commentText,
      confirmButtonText: t.adminComments.iSee
    })
  }

  const showCommentReplyAlert = () => {
    Swal.fire({
      text: t.adminComments.replySuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowCommentReplyModal(false)
  }

  const showEditCommentAlert = () => {
    Swal.fire({
      text: t.adminComments.editSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowEditCommentModal(false)
  }

  const showRemoveCommentAlert = () => {
    Swal.fire({
      text: t.adminComments.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminComments.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showRemoveCommentReplyAlert = () => {
    Swal.fire({
      text: t.adminComments.deleteReplyConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminComments.deleteReplySuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  return (
    <>
      <TitlePage title={t.adminComments.pageTitle} />
      <section className='comments-container'>
        <AdminPanelTableTitle
          title={t.adminComments.comments}
          isList={true}
        >
          <DataTable
            headerItemCount={6}
            headerItemTitle={[t.adminComments.user, t.adminComments.product, t.adminComments.comment, t.adminComments.reply, t.adminComments.edit, t.adminComments.delete]}
            sectionsTableWidth={['w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}>{t.adminComments.replyButton}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}>{t.adminComments.editButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}>{t.adminComments.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                Fatemeh Salimi
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}>{t.adminComments.replyButton}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}>{t.adminComments.editButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}>{t.adminComments.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                Pouria Azizi
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}>{t.adminComments.replyButton}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}>{t.adminComments.editButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}>{t.adminComments.deleteButton}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                Ghadir Yelmeh
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}>{t.adminComments.replyButton}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}>{t.adminComments.editButton}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}>{t.adminComments.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showCommentModal}
          setShowModalState={setShowCommentModal}
          title={t.adminComments.commentText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowCommentModal(false)}>{t.adminComments.iSee}</button>
          </div>
        </Modal>
        <Modal
          showModalState={showCommentReplyModal}
          setShowModalState={setShowCommentReplyModal}
          title={t.adminComments.replyToComment}
        >
          <div className='space-y-2'>
            <div>
              <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder={t.adminComments.replyPlaceholder}></textarea>
            </div>
            <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showCommentReplyAlert}>{t.adminComments.sendReply}</button>
              <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowCommentReplyModal(false)}>{t.adminComments.cancel}</button>
            </div>
          </div>
        </Modal>
        <Modal
          showModalState={showEditCommentModal}
          setShowModalState={setShowEditCommentModal}
          title={t.adminComments.editComment}
        >
          <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 gap-4'>
            <div className='space-y-1'>
              <label htmlFor='comment-new-title' className='font-morabba-medium'>{t.adminComments.newCommentText}</label>
              <textarea id='comment-new-title' placeholder={t.adminComments.newCommentPlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none" rows={6}></textarea>
            </div>
            <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showEditCommentAlert}>{t.adminComments.updateInfo}</button>
              <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCommentModal(false)}>{t.adminComments.cancel}</button>
            </div>
          </form>
        </Modal>
      </section>
      <section className='comment-replies-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminComments.replies}
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={[t.adminComments.user, t.adminComments.product, t.adminComments.comment, t.adminComments.reply, t.adminComments.delete]}
            sectionsTableWidth={['w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                Hadi Heidari Azar
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyTextModal(true)}>{t.adminComments.view}</button>
              </td>
              <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentReplyAlert}>{t.adminComments.deleteButton}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showCommentReplyTextModal}
          setShowModalState={setShowCommentReplyTextModal}
          title={t.adminComments.replyText}
        >
          <div className='space-y-4'>
            <div className='min-h-max max-h-60 overflow-y-auto'>
              <p>
                Hello
                <br />
                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
              </p>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowCommentReplyTextModal(false)}>{t.adminComments.iSee}</button>
          </div>
        </Modal>
      </section>
    </>
  )
}
