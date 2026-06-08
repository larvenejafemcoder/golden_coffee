import React from 'react'
import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import "./BlogInfo.css"

export default function BlogInfo() {
    return (
        <>
            <TitlePage title="Blog Post" />
            <Header />
            <section className='blog'>
                <div className="container">
                    <div className="blog-info bg-white dark:bg-zinc-700 dark:text-white mt-24 md:mt-40 mb-16 md:mb-28 p-4 xs:p-5 rounded-lg">
                        <h1 className='text-xl/7 xs:text-2xl/8 sm:text-3xl/10 text-center mb-2 xs:mb-3'> ミルクフォームの作り方 <br className='block xs:hidden' /><span className='text-base'>|</span> Guide to Frothing Milk Without an Espresso Machine </h1>
                        <Breadcrumb
                            firstTitle="Blogs"
                            firsTitletLink="/blogs"
                            centered={true}
                        />
                        <div className='my-10 md:my-16 flex justify-center'>
                            <img loading="lazy" src="/images/blogs/blog-1.png" alt="Blog Image" className='w-full md:w-[80%] aspect-video rounded-md' />
                        </div>
                        <div className='blog-content'>
                            <h2>
                                ミルクフォームの作り方 <span className='text-base'>|</span> Guide to Frothing Milk Without an Espresso Machine
                            </h2>
                            <p>
                                エスプレッソマシンがなくても、滑らかなミルクフォームを作ることは可能です。
                                <br /><br />
                                It is entirely possible to create smooth, velvety milk foam without owning an espresso machine. Whether you are making a cappuccino, latte, or simply want to elevate your home coffee, the techniques are simple and accessible.
                                <br /><br />
                                Warm your milk in a microwave-safe container, then pour it into a sealed jar. Shake vigorously for about 30 to 60 seconds until the milk doubles in volume and becomes airy. For a more stable foam, microwave the shaken milk for an additional 30 seconds, then let it rest.
                                <br /><br />
                                The result is a creamy foam that sits beautifully on top of your coffee. This method is recommended for anyone who wants to enjoy café-style drinks at home without investing in expensive equipment.
                            </p>
                            <h3> コーヒーの楽しみ方 <span className='text-sm'>|</span> How to Enjoy Coffee </h3>
                            <h2>
                                抽出方法 | Brewing Methods
                            </h2>
                            <p>
                                Each brewing method brings out a different character from the same coffee beans. Understanding these methods allows you to choose the perfect cup for any moment.
                                <br /><br />
                                Hand drip brewing offers a clean, bright cup with pronounced acidity and aroma. French press delivers a full-bodied, rich immersion with more oils and sediment. Aeropress produces a smooth, concentrated coffee in under two minutes. Espresso is the foundation of milk-based drinks, offering intensity and depth. Cold brew yields a smooth, low-acidity coffee perfect for warm weather.
                                <br />
                            </p>
                            <h3> 抽出スタイル | Brewing Styles </h3>
                            <ol>
                                <li> ハンドドリップ | Hand Drip </li>
                                <li> フレンチプレス | French Press </li>
                                <li> エアロプレス | Aeropress </li>
                                <li> エスプレッソ | Espresso </li>
                                <li> コールドブリュー | Cold Brew </li>
                            </ol>
                            <h2>
                                コーヒー文化 | Coffee Culture
                            </h2>
                            <ul>
                                <li> Coffee is more than a beverage. </li>
                                <li> It supports the start of the morning. </li>
                                <li> It sharpens focus during work and study. </li>
                                <li> It enriches conversations with friends. </li>
                            </ul>
                            <h3> 一杯のコーヒーから | From a Single Cup </h3>
                            <p>
                                We believe that coffee has the power to enrich daily life. Every cup carries the possibility of a new discovery or connection.
                                <br />
                                Through coffee, we aim to connect people, culture, and craftsmanship. We are committed to continuously improving quality and service, one cup at a time.
                                <br /><br />
                                珈琲を楽しむ。人生を楽しむ。
                                <br />
                                Enjoy Coffee. Enjoy Life.
                            </p>
                            <a href="/blogs">← 戻る | Back to Articles</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
