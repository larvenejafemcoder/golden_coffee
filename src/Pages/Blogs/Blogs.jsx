import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BlogBox from '../../Components/BlogBox/BlogBox'

export default function Blogs() {
    return (
        <>
            <TitlePage title="Blogs" />
            <Header />
            <section className='blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]'>
                <div className="container flex items-center h-full"></div>
            </section>
            <section className='blog my-12 md:my-20'>
                <div className="container">
                    <h1 className='text-center text-3xl xs:text-4xl font-morabba-medium text-zinc-900 dark:text-white'> 新着記事 <span className='text-sm'>|</span> Latest Blogs </h1>
                    <div className="w-full h-0.5 mt-9 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                    <div className="blogs-container mt-12 md:mt-16 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <BlogBox
                            title="Guide to Frothing Milk Without an Espresso Machine"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={25}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="How to Choose Coffee Beans · コーヒー豆の選び方"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={18}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="Hand Drip Guide · ハンドドリップ入門"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={12}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="Cold Brew Complete Guide · コールドブリュー完全ガイド"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={8}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="Roast Level Differences · 焙煎レベルの違い"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={3}
                            month="اردیبهشت"
                            year={1402}
                        />
                        <BlogBox
                            title="French Press · フレンチプレス初心者ガイド"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={28}
                            month="فروردین"
                            year={1402}
                        />
                        <BlogBox
                            title="Aeropress · エアロプレス完全攻略"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={20}
                            month="فروردین"
                            year={1402}
                        />
                        <BlogBox
                            title="Today's Cup · 今日の一杯"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={15}
                            month="فروردین"
                            year={1402}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
