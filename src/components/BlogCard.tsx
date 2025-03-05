interface BlogCardProps {
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

const BlogCard = ({ date, title, excerpt, imageUrl, slug }: BlogCardProps) => {
    return (
        <div className="flex mb-16 justify-center items-center py-10 gap-16">
            <div className="">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="rounded-xl object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-gray-500 mb-4">{date}</p>
                <h2 className="text-3xl font-family mb-4">{title}</h2>
                <p className="text-gray-700 mb-6">{excerpt}</p>
                <a 
                    href={`/blog/${slug}`} 
                    className="text-[--color-blue] hover:opacity-80 transition duration-300 inline-flex items-center pt-3 text-sm font-semibold underline underline-offset-4"
                >
                    CONTINUE READING →
                </a>
            </div>
        </div>
    );
};

export default BlogCard;