import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import DataTable from '../../../Components/DataTable/DataTable'
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Categories() {
  const { t } = useTranslation()
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false)

  const showAddCategoryAlert = () => {
    Swal.fire({
      text: t.adminCategories.createdSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
  }

  const showEditCategoryAlert = () => {
    Swal.fire({
      text: t.adminCategories.updatedSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowEditCategoryModal(false)
  }

  const showRemoveCategoryAlert = () => {
    Swal.fire({
      text: t.adminCategories.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminCategories.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  return (
    <>
      <TitlePage title={t.adminCategories.pageTitle} />
      <section className='add-new-category'>
        <AdminPanelTableTitle
          title={t.adminCategories.newCategory}
        >
          <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
            <div>
              <label htmlFor='category-title' className='font-morabba-medium'>{t.adminCategories.titleLabel}</label>
              <input type='text' id='category-title' placeholder={t.adminCategories.titlePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
            </div>
            <div>
              <label htmlFor='category-shortname' className='font-morabba-medium'>{t.adminCategories.shortNameLabel}</label>
              <input type='text' id='category-shortname' placeholder={t.adminCategories.shortNamePlaceholder} className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
            </div>
            <div>
              <label htmlFor='category-image' className='font-morabba-medium'>{t.adminCategories.imageLabel}</label>
              <input type='file' id='category-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
            </div>
            <div className='flex sm:block'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddCategoryAlert}>{t.adminCategories.add}</button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
      <section className='categories-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminCategories.categories}
          isList={true}
        >
          <DataTable
            headerItemCount={3}
            headerItemTitle={[t.adminCategories.titleLabel, t.adminCategories.edit, t.adminCategories.delete]}
            sectionsTableWidth={['w-[inherit]', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40']}
          >
            <tr>
              <td className='w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-[inherit]'>
                Accessories & Equipment
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}>{t.adminCategories.edit}</button>
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}>{t.adminCategories.delete}</button>
              </td>
            </tr>
            <tr>
              <td className='w-14 text-xs'>2</td>
              <td className='line-clamp-2 w-[inherit]'>
                Turkish Coffee
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}>{t.adminCategories.edit}</button>
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}>{t.adminCategories.delete}</button>
              </td>
            </tr>
            <tr>
              <td className='w-14 text-xs'>3</td>
              <td className='line-clamp-2 w-[inherit]'>
                Brewed Coffee & Espresso
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}>{t.adminCategories.edit}</button>
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}>{t.adminCategories.delete}</button>
              </td>
            </tr>
            <tr>
              <td className='w-14 text-xs'>4</td>
              <td className='line-clamp-2 w-[inherit]'>
                Espresso Machine
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}>{t.adminCategories.edit}</button>
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}>{t.adminCategories.delete}</button>
              </td>
            </tr>
            <tr>
              <td className='w-14 text-xs'>5</td>
              <td className='line-clamp-2 w-[inherit]'>
                Coffee Tester Pack
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}>{t.adminCategories.edit}</button>
              </td>
              <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}>{t.adminCategories.delete}</button>
              </td>
            </tr>
          </DataTable>
          <Modal
            showModalState={showEditCategoryModal}
            setShowModalState={setShowEditCategoryModal}
            title={t.adminCategories.edit}
          >
            <form onSubmit={event => event.preventDefault()}>
              <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 gap-4 mb-3'>
                <div className='space-y-1'>
                  <label htmlFor='category-new-title' className='font-morabba-medium'>{t.adminCategories.newTitle}</label>
                  <input type='text' id='category-new-title' placeholder={t.adminCategories.titlePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='category-new-short-name' className='font-morabba-medium'>{t.adminCategories.newShortName}</label>
                  <input type='text' id='category-new-short-name' placeholder={t.adminCategories.shortNamePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='category-new-image' className='font-morabba-medium'>{t.common.categoryImage}</label>
                  <input type='file' id='category-new-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                  <img src='/public/images/categories/category5.png' alt={t.common.categoryImage} className='w-24' />
                </div>
              </div>
              <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                <button className='bg-green-500 hover:bg-green-600' onClick={showEditCategoryAlert}>{t.adminCategories.updateInfo}</button>
                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCategoryModal(false)}>{t.adminCategories.cancel}</button>
              </div>
            </form>
          </Modal>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}
