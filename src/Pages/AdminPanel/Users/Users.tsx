import { useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import AdminPanelTableTitle from '../../../Components/AdminPanelTableTitle/AdminPanelTableTitle'
import Swal from 'sweetalert2'
import DataTable from '../../../Components/DataTable/DataTable'
import Modal from '../../../Components/Modal/Modal'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Users() {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const [showEditUserModal, setShowEditUserModal] = useState(false)

  const showAddNewUserAlert = () => {
    Swal.fire({
      text: t.adminUsers.createdSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
  }

  const showEditUserAlert = () => {
    Swal.fire({
      text: t.adminUsers.updatedSuccess,
      icon: 'success',
      confirmButtonText: t.common.gotIt
    })
    setShowEditUserModal(false)
  }

  const showBanUserAlert = () => {
    Swal.fire({
      text: t.adminUsers.banConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminUsers.banSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt
        })
      }
    })
  }

  const showRemoveUserAlert = () => {
    Swal.fire({
      text: t.adminUsers.deleteConfirm,
      icon: 'question',
      confirmButtonText: t.common.yes,
      showCancelButton: true,
      cancelButtonText: t.common.no
    }).then(res => {
      if (res.isConfirmed) {
        Swal.fire({
          text: t.adminUsers.deleteSuccess,
          icon: 'success',
          confirmButtonText: t.common.gotIt,
        })
      }
    })
  }

  const showChangeAccessAlert = (type: string) => {
    if (type.toLocaleLowerCase() === 'admin') {
      Swal.fire({
        text: t.adminUsers.promoteConfirm,
        icon: 'question',
        confirmButtonText: t.common.yes,
        showCancelButton: true,
        cancelButtonText: t.common.no
      }).then(res => {
        if (res.isConfirmed) {
          Swal.fire({
            text: t.adminUsers.promoteSuccess,
            icon: 'success',
            confirmButtonText: t.common.gotIt,
          })
        }
      })
    } else {
      Swal.fire({
        text: t.adminUsers.demoteConfirm,
        icon: 'question',
        confirmButtonText: t.common.yes,
        showCancelButton: true,
        cancelButtonText: t.common.no
      }).then(res => {
        if (res.isConfirmed) {
          Swal.fire({
            text: t.adminUsers.demoteSuccess,
            icon: 'success',
            confirmButtonText: t.common.gotIt,
          })
        }
      })
    }
  }

  return (
    <>
      <TitlePage title={t.adminUsers.pageTitle} />
      <section className='add-new-user'>
        <AdminPanelTableTitle
          title={t.adminUsers.newUser}
        >
          <form onSubmit={event => event.preventDefault()} className='grid items-center grid-cols-1 sm:grid-cols-2 gap-6 child:space-y-2'>
            <div>
              <label htmlFor="fullName" className='font-morabba-medium'>{t.adminUsers.nameLabel}</label>
              <input type="text" placeholder='Hadi Heidari Azar' id='fullName' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
            </div>
            <div>
              <label htmlFor="user-name" className='font-morabba-medium'>{t.adminUsers.usernameLabel}</label>
              <input type="text" placeholder='hadiheidariazar' id='user-name' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
            </div>
            <div>
              <label htmlFor="user-tel" className='font-morabba-medium'>{t.adminUsers.phoneLabel}</label>
              <input type="tel" placeholder='09123456789' id='user-tel' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm text-right' />
            </div>
            <div>
              <label htmlFor="user-email" className='font-morabba-medium'>{t.adminUsers.emailLabel}</label>
              <input type="email" placeholder='name@company.com' id='user-email' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
            </div>
            <div className='relative'>
              <label htmlFor="user-password" className='font-morabba-medium'>{t.adminUsers.passwordLabel}</label>
              <input type={showPassword ? "text" : "password"} placeholder='••••••••' id='user-password' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm' />
              <div className='inline'>
                <div onClick={() => setShowPassword(!showPassword)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 absolute left-3 top-[61%] cursor-pointer text-gray-800 dark:text-gray-100">
                    {
                      showPassword ? (
                        <>
                          <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                        </>
                      ) : (
                        <>
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </>
                      )
                    }
                  </svg>
                </div>
              </div>
            </div>
            <div className='flex sm:block'>
              <br className='invisible' />
              <button className='w-max py-1 px-2 h-8 rounded bg-green-500 text-white hover:bg-green-600 transition-colors' onClick={showAddNewUserAlert}>{t.adminUsers.add}</button>
            </div>
          </form>
        </AdminPanelTableTitle>
      </section>
      <section className='users-container mt-8'>
        <AdminPanelTableTitle
          title={t.adminUsers.users}
          isList={true}
        >
          <DataTable
            headerItemCount={6}
            headerItemTitle={[t.adminUsers.name, t.adminUsers.phone, t.adminUsers.edit, t.adminUsers.roleUpgrade, t.adminUsers.delete, t.adminUsers.banAction]}
            sectionsTableWidth={['w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72', 'w-20 sm:w-24 lg:w-28 xl:w-36', 'w-10 sm:w-12 md:w-14 xl:w-16', 'w-[69px] sm:w-20', 'w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14', 'w-5 sm:w-7']}
          >
            <tr>
              <td className='w-12 md:w-14 text-xs'>1</td>
              <td className='line-clamp-2 w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72'>
                Hadi Heidari Azar
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditUserModal(true)}>{t.adminUsers.edit}</button>
              </td>
              <td className='w-[69px] sm:w-20'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => showChangeAccessAlert('user')}>{t.adminUsers.demoteToUser}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveUserAlert}>{t.adminUsers.delete}</button>
              </td>
              <td className='w-5 sm:w-7'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showBanUserAlert}>{t.adminUsers.ban}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>2</td>
              <td className='line-clamp-2 w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72'>
                Fatemeh Mohammadi
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditUserModal(true)}>{t.adminUsers.edit}</button>
              </td>
              <td className='w-[69px] sm:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => showChangeAccessAlert('admin')}>{t.adminUsers.promoteToAdmin}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveUserAlert}>{t.adminUsers.delete}</button>
              </td>
              <td className='w-5 sm:w-7'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showBanUserAlert}>{t.adminUsers.ban}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>3</td>
              <td className='line-clamp-2 w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72'>
                Pouria Azizi
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditUserModal(true)}>{t.adminUsers.edit}</button>
              </td>
              <td className='w-[69px] sm:w-20'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => showChangeAccessAlert('user')}>{t.adminUsers.demoteToUser}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveUserAlert}>{t.adminUsers.delete}</button>
              </td>
              <td className='w-5 sm:w-7'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showBanUserAlert}>{t.adminUsers.ban}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>4</td>
              <td className='line-clamp-2 w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72'>
                Ghadir Yelmeh
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditUserModal(true)}>{t.adminUsers.edit}</button>
              </td>
              <td className='w-[69px] sm:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => showChangeAccessAlert('admin')}>{t.adminUsers.promoteToAdmin}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveUserAlert}>{t.adminUsers.delete}</button>
              </td>
              <td className='w-5 sm:w-7'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showBanUserAlert}>{t.adminUsers.ban}</button>
              </td>
            </tr>
            <tr>
              <td className='w-12 md:w-14 text-xs'>5</td>
              <td className='line-clamp-2 w-32 sm:w-40 md:w-60 lg:w-64 xl:w-72'>
                Mohammad Amin Saeedi Rad
              </td>
              <td className='line-clamp-2 w-20 sm:w-24 lg:w-28 xl:w-36'>
                09123456789
              </td>
              <td className='w-10 sm:w-12 md:w-14 xl:w-16'>
                <button className='bg-green-500 hover:bg-green-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => setShowEditUserModal(true)}>{t.adminUsers.edit}</button>
              </td>
              <td className='w-[69px] sm:w-20'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={() => showChangeAccessAlert('admin')}>{t.adminUsers.promoteToAdmin}</button>
              </td>
              <td className='w-7 sm:w-9 md:w-14 ipad:w-9 lg:w-14'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showRemoveUserAlert}>{t.adminUsers.delete}</button>
              </td>
              <td className='w-5 sm:w-7'>
                <button className='bg-rose-500 hover:bg-rose-600 text-white text-xs font-dana-medium px-1 sm:px-2 py-1 sm:py-1.5 rounded transition-colors' onClick={showBanUserAlert}>{t.adminUsers.ban}</button>
              </td>
            </tr>
          </DataTable>
        </AdminPanelTableTitle>

        <Modal
          showModalState={showEditUserModal}
          setShowModalState={setShowEditUserModal}
          title={t.adminUsers.edit}
        >
          <form onSubmit={event => event.preventDefault()}>
            <div className='max-h-96 h-max overflow-y-auto grid items-center grid-cols-1 gap-4 mb-3'>
              <div className='space-y-1'>
                <label htmlFor='user-new-name' className='font-morabba-medium'>{t.adminUsers.newName}</label>
                <input type='text' id='user-new-name' placeholder={t.adminUsers.namePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
              <div className='space-y-1'>
                <label htmlFor='user-new-username' className='font-morabba-medium'>{t.adminUsers.newUsername}</label>
                <input type='text' id='user-new-username' placeholder={t.adminUsers.usernamePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
              <div className='space-y-1'>
                <label htmlFor='user-new-tel' className='font-morabba-medium'>{t.adminUsers.newPhone}</label>
                <input type='tel' id='user-new-tel' placeholder={t.adminUsers.phonePlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm text-right" />
              </div>
              <div className='space-y-1'>
                <label htmlFor='user-new-email' className='font-morabba-medium'>{t.adminUsers.newEmail}</label>
                <input type='email' id='user-new-email' placeholder={t.adminUsers.emailPlaceholder} className="w-full bg-blue-200/35 p-2 rounded-md focus:outline-none border placeholder:text-gray-500 dark:placeholder:text-gray-300/80 dark:text-white text-sm" />
              </div>
            </div>
            <div className='flex items-center gap-2 child:w-full child:h-9 child:p-1 child:rounded child:text-white child:transition-colors'>
              <button className='bg-green-500 hover:bg-green-600' onClick={showEditUserAlert}>{t.adminUsers.updateInfo}</button>
              <button className='bg-rose-500 hover:bg-rose-600 mt-0' onClick={() => setShowEditUserModal(false)}>{t.adminUsers.cancel}</button>
            </div>
          </form>
        </Modal>
      </section>
    </>
  )
}
