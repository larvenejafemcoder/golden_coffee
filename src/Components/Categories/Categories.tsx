import CategoryBox from '../CategoryBox/CategoryBox'

export default function Categories() {
    return (
        <section className="products-category mb-10 md:mb-20">
            <div className="container">
                <div
                    className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 items-center justify-between text-center gap-4 md:gap-5">
                    <CategoryBox
                        title="ドリップ＆エスプレッソコーヒー"
                        imageSrc="category1.png"
                        link="/category/coffee"
                    />
                    <CategoryBox
                        title="アクセサリー＆機器"
                        imageSrc="category2.png"
                        link="/category/coffee"
                    />
                    <CategoryBox
                        title="エスプレッソマシン"
                        imageSrc="category3.png"
                        link="/category/coffee"
                    />
                    <CategoryBox
                        title="コーヒーお試しパック"
                        imageSrc="category4.png"
                        link="/category/coffee"
                    />
                    <CategoryBox
                        title="トルココーヒー"
                        imageSrc="category5.png"
                        link="/category/coffee"
                    />
                </div>
            </div>
        </section>
    )
}
