interface BlogCardProps {
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

const BlogCard = ({ date, title, excerpt, imageUrl, slug }: BlogCardProps) => {
    return (
        <div className="flex flex-col md:flex-row mb-8 md:mb-16 justify-center items-center py-6 md:py-10 gap-6 md:gap-16">
            <div className="w-full md:w-auto mb-4 md:mb-0">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="rounded-xl object-cover w-full h-[200px] md:h-[250px] md:w-[400px]"
                />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
                <p className="text-gray-500 mb-2 md:mb-4">{date}</p>
                <h2 className="text-2xl md:text-3xl font-family mb-2 md:mb-4">{title}</h2>
                <p className="text-gray-700 mb-4 md:mb-6">{excerpt}</p>
                <a 
                    href={`/blog/${slug}`} 
                    className="text-[--color-blue] hover:opacity-80 transition duration-300 inline-flex items-center justify-center md:justify-start pt-3 text-sm font-semibold underline underline-offset-4"
                >
                    CONTINUE READING →
                </a>
            </div>
        </div>
    );
};

export default BlogCard;