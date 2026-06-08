import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DataTable from '../../../Components/DataTable/DataTable'
import "./Blogs.css"
import Modal from '../../../Components/Modal/Modal'

export default function Blogs() {

  const [ckeditorValue, setCkeditorValue] = useState("")
  const [showEditBlogModal, setShowEditBlogModal] = useState(false)

  const showAddNewBlogAlert = () => {
    Swal.fire({
      text: 'New blog created successfully',
      icon: 'success',
      confirmButtonText: 'Got it!'
    })
  }

  const showDraftNewBlogAlert = () => {
    Swal.fire({
      text: 'New blog drafted successfully',
      icon: 'success',
      confirmButtonText: 'Got it!'
    })
  }

  const showEditBlogAlert = () => {
    Swal.fire({
      text: 'Blog updated successfully',
      icon: 'success',
      confirmButtonText: 'Got it!'
    })

    setShowEditBlogModal(false)
  }

  const showRemoveBlogAlert = () => {
    Swal.fire({
      text: 'Are you sure you want to delete this blog?',
      icon: 'question',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: 'Blog deleted successfully',
          icon: 'success',
          confirmButtonText: 'Got it!',
        })
      }
    })
  }

  return (
    <>
      <TitlePage title='Blog Management' />
      <section className='add-new-blog'>
        <AdminPanelTableTitle
          title="New Blog"
        >
          <form onSubmit={event => event.preventDefault()}>
            <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
              <div>
                <label htmlFor='blog-title' className='font-morabba-medium'> Title </label>
                <input type='text' id='blog-title' placeholder='Enter title...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
              <div>
                <label htmlFor='blog-shortname' className='font-morabba-medium'> Short Name </label>
                <input type='text' id='blog-shortname' placeholder="Enter short name (e.g., dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
              </div>
              <div>
                <label htmlFor='blog-image' className='font-morabba-medium'> Image </label>
                <input type='file' id='blog-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
              </div>
            </div>
            <div className='space-y-2 my-6'>
              <label htmlFor='blog-content' className='font-morabba-medium'> Content </label>
              <div className='dark:text-white'>
                <CKEditor
                  editor={ClassicEditor}
                  data={ckeditorValue}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setCkeditorValue(data)
                  }}
                />
              </div>
            </div>
            <div className='flex'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddNewBlogAlert}> Add </button>
              <button className='w-max py-1 px-2 h-8 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors ms-2' onClick={showDraftNewBlogAlert}> Draft </button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
      <section className='blogs-container mt-8'>
        <AdminPanelTableTitle
          title='Blogs'
          isList={true}
        >
          <DataTable
            headerItemCount={5}
            headerItemTitle={['Title', 'Author', 'Status', 'Edit', 'Delete']}
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
                Unpublished
              </td>
              <td className='w-10 sm:w-14'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditBlogModal(true)}> Edit </button>
              </td>
              <td className='w-9 sm:w-12'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveBlogAlert}> Delete </button>
              </td>
            </tr>
          </DataTable>

          <Modal
            showModalState={showEditBlogModal}
            setShowModalState={setShowEditBlogModal}
            title='Edit Blog'
          >
            <form onSubmit={event => event.preventDefault()}>
              <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 gap-4 mb-3'>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-title' className='font-morabba-medium'> New Title </label>
                  <input type='text' id='blog-new-title' placeholder='Enter new title...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-short-name' className='font-morabba-medium'> New Short Name </label>
                  <input type='text' id='blog-new-short-name' placeholder='Enter new short name...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='blog-new-image' className='font-morabba-medium'> Image </label>
                  <input type='file' id='blog-new-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                  <img src='/public/images/blogs/blog-1.png' className='w-24' />
                </div>
              </div>
              <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                <button className='bg-green-500 hover:bg-green-600' onClick={showEditBlogAlert}> Update Info </button>
                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditBlogModal(false)}> Cancel </button>
              </div>
            </form>
          </Modal>
        </AdminPanelTableTitle>
      </section>
    </>
  )
}
