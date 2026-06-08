import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Swal from 'sweetalert2'

export default function ContactUs() {

    const showAlert = () => {
        Swal.fire({
            text: 'Your request has been successfully submitted',
            icon: 'success',
            confirmButtonText: 'Got it!'
        })
    }

    return (
        <>
            <TitlePage title='Contact Us' />
            <Header />
            <section className='contact-us'>
                <div className="container flex flex-col items-center mt-28 md:mt-48 mb-20">
                    <div className="space-y-10 max-w-2xl">
                        <div>
                            <img loading="lazy" src="/images/blogs/contact.png" alt="Contact Us Image" className='mx-auto' />
                        </div>
                        <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6 md:p-8">
                            <h3 className='text-black dark:text-white text-2xl xs:text-3xl font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300 pb-1'> 私たちの使命 <span className='text-sm'>|</span> Our Mission </h3>
                            <p className='mt-5 leading-relaxed'>
                                私たちは、生産工程、製品の種類と品質、サービス、そして流通において率先することで、イランの生産者たちのロールモデルとなることを目指し、イランにおけるコーヒー文化のリファレンス（基準）となる存在を目指しています。
                                <br /><br />
                                We strive to lead in production processes, product variety and quality, services, and distribution — becoming a role model for local producers and a reference for coffee culture. We firmly believe that the perception of Iranian goods among the people of Iran and the Middle East must improve, and we work passionately toward that goal.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-black dark:text-white text-center text-2xl xs:text-3xl font-dana-bold tracking-tighter'> お問い合わせ <span className='text-base'>|</span> Contact Us </h3>
                            <p className='text-base xs:text-lg sm:text-xl mt-4 font-dana-medium text-zinc-500 dark:text-gray-400 text-center'>
                                For technical issues, collaboration, or any inquiries, please reach out through the form below.
                            </p>
                        </div>
                        <div>
                            <form className='space-y-3' onSubmit={(event) => event.preventDefault()}>
                                <div className='space-y-2'>
                                    <label htmlFor="name" className='text-black dark:text-white text-sm xs:text-base'> お名前 <span className='text-xs'>|</span> First Name </label>
                                    <input type="text" placeholder='例: Tom' id='name' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-tel" className='text-black dark:text-white text-sm xs:text-base'> 電話番号 <span className='text-xs'>|</span> Phone Number </label>
                                    <input type="tel" placeholder='例: 09123456789' id='user-tel' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-email" className='text-black dark:text-white text-sm xs:text-base'> メールアドレス <span className='text-xs'>|</span> Email </label>
                                    <input type="email" placeholder='例: name@company.com' id='user-email' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base' />
                                </div>
                                <div className='space-y-2'>
                                    <label htmlFor="user-message" className='text-black dark:text-white text-sm xs:text-base'> メッセージ <span className='text-xs'>|</span> Message </label>
                                    <textarea rows={5} placeholder='Write your message...' id='user-message' className='w-full bg-blue-200/35 p-2 rounded-md focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-200 dark:text-white text-sm xs:text-base resize-none' />
                                </div>
                                <button className='bg-orange-400 w-full p-1.5 xs:p-2 text-white text-lg xs:text-xl text-center rounded-md hover:bg-green-500 transition-colors' onClick={showAlert}>
                                    送信 | Submit Request
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
