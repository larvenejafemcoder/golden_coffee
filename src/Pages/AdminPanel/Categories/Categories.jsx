import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import DataTable from '../../../Components/DataTable/DataTable'
import Modal from '../../../Components/Modal/Modal'

export default function Categories() {

    const [showEditCategoryModal, setShowEditCategoryModal] = useState(false)

    const showAddCategoryAlert = () => {
        Swal.fire({
            text: 'New category created successfully',
            icon: 'success',
            confirmButtonText: 'Got it!'
        })
    }

    const showEditCategoryAlert = () => {
        Swal.fire({
            text: 'Category updated successfully',
            icon: 'success',
            confirmButtonText: 'Got it!'
        })

        setShowEditCategoryModal(false)
    }

    const showRemoveCategoryAlert = () => {
        Swal.fire({
            text: 'Are you sure you want to delete this category?',
            icon: 'question',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'Category deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Got it!',
                })
            }
        })
    }

    return (
        <>
            <TitlePage title="Category Management" />
            <section className='add-new-category'>
                <AdminPanelTableTitle
                    title="New Category"
                >
                    <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
                        <div>
                            <label htmlFor='category-title' className='font-morabba-medium'> Title </label>
                            <input type='text' id='category-title' placeholder='Enter title...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                        </div>
                        <div>
                            <label htmlFor='category-shortname' className='font-morabba-medium'> Short Name </label>
                            <input type='text' id='category-shortname' placeholder="Enter short name (e.g., dress-gray)" className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
                        </div>
                        <div>
                            <label htmlFor='category-image' className='font-morabba-medium'> Image </label>
                            <input type='file' id='category-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                        </div>
                        <div className='flex sm:block'>
                            <br className='invisible' />
                            <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddCategoryAlert}> Add </button>
                        </div>
                    </form>
                </AdminPanelTableTitle>
            </section>
            <section className='categories-container mt-8'>
                <AdminPanelTableTitle
                    title='Categories'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={3}
                        headerItemTitle={['Title', 'Edit', 'Delete']}
                        sectionsTableWidth={['w-[inherit]', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40', 'w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40']}
                    >
                        <tr>
                            <td className='w-14 text-xs'>1</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                Accessories & Equipment
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> Edit </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>2</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                Turkish Coffee
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> Edit </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>3</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                Brewed Coffee & Espresso
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> Edit </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>4</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                Espresso Machine
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> Edit </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-14 text-xs'>5</td>
                            <td className='line-clamp-2 w-[inherit]'>
                                Coffee Tester Pack
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={() => setShowEditCategoryModal(true)}> Edit </button>
                            </td>
                            <td className='w-20 sm:w-27 md:w-[135px] ipad:w-24 lg:w-32 xl:w-40'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-2 py-1.5 rounded transition-colors' onClick={showRemoveCategoryAlert}> Delete </button>
                            </td>
                        </tr>
                    </DataTable>
                    <Modal
                        showModalState={showEditCategoryModal}
                        setShowModalState={setShowEditCategoryModal}
                        title='Edit Category'
                    >
                        <form onSubmit={event => event.preventDefault()}>
                            <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 gap-4 mb-3'>
                                <div className='space-y-1'>
                                    <label htmlFor='category-new-title' className='font-morabba-medium'> New Title </label>
                                    <input type='text' id='category-new-title' placeholder='Enter new title...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor='category-new-short-name' className='font-morabba-medium'> New Short Name </label>
                                    <input type='text' id='category-new-short-name' placeholder='Enter new short name...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor='category-new-image' className='font-morabba-medium'> Image </label>
                                    <input type='file' id='category-new-image' accept='image/*' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none dark:text-white border text-sm' />
                                    <img src='/public/images/categories/category5.png' className='w-24' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                                <button className='bg-green-500 hover:bg-green-600' onClick={showEditCategoryAlert}> Update Info </button>
                                <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCategoryModal(false)}> Cancel </button>
                            </div>
                        </form>
                    </Modal>
                </AdminPanelTableTitle>
            </section>
        </>
    )
}
