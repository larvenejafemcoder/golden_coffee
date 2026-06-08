import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import ProductBox from '../../Components/ProductBox/ProductBox'

export default function Shop() {
    return (
        <>
            <TitlePage title="Shop" />
            <Header />
            <section className='shop-header mt-7 md:mt-0 h-60 xs:h-80 md:h-screen bg-shop-header bg-no-repeat bg-cover bg-[center_top] xs:bg-[left_top]'>
                <div className="container flex items-center h-full">
                    <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl ipad:text-6xl select-none font-morabba-bold text-white'> 製品 <span className='text-base md:text-2xl'>|</span> Product Store </h1>
                </div>
            </section>
            <section className='shop-about my-10 md:my-16'>
                <div className="container">
                    <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6 md:p-8">
                        <h2 className='text-2xl md:text-3xl font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300 pb-1'> 製品について <span className='text-sm'>|</span> About Our Products </h2>
                        <p className='mt-5 leading-relaxed'>
                            私たちは、生産工程、製品の種類と品質、サービス、流通において先駆者となることを目指しています。それにより、イランの生産者たちの手本となり、イランにおけるコーヒー文化の基準となる存在を目指します。
                            <br /><br />
                            We strive to be a pioneer in production processes, product variety and quality, services, and distribution — serving as a model for local producers and becoming a reference for coffee culture. We believe that the perception of Iranian goods among the people of Iran and the region must improve, and we pursue this goal with passion and dedication.
                        </p>
                    </div>
                </div>
            </section>
            <section className='shop my-12 md:my-20'>
                <div className="container">
                    <SectionHeader
                        title="全商品 | All Products"
                    >
                        <select className='w-32 xs:w-52 py-2 text-white text-[13px] xs:text-base bg-gray-400 dark:bg-gray-500 rounded-md focus:outline-none'>
                            <option value="جدید ترین">Newest · 最新</option>
                            <option value="ارزان ترین">Cheapest · 最安</option>
                            <option value="گران ترین">Most Expensive · 最高価格</option>
                            <option value="تخفیفی ترین">Biggest Discount · 最大割引</option>
                            <option value="محبوب ترین">Most Popular · 人気</option>
                        </select>
                    </SectionHeader>
                    <div className="products mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 md:gap-4">
                        <ProductBox />
                        <div
                            className="p-3 md:p-5 bg-white hover:bg-gray-100 dark:bg-zinc-700 hover:dark:bg-zinc-600 rounded-2xl shadow-normal transition-all">
                            <a href="#" className="flex relative justify-center items-center">
                                <img loading="lazy" src="/images/products/p1.png" alt="Product Image"
                                    className="w-32 mx-auto md:w-auto" />
                                <span
                                    className="absolute top-0 right-0 py-1 px-2 text-xs xs:text-sm font-bold text-zinc-700 bg-orange-300 rounded-full">15%</span>
                            </a>
                            <a href="/category/coffee"
                                className="inline-block bg-sky-700 p-1 xs:py-1 xs:px-2 rounded-full text-white text-[11px]/3 md:text-sm/3 font-morabba -translate-y-full">
                                Accessories & Equipment
                            </a>
                            <h3 className="text-[15px]/5 xs:text-[17px]/6 md:text-xl/6 h-16">
                                <a href="/product/coffee"
                                    className="tracking-tighter hover:text-orange-500 dark:text-white hover:dark:text-orange-300 transition-colors overflow-y-hidden line-clamp-2">
                                    ベン・マーノ エスプレッソコーヒー プリスカ モデル 250g
                                </a>
                            </h3>
                            <div className="flex items-center gap-x-2 h-7">
                                <span className="text-red-600 dark:text-red-500 text-xs/3 md:text-sm/3 font-bold">
                                    Out of Stock
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                            <button
                                className="appearance-none bg-gray-200/80 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 p-2 rounded-full transition-colors cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-[20px] h-4 md:h-[20px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                                <div className="flex justify-center items-center">
                                    <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                        </path>
                                    </svg>
                                    <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                        </path>
                                    </svg>
                                    <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                        </path>
                                    </svg>
                                    <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                        </path>
                                    </svg>
                                    <svg className="w-3 md:w-4 h-3 md:h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="#eab308" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
