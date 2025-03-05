import BlogCard from '../components/BlogCard'
import Header from '../components/Header'

const Blog = () => {
    return (
        <div>
            <Header />
            

            
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white grid grid-cols-2 gap-6 px-60 py-10 mb-20'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-6xl font-family uppercase font-semibold tracking-wide'>Blog</h1>
                    <p className='text-lg pr-10'>My personal blog focused on “building businesses online” where I share my journey and experiences with you.</p>
                </div>
                <div>
                    <img src="https://placehold.co/600x400" alt="" className='rounded-tr-[60px] rounded-bl-[60px] rounded-md' />
                </div>
            </div>
            <div className='px-60'>
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
