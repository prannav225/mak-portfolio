import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

const News = () => {
    return (
        <div>
            <Header />
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
                <h1 className='font-family font-semibold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>News Articles</h1>
            </div>

            <div className='px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 mt-10'>
                <NewsCard
                    date="JANUARY 14, 2025"
                    title="Beyond no detention policy"
                    excerpt="The decision to abolish the no-detention policy was primarily driven by concerns over declining student learning outcomes."
                    imageUrl="/article-1.png"
                    slug="https://www.deccanherald.com/opinion/beyond-no-detention-policy-3353829"
                />
                <NewsCard
                    date="JANUARY 26, 2025"
                    title="Opinion | Indian Schools Are Far From Future-Ready"
                    excerpt="India's school infrastructure is at a critical crossroads, demanding urgent attention not just to address existing gaps but to reimagine how our schools can prepare..."
                    imageUrl="/article-2.png"
                    slug="https://www.ndtv.com/opinion/indian-schools-are-far-from-future-ready-7562023"
                />
                <NewsCard
                    date="FEBRUARY 3, 2025"
                    title="ASER reveals gender gap in digital literacy. We must ensure that no girl is left behind"
                    excerpt="The disparity in digital access is not just a statistic; it is a reflection of deep-rooted societal norms that prioritise boys’ education and opportunities over girls’."
                    imageUrl="/article-3.png"
                    slug="https://indianexpress.com/article/opinion/columns/aser-gender-gap-digital-literacy-girl-education-9814730/"
                />
            </div>
        </div>
    )
}

export default News