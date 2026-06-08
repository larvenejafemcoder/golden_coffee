import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DataTable from '../../../Components/DataTable/DataTable'
import "./Blogs.css"
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Blogs() {
  const { t } = useTranslation()
  const [ckeditorValue, setCkeditorValue] = useState("")
  const [showEditBlogModal, setShowEditBlogModal] = useState(false)

  const showAddNewBlogAlert = () => {
    Swal.fire({
      text: t.adminBlogs.createdSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
  }

  const showDraftNewBlogAlert = () => {
    Swal.fire({
      text: t.adminBlogs.createdSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
  }

  const showEditBlogAlert = () => {
    Swal.fire({
      text: t.adminBlogs.updatedSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowEditBlogModal(false)
  }

  const showRemoveBlogAlert = () => {
    Swal.fire({
      text: t.adminBlogs.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminBlogs.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  return (
    <>
      <TitlePage title={t.adminBlogs.pageTitle} />
      <section className='add-new-blog'>
        <AdminPanelTableTitle
          title={t.adminBlogs.newBlog}
        >
          <form onSubmit={event => event.preventDefault()}>
            <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
              <div>
                <label htmlFor='blog-title' className='font-morabba-medium'>{t.adminBlogs.titleLabel}</label>
                <input type='text' id='blog-title' placeholder={t.adminBlogs.titlePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
              <div>
                <label htmlFor='blog-shortname' className='font-morabba-medium'>{t.adminBlogs.descriptionLabel}</label>
                <input type='text' id='blog-shortname' placeholder={t.adminBlogs.descriptionPlaceholder} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
              </div>
              <div>
                <label htmlFor='blog-image' className='font-morabba-medium'>{t.adminBlogs.imageLabel}</label>
                <input type='file' id='blog-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
              </div>
            </div>
            <div className='space-y-2 my-6'>
              <label htmlFor='blog-content' className='font-morabba-medium'>{t.adminBlogs.descriptionLabel}</label>
              <div className='dark:text-white'>
                <CKEditor
                  editor={ClassicEditor}
                  data={ckeditorValue}
                  onChange={(_event, editor) => {
                    const data = editor.getData();
                    setCkeditorValue(data)
                  }}
                />
              </div>
            </div>
            <div className='flex'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddNewBlogAlert}>{t.adminBlogs.add}</button>
              <button className='w-max py-1 px-2 h-8 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors ms-2' onClick={showDraftNewBlogAlert}>{t.adminBlogs.publish}</button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
      <section className='blogs-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminBlogs.blogs}
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={[t.adminBlogs.title, t.adminBlogs.description, t.adminBlogs.publish, t.adminBlogs.edit, t.adminBlogs.delete]}
            sectionsTableWidth={['w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80', 'w-16 sm:w-20 md:w-32', 'w-12 md:w-20', 'w-10 sm:w-14', 'w-9 sm:w-12']}
          >
            <tr>
              <td className='w-12 text-xs'>1</td>
              <td className='line-clamp-2 w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80'>
                <a href='/blog/coffee' className='hover:text-orange-600 dark:hover:text-orange-300 transition-colors'>
                  Guide to milk frothing without an espresso machine
                </a>
              </td>
              <td className='line-clamp-2 w-16 sm:w-20 md:w-32'>
                Mohammad Amin Saeedi Rad
              </td>
              <td className='line-clamp-2 w-10 sm:w-12 md:w-20'>
                {t.adminBlogs.unpublished}
              </td>
              <td className='w-10 sm:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditBlogModal(true)}>{t.adminBlogs.edit}</button>
              </td>
              <td className='w-9 sm:w-12'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveBlogAlert}>{t.adminBlogs.delete}</button>
              </td>
            </tr>
          </DataTable>

          <Modal
            showModalState={showEditBlogModal}
            setShowModalState={setShowEditBlogModal}
            title={t.adminBlogs.edit}
          >
            <form onSubmit={event => event.preventDefault()}>
              <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 gap-4 mb-3'>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-title' className='font-morabba-medium'>{t.adminBlogs.newTitle}</label>
                  <input type='text' id='blog-new-title' placeholder={t.adminBlogs.titlePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-short-name' className='font-morabba-medium'>{t.adminBlogs.newDescription}</label>
                  <input type='text' id='blog-new-short-name' placeholder={t.adminBlogs.descriptionPlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-image' className='font-morabba-medium'>{t.common.blogImage}</label>
                  <input type='file' id='blog-new-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                  <img src='/public/images/blogs/blog-1.png' alt={t.common.blogImage} className='w-24' />
                </div>
              </div>
              <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                <button className='bg-green-500 hover:bg-green-600' onClick={showEditBlogAlert}>{t.adminBlogs.updateInfo}</button>
                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditBlogModal(false)}>{t.adminBlogs.cancel}</button>
              </div>
            </form>
          </Modal>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}
