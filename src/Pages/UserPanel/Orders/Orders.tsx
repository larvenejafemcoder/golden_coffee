import React, { useRef, useState } from 'react'
import TitlePage from '../../../Components/TitlePage/TitlePage'
import CounterBox from '../../../Components/CounterBox/CounterBox'
import { useTranslation } from '../../../hooks/useTranslation'

export default function Orders() {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState("first")
    const tabRef = useRef<HTMLUListElement>(null)

    const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const classes = Array.from(event.currentTarget.classList)
        const tab = classes[9] ?? 'first'
        setActiveTab(tab)
    }

    return (
        <>
            <TitlePage title={t.orders.pageTitle} />
            <section className='counter'>
                <div className="container-2xl">
                    <div className='boxes-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ipad:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <CounterBox
                            boxColor="bg-slate-500"
                            title={t.orders.inProgress}
                            count={1500}
                            subTitle={t.orders.order}
                            iconBg="bg-slate-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </CounterBox>
                        <CounterBox
                            boxColor="bg-emerald-500"
                            title={t.orders.completed}
                            count={1500}
                            subTitle={t.orders.order}
                            iconBg="bg-emerald-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                        </CounterBox>
                        <CounterBox
                            boxColor="bg-red-500"
                            title={t.orders.cancelled}
                            count={1500}
                            subTitle={t.orders.order}
                            iconBg="bg-red-300/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xs:w-9 xs:h-9 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>


                        </CounterBox>
                    </div>
                    <div className="tabs mt-10 border-b-[1px] pb-3 border-b-gray-300 dark:border-b-white/30">
                        <ul className='flex gap-x-5' ref={tabRef}>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors first ${activeTab === 'first' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={handleTabClick}> {t.orders.inProgress} </a>
                            </li>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors second ${activeTab === 'second' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={handleTabClick}> {t.orders.completed} </a>
                            </li>
                            <li>
                                <a className={`cursor-default pb-3 hover:border-b-2 border-b-blue-500 hover:text-blue-600 dark:hover:text-blue-500 font-bold dark:font-normal transition-colors last ${activeTab === 'last' ? "text-blue-600 dark:text-blue-500 border-b-blue-500 border-b-2" : ""}`} onClick={handleTabClick}> {t.orders.cancelled} </a>
                            </li>
                        </ul>
                    </div>
                    <div className='orders-content'>
                        <div className='bg-gray-100 dark:bg-zinc-800 dark:text-white mt-5 rounded-lg p-3 xs:p-5'>
                            <div className='flex justify-between items-center gap-x-2 border-b-[1px] border-b-zinc-400 dark:border-b-white/30 pb-2 xs:pb-3'>
                                <div>
                                    <h4 className='flex gap-x-2 text-xs xs:text-sm font-bold dark:font-normal tracking-tight'>
                                        {
                                            activeTab === 'first' ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 xs:w-5 xs:h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                                    </svg>
                                                    {t.orders.inProgress}
                                                </>
                                            ) : (activeTab === 'second') ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 xs:w-5 xs:h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>
                                                    {t.orders.completed}
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 xs:w-5 xs:h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                    </svg>

                                                    {t.orders.cancelled}
                                                </>
                                            )
                                        }
                                    </h4>
                                </div>
                                <div className='text-end child:xs:text-sm'>
                                    <p className='text-xs'>1402/12/25</p>
                                    <p className='text-xs'>
                                        {t.orders.price}:
                                        300,000,000
                                    </p>
                                </div>
                            </div>
                            <div className="w-full py-4 border-b-[1px] border-b-zinc-400 dark:border-b-white/30 overflow-x-auto">
                                <div className='flex w-max gap-2 child:w-20 child:sm:w-24 child:md:w-28'>
                                    <a href="/product/coffee" className='relative'>
                                        <p className='badge absolute top-0 right-0 bg-orange-400 m-0 px-1.5 pt-[2px] text-xs text-white rounded-full'>9+</p>
                                        <img src="/images/products/p1.png" alt={t.common.productImage} />
                                    </a>
                                    <a href="/product/coffee" className='relative'>
                                        <p className='badge absolute top-0 right-0 bg-orange-400 m-0 px-1.5 pt-[2px] text-xs text-white rounded-full'>5</p>
                                        <img src="/images/products/p1.png" alt={t.common.productImage} />
                                    </a>
                                    <a href="/product/coffee" className='relative'>
                                        <img src="/images/products/p1.png" alt={t.common.productImage} />
                                    </a>
                                    <a href="/product/coffee" className='relative'>
                                        <p className='badge absolute top-0 right-0 bg-orange-400 m-0 px-1.5 pt-[2px] text-xs text-white rounded-full'>2</p>
                                        <img src="/images/products/p1.png" alt={t.common.productImage} />
                                    </a>
                                    <a href="/product/coffee" className='relative'>
                                        <img src="/images/products/p1.png" alt={t.common.productImage} />
                                    </a>
                                </div>
                            </div>
                            <div className='mt-4 text-end'>
                                <a href="#" className='btn-orange py-1 px-2 xs:py-2 xs:px-3 rounded-full text-xs xs:text-sm'> {t.orders.viewInvoice} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
