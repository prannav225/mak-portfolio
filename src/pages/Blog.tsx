import BlogCard from '../components/BlogCard'
import Header from '../components/Header'

const Blog = () => {
    return (
        <div>
            <Header />
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
                <h1 className='font-family font-semibold text-3xl md:text-5xl lg:text-6xl text-center md:text-left'>Blog</h1>
                {/* <p className='text-base md:text-md'>My personal blog focused on "building businesses online" <br /> where I share my journey and experiences with you.</p> */}
            </div>

            <div className='px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 mt-10'>
                <BlogCard
                    date="JANUARY 1, 2025"
                    title="This Happened To Me In 2024 – Year In Review"
                    excerpt="2024 Has Come To An End, And I Am Grateful For All The New Opportunities As Well As..."
                    imageUrl="https://placehold.co/400x300"
                    slug="2024-year-in-review"
                />
                <BlogCard
                    date="JANUARY 1, 2025"
                    title="This Happened To Me In 2024 – Year In Review"
                    excerpt="2024 Has Come To An End, And I Am Grateful For All The New Opportunities As Well As..."
                    imageUrl="https://placehold.co/400x300"
                    slug="2024-year-in-review"
                />
                <BlogCard
                    date="JANUARY 1, 2025"
                    title="This Happened To Me In 2024 – Year In Review"
                    excerpt="2024 Has Come To An End, And I Am Grateful For All The New Opportunities As Well As..."
                    imageUrl="https://placehold.co/400x300"
                    slug="2024-year-in-review"
                />
            </div>
        </div>
    )
}

export default Blog