interface BlogCardProps {
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

const BlogCard = ({ date, title, excerpt, imageUrl, slug }: BlogCardProps) => {
    return (
        <div className="flex flex-col md:flex-row mb-6 md:mb-12 justify-center items-center py-3 md:py-6 gap-3 md:gap-9">
            <div className="w-full md:w-auto mb-4 md:mb-0">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="rounded-xl object-cover w-full h-[200px] md:h-[200px] md:w-[300px]"
                />
            </div>
            <div className="flex flex-col justify-center text-left">
                <p className="text-gray-500 mb-2 md:mb-4 text-xs">{date}</p>
                <h2 className="text-xl font-family mb-2">{title}</h2>
                <p className="text-gray-700 mb-4 md:mb-6 text-sm">{excerpt}</p>
                <a 
                    href={`/blog/${slug}`} 
                    className="text-[--color-blue] hover:opacity-80 transition duration-300 text-left md:inline-flex items-center justify-center md:justify-start text-xs font-semibold underline underline-offset-4"
                >
                    CONTINUE READING →
                </a>
            </div>
        </div>
    );
};

export default BlogCard;