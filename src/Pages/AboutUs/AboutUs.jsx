import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import TitlePage from '../../Components/TitlePage/TitlePage'

export default function AboutUs() {
    return (
        <>
            <TitlePage title="About Us" />
            <Header />
            <section className='about-us mt-28 md:mt-44 mb-16 md:mb-28'>
                <div className="container">
                    <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6">
                        <h1 className='text-4xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> 自己紹介 <span className='text-sm'>|</span> About Me </h1>
                        <div className='mt-5'>
                            <p>
                                I am Larvene (Tom) Nguyễn Ngọc Gia Khang, an aspiring engineer and developer with a passion for systems, software, and technology.
                                <br /><br />
                                My journey began with curiosity about how computers work beneath the surface. Since then, I have explored programming, Linux, open source software, and engineering concepts ranging from software development to embedded systems.
                                <br /><br />
                                I believe in continuous learning, careful execution, and building strong foundations. Whether studying languages, developing software, or exploring new technologies, I approach every project with determination and attention to detail.
                            </p>
                            <br />
                            <h3 className='text-2xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> コード・回路・言語 </h3>
                            <p className='text-sm xs:text-base mt-2 tracking-wide'>
                                Code • Circuits • Languages
                            </p>
                            <br /><br />
                            <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> 私たちの理念 <span className='text-sm'>|</span> Our Vision </h3>
                            <p className='mt-5'>
                                We strive to create meaningful projects, share knowledge, and contribute to a culture of learning and innovation.
                                <br /><br />
                                Our goal is not only to build software, but also to document discoveries, experiments, and lessons learned along the way. Through open collaboration and continuous improvement, we hope to inspire others who are beginning their own engineering journey.
                                <br /><br />
                                We believe that curiosity, discipline, and persistence are the foundation of every great engineer.
                            </p>
                            <br /><br />
                            <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> 開発哲学 <span className='text-sm'>|</span> Development Philosophy </h3>
                            <ul className='mt-5 space-y-2'>
                                <li>Build with purpose.</li>
                                <li>Learn continuously.</li>
                                <li>Share knowledge openly.</li>
                                <li>Respect craftsmanship.</li>
                                <li>Improve one step at a time.</li>
                            </ul>
                            <p className='mt-5 italic'>
                                Every project is an opportunity to learn something new.
                            </p>
                            <br /><br />
                            <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> 連絡先 <span className='text-sm'>|</span> Contact Information </h3>
                            <ul className='mt-7 space-y-3'>
                                <li>📍 Phan Thiết, Bình Thuận, Việt Nam</li>
                                <li>📧 tomkancaston@gmail.com</li>
                                <li>🐙 GitHub: kernelghost</li>
                                <li>💻 Open Source & Engineering Projects</li>
                                <li>🌏 English • Tiếng Việt • 日本語 (Learning) • 中文 (Learning)</li>
                            </ul>
                            <br /><br />
                            <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> エンジニアへの道 <span className='text-sm'>|</span> Engineer's Journey </h3>
                            <p className='mt-5 font-medium'>Currently focusing on:</p>
                            <ul className='mt-3 grid grid-cols-2 gap-x-4 gap-y-1'>
                                <li>C Programming</li>
                                <li>C++</li>
                                <li>Linux Systems</li>
                                <li>Computer Science Fundamentals</li>
                                <li>Mathematics for Engineering</li>
                                <li>Embedded Systems</li>
                                <li>Electrical Engineering</li>
                                <li>Mandarin Chinese</li>
                                <li>Japanese Language</li>
                            </ul>
                            <p className='mt-7 italic border-t-2 border-t-black dark:border-t-orange-300 pt-5 text-center text-lg'>
                                "Learning is not a destination. It is a continuous build process."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
