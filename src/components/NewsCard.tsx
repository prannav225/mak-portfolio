interface BlogCardProps {
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

const NewsCard = ({ date, title, excerpt, imageUrl, slug }: BlogCardProps) => {
    return (
        <a 
            href={slug}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition duration-300"
        >
            <div className="flex flex-col md:flex-row mb-6 md:mb-12 justify-center items-center py-3 md:py-6 gap-3 md:gap-9 shadow-xl rounded-xl border p-3">
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
                    <span 
                        className="text-[--color-blue] text-left md:inline-flex items-center justify-center md:justify-start text-xs font-semibold underline underline-offset-4"
                    >
                        CONTINUE READING →
                    </span>
                </div>
            </div>
        </a>
    );
};

export default NewsCard;