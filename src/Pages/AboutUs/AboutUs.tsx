import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import TitlePage from '../../Components/TitlePage/TitlePage'
import { useTranslation } from '../../hooks/useTranslation'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <>
      <TitlePage title={t.aboutUs.pageTitle} />
      <Header />
      <section className='about-us mt-28 md:mt-44 mb-16 md:mb-28'>
        <div className="container">
          <div className="bg-white dark:bg-zinc-700 dark:text-white rounded-lg p-6">
            <h1 className='text-4xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'>{t.aboutUs.introTitle}</h1>
            <div className='mt-5'>
              <p>{t.aboutUs.introContent}</p>
              <br />
              <h3 className='text-2xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> Code · Circuits · Languages </h3>
              <p className='text-sm xs:text-base mt-2 tracking-wide'>
                コード・回路・言語
              </p>
              <br /><br />
              <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> Our Philosophy <span className='text-sm'>|</span> 私たちのビジョン </h3>
              <p className='mt-5'>
                私たちは、意味のあるプロジェクトを創造し、知識を共有し、学習と革新の文化に貢献するよう努めています。
                <br /><br />
                私たちの目標は、ソフトウェアを構築するだけでなく、発見、実験、そしてそこから学んだ教訓を記録することでもあります。オープンなコラボレーションと継続的な改善を通じて、自身のエンジニアリングの旅を始める他の人々に刺激を与えたいと考えています。
                <br /><br />
                好奇心、規律、そして粘り強さが、すべての偉大なエンジニアの基盤であると信じています。
              </p>
              <br /><br />
              <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> Development Philosophy <span className='text-sm'>|</span> 開発哲学 </h3>
              <ul className='mt-5 space-y-2'>
                <li>目的を持って構築する。</li>
                <li>継続的に学ぶ。</li>
                <li>知識をオープンに共有する。</li>
                <li>職人技を尊重する。</li>
                <li>一歩ずつ改善する。</li>
              </ul>
              <p className='mt-5 italic'>
                すべてのプロジェクトは、何か新しいことを学ぶ機会です。
              </p>
              <br /><br />
              <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'>{t.aboutUs.contactTitle}</h3>
              <ul className='mt-7 space-y-3'>
                <li>📍 ファンティエット、ビントゥアン、ベトナム</li>
                <li>📧 tomkancaston@gmail.com</li>
                <li>🐙 GitHub: kernelghost</li>
                <li>💻 オープンソース＆エンジニアリングプロジェクト</li>
                <li>🌏 英語 • ベトナム語 • 日本語 (Learning) • 中国語 (Learning)</li>
              </ul>
              <br /><br />
              <h3 className='text-3xl pb-1 font-morabba-medium border-b-2 border-b-black dark:border-b-orange-300 w-max dark:text-orange-300'> Path to Engineering <span className='text-sm'>|</span> エンジニアの旅 </h3>
              <p className='mt-5 font-medium'>現在の焦点：</p>
              <ul className='mt-3 grid grid-cols-2 gap-x-4 gap-y-1'>
                <li>C言語プログラミング</li>
                <li>C++</li>
                <li>Linuxシステム</li>
                <li>コンピュータサイエンス基礎</li>
                <li>工学のための数学</li>
                <li>組み込みシステム</li>
                <li>電気工学</li>
                <li>中国語</li>
                <li>日本語</li>
              </ul>
              <p className='mt-7 italic border-t-2 border-t-black dark:border-t-orange-300 pt-5 text-center text-lg'>
                「学習にゴールはない。それは継続的な構築プロセスである。」
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
