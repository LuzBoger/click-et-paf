import React from 'react';
import { allArticles } from '../data/Articles';

const ArticleCard = () => {
  const recentArticles = allArticles.slice(-3).reverse(); 

  return (
    <div className="max-w-screen-xl mx-auto p-16">

      <h2 className="text-2xl font-bold mb-8 text-center">Derniers articles</h2>

      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {recentArticles.map((article) => (
          <article
            key={article.id}
            className="flex flex-col justify-between hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="py-4 px-8">
              <img
                src={article.image}
                alt={article.title}
                title={article.title}
                className="w-full h-52 object-cover"
              />

              <a href={`#${article.id}`} title={`Lire l'article ${article.title}`}>
                <h3 className="text-lg mb-3 font-semibold">{article.title}</h3>
              </a>

              <p className="mb-2 text-sm text-gray-600">
                {article.content.substring(0, 100)}...
              </p>
            </div>

            <div className="mt-4 py-4 px-8">
              <a
                href={`/article/${article.slug}`}
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                title={`Lire l'article: ${article.title}`}
              >
                Lire l'article
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
