import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BlogBox from '../../Components/BlogBox/BlogBox'
import { useTranslation } from '../../hooks/useTranslation'

export default function Blogs() {
    const { t } = useTranslation()
    return (
        <>
            <TitlePage title={t.blogs.pageTitle} />
            <Header />
            <section className='blog-header mt-16 md:mt-0 h-60 xs:h-80 md:h-screen bg-blog-header bg-no-repeat bg-cover bg-[right_top]'>
                <div className="container flex items-center h-full"></div>
            </section>
            <section className='blog my-12 md:my-20'>
                <div className="container">
                    <h1 className='text-center text-3xl xs:text-4xl font-morabba-medium text-zinc-900 dark:text-white'> {t.blogs.latestPosts} <span className='text-sm'>|</span> {t.blogs.latestBlogs} </h1>
                    <div className="w-full h-0.5 mt-9 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                    <div className="blogs-container mt-12 md:mt-16 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <BlogBox
                            title="エスプレッソマシンなしでミルクフォームを作るガイド"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"25"}
                            month="اردیبهشت"
                            year={"1402"}
                        />
                        <BlogBox
                            title="コーヒー豆の選び方 · How to Choose Coffee Beans"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"18"}
                            month="اردیبهشت"
                            year={"1402"}
                        />
                        <BlogBox
                            title="ハンドドリップガイド · Hand Drip Introduction"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"12"}
                            month="اردیبهشت"
                            year={"1402"}
                        />
                        <BlogBox
                            title="コールドブリュー完全ガイド · Cold Brew Complete Guide"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"8"}
                            month="اردیبهشت"
                            year={"1402"}
                        />
                        <BlogBox
                            title="焙煎レベルの違い · Roast Level Differences"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"3"}
                            month="اردیبهشت"
                            year={"1402"}
                        />
                        <BlogBox
                            title="フレンチプレス · French Press Beginner's Guide"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"28"}
                            month="فروردین"
                            year={"1402"}
                        />
                        <BlogBox
                            title="エアロプレス · Aeropress Mastery Guide"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"20"}
                            month="فروردین"
                            year={"1402"}
                        />
                        <BlogBox
                            title="今日の一杯 · Today's Cup"
                            imageSrc="blog-1.png"
                            link="/blog/coffee"
                            day={"15"}
                            month="فروردین"
                            year={"1402"}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
