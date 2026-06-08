import React, { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import DataTable from '../../../Components/DataTable/DataTable'
import Swal from 'sweetalert2'
import Modal from '../../../Components/Modal/Modal'

export default function Comments() {

    const [showCommentModal, setShowCommentModal] = useState(false)
    const [showCommentReplyModal, setShowCommentReplyModal] = useState(false)
    const [showCommentReplyTextModal, setShowCommentReplyTextModal] = useState(false)
    const [showEditCommentModal, setShowEditCommentModal] = useState(false)

    const showProductAlert = () => {
        Swal.fire({
            text: 'Ben Mano espresso coffee Prisca model 250g',
            confirmButtonText: 'I see'
        })
    }

    const showCommentReplyAlert = () => {
        Swal.fire({
            text: 'Your reply to the comment has been registered successfully',
            icon: 'success',
            confirmButtonText: "Got it!"
        })

        setShowCommentReplyModal(false)
    }

    const showEditCommentAlert = () => {
        Swal.fire({
            text: 'Comment updated successfully',
            icon: 'success',
            confirmButtonText: "Got it!"
        })

        setShowEditCommentModal(false)
    }

    const showRemoveCommentAlert = () => {
        Swal.fire({
            text: 'Are you sure you want to delete this comment?',
            icon: 'question',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'Comment deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Got it!',
                })
            }
        })
    }

    const showRemoveCommentReplyAlert = () => {
        Swal.fire({
            text: 'Are you sure you want to delete this reply?',
            icon: 'question',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No'
        }).then(res => {
            if (res.isConfirmed) {
                Swal.fire({
                    text: 'Reply deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Got it!',
                })
            }
        })
    }

    return (
        <>
            <TitlePage title='Comment Management' />
            <section className='comments-container'>
                <AdminPanelTableTitle
                    title='Comments'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={6}
                        headerItemTitle={['User', "Product", 'Comment', 'Reply', "Edit", 'Delete']}
                        sectionsTableWidth={['w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14']}
                    >
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                Hadi Heidari Azar
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> View </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> Reply </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> Edit </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                Fatemeh Salimi
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> View </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> Reply </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> Edit </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-rose-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                Pouria Azizi
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> View </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> Reply </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> Edit </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> Delete </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='w-12 md:w-14 text-xs text-white bg-green-500'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                Ghadir Yelmeh
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> View </button>
                            </td>
                            <td className='w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyModal(true)}> Reply </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-16 ipad:w-11 lg:w-12 xl:w-14'>
                                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditCommentModal(true)}> Edit </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentAlert}> Delete </button>
                            </td>
                        </tr>
                    </DataTable>
                </AdminPanelTableTitle>

                <Modal
                    showModalState={showCommentModal}
                    setShowModalState={setShowCommentModal}
                    title='Comment Text'
                >
                    <div className='space-y-4'>
                        <div className='min-h-max max-h-60 overflow-y-auto'>
                            <p>
                                Hello
                                <br />
                                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
                            </p>
                        </div>
                        <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowCommentModal(false)}> I see </button>
                    </div>
                </Modal>
                <Modal
                    showModalState={showCommentReplyModal}
                    setShowModalState={setShowCommentReplyModal}
                    title='Reply to Comment'
                >
                    <div className='space-y-2'>
                        <div>
                            <textarea className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none' rows={6} placeholder='Enter your reply text...'></textarea>
                        </div>
                        <div className='flex gap-x-2 child:w-full child:text-white child:p-1 child:rounded child:transition-colors'>
                            <button className='bg-green-500 hover:bg-green-600' onClick={showCommentReplyAlert}> Send Reply </button>
                            <button className='bg-rose-500 hover:bg-rose-600' onClick={() => setShowCommentReplyModal(false)}> Cancel </button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    showModalState={showEditCommentModal}
                    setShowModalState={setShowEditCommentModal}
                    title='Edit Comment'
                >
                    <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 gap-4'>
                        <div className='space-y-1'>
                            <label htmlFor='comment-new-title' className='font-morabba-medium'> New Comment Text </label>
                            <textarea id='comment-new-title' placeholder='Enter new comment text...' className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm resize-none" rows={6}></textarea>
                        </div>
                        <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
                            <button className='bg-green-500 hover:bg-green-600' onClick={showEditCommentAlert}> Update Info </button>
                            <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditCommentModal(false)}> Cancel </button>
                        </div>
                    </form>
                </Modal>
            </section>
            <section className='comment-replies-container mt-8'>
                <AdminPanelTableTitle
                    title='Replies'
                    isList={true}
                >
                    <DataTable
                        headerItemCount={5}
                        headerItemTitle={['User', "Product", 'Comment', 'Reply', 'Delete']}
                        sectionsTableWidth={['w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14', 'w-7 sm:w-10 md:w-14 ipad:w-7 lg:w-12 xl:w-14', 'w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14']}
                    >
                        <tr>
                            <td className='w-12 md:w-14 text-xs'>1</td>
                            <td className='line-clamp-2 w-32 sm:w-48 md:w-72 ipad:60 lg:w-80 xl:w-96'>
                                Hadi Heidari Azar
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showProductAlert}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentModal(true)}> View </button>
                            </td>
                            <td className='w-10 sm:w-12 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowCommentReplyTextModal(true)}> View </button>
                            </td>
                            <td className='w-8 sm:w-10 md:w-14 ipad:w-10 lg:w-12 xl:w-14'>
                                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveCommentReplyAlert}> Delete </button>
                            </td>
                        </tr>
                    </DataTable>
                </AdminPanelTableTitle>

                <Modal
                    showModalState={showCommentReplyTextModal}
                    setShowModalState={setShowCommentReplyTextModal}
                    title='Reply Text'
                >
                    <div className='space-y-4'>
                        <div className='min-h-max max-h-60 overflow-y-auto'>
                            <p>
                                Hello
                                <br />
                                We aim to be a role model for Iranian manufacturers by pioneering the production process, product type and quality, services, and distribution, and to become the reference for coffee culture in Iran. We believe that the opinion of the people of Iran and the region should improve towards Iranian goods, and we strive passionately in this direction.
                            </p>
                        </div>
                        <button className='w-full bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors' onClick={() => setShowCommentReplyTextModal(false)}> I see </button>
                    </div>
                </Modal>
            </section>
        </>
    )
}
