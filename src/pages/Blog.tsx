import BlogCard from '../components/BlogCard'
import Header from '../components/Header'

const Blog = () => {
    return (
        <div>
            <Header />
            
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 py-6 md:py-10 mb-10 md:mb-20'>
                <div className='flex flex-col justify-center text-center md:text-left mb-6 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-family uppercase font-semibold tracking-wide mb-4'>Blog</h1>
                    <p className='text-base md:text-lg pr-0 md:pr-10'>My personal blog focused on "building businesses online" where I share my journey and experiences with you.</p>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <img src="https://placehold.co/600x400" alt="" className='rounded-tr-[40px] md:rounded-tr-[60px] rounded-bl-[40px] md:rounded-bl-[60px] rounded-md w-full max-w-[500px] h-auto' />
                </div>
            </div>
            
            <div className='px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
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