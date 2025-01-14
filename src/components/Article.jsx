

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
                    className="w-full h-52 object-cover "
                />

                <a href={`#${article.id}`} title={`Lire l'article ${article.title}`} className="mx-4">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                </a>

                <p className="mb-2 text-sm text-gray-600 mx-4">
                    {article.content.substring(0, 150)}...
                </p>
            </div>

            <div className="mx-4 py-4 flex justify-end">
                <a
                    href={`/article/${article.slug}`}
                    className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
                    title={`Lire l'article: ${article.title}`}>
                    Lire l'article
                </a>
            </div>
        </article>
    )
}
export default Article;