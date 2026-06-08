import TitlePage from '../../Components/TitlePage/TitlePage'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import { useTranslation } from '../../hooks/useTranslation'
import "./BlogInfo.css"

export default function BlogInfo() {
    const { t } = useTranslation()
    return (
        <>
            <TitlePage title={t.blogInfo.pageTitle} />
            <Header />
            <section className='blog'>
                <div className="container">
                    <div className="blog-info bg-white dark:bg-zinc-700 dark:text-white mt-24 md:mt-40 mb-16 md:mb-28 p-4 xs:p-5 rounded-lg">
                        <h1 className='text-xl/7 xs:text-2xl/8 sm:text-3xl/10 text-center mb-2 xs:mb-3'> How to Make Milk Foam <br className='block xs:hidden' /><span className='text-base'>|</span> エスプレッソマシンなしでミルクフォームを作る方法 </h1>
                        <Breadcrumb
                            firstTitle={t.blogs.pageTitle}
                            firsTitletLink="/blogs"
                            centered={true}
                        />
                        <div className='my-10 md:my-16 flex justify-center'>
                            <img loading="lazy" src="/images/blogs/blog-1.png" alt={t.common.blogImage} className='w-full md:w-[80%] aspect-video rounded-md' />
                        </div>
                        <div className='blog-content'>
                            <h2>
                                How to Make Milk Foam <span className='text-base'>|</span> エスプレッソマシンなしでミルクフォームを作る方法
                            </h2>
                            <p>
                                It is possible to make smooth milk foam without an espresso machine.
                                <br /><br />
                                エスプレッソマシンを持っていなくても、なめらかでビロードのようなミルクフォームを作ることは十分可能です。カプチーノ、ラテを作る場合でも、単に自宅のコーヒーをワンランク上げたい場合でも、そのテクニックはシンプルで誰でも簡単にできます。
                                <br /><br />
                                電子レンジ対応の容器で牛乳を温め、密閉できる瓶に注ぎます。約30〜60秒間激しく振って、牛乳の量が2倍になり空気を含んだ状態にします。より安定したフォームにするには、振った牛乳をさらに30秒電子レンジで加熱し、そのまま休ませます。
                                <br /><br />
                                出来上がりは、コーヒーの上に美しくのるクリーミーなフォームです。この方法は、高価な機器を購入せずに自宅でカフェスタイルのドリンクを楽しみたい方におすすめです。
                            </p>
                            <h3>                             How to Enjoy Coffee <span className='text-sm'>|</span> コーヒーの楽しみ方 </h3>
                            <h2>
                                Brewing Methods | 抽出方法
                            </h2>
                            <p>
                                それぞれの抽出方法は、同じコーヒー豆から異なる個性を引き出します。これらの方法を理解することで、どんな瞬間にも最適な一杯を選べるようになります。
                                <br /><br />
                                ハンドドリップは、クリーンで明るい味わいで、際立った酸味と香りが特徴です。フレンチプレスは、より多くのオイルと微粉を含んだ、ボディのある豊かな浸漬式抽出です。エアロプレスは、2分以内で滑らかで濃縮されたコーヒーを抽出します。エスプレッソはミルクベースのドリンクの基盤となり、強さと深みを提供します。コールドブリューは、暑い季節にぴったりの滑らかで低酸味のコーヒーです。
                                <br />
                            </p>
                            <h3>                             Brewing Styles | 抽出スタイル </h3>
                            <ol>
                                <li> Hand Drip | ハンドドリップ </li>
                                <li> French Press | フレンチプレス </li>
                                <li> Aeropress | エアロプレス </li>
                                <li> Espresso | エスプレッソ </li>
                                <li> Cold Brew | コールドブリュー </li>
                            </ol>
                            <h2>
                                Coffee Culture | コーヒー文化
                            </h2>
                            <ul>
                                <li> コーヒーは単なる飲み物ではありません。 </li>
                                <li> 朝のスタートをサポートします。 </li>
                                <li> 仕事や勉強中の集中力を高めます。 </li>
                                <li> 友人との会話を豊かにします。 </li>
                            </ul>
                            <h3>                             From a Single Cup | 一杯のコーヒーから </h3>
                            <p>
                                コーヒーには日常生活を豊かにする力があると信じています。一杯一杯に、新たな発見やつながりの可能性が詰まっています。
                                <br />
                                コーヒーを通じて、人、文化、そして技術をつなぐことを目指しています。一杯一杯、品質とサービスの向上に継続的に取り組んでまいります。
                                <br /><br />
                                Enjoy Coffee. Enjoy Life.
                                <br />
                                コーヒーを楽しむ。人生を楽しむ。
                            </p>
                            <a href="/blogs">← Back | 記事に戻る</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
