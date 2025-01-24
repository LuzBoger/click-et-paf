

const Article = (item) => {
    const article = item.item;
    return (
        <article
            key={article.id}
            className="border border-gray-800 flex flex-col justify-between max-w-sm rounded-lg overflow-hidden shadow-lg text-gray-900 bg-white"
        >
            <div className="flex flex-col gap-4">
                <img
                    src={article.image}
                    alt={article.title}
                    title={article.title}
                    width="300px"
                    height="300px"
                    className="w-full object-cover "
                />

                <a href={`#${article.id}`} title={`Lire l'article ${article.title}`} className="mx-4">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                </a>

                <p className="mb-2 text-sm text-gray-600 mx-4">
                    {article.content.substring(0, 150)}...
                </p>
            </div>

            <div className="flex justify-between items-center mx-4 py-4">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                    {article.category}
                </span>
                <a
                    href={`/blog/${article.category}/${article.slug}`}
                    className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
                    title={`Lire l'article: ${article.title}`}
                >
                    Lire l'article
                </a>
            </div>
        </article>
    )
}
export default Article;