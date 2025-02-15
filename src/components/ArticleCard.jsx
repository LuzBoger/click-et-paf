import React from "react";
import { allArticles } from "../data/Articles";
import Article from "../components/Article";
import { Link } from 'react-router-dom';


const ArticleCard = () => {
  const recentArticles = [...allArticles].slice(-4).reverse();

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="latest-articles">
      <h2 id="latest-articles" className="text-3xl font-bold text-center mb-8">
        Derniers articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {recentArticles.map((article) => (
          <Article key={article.id} item={article} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/blog" 
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Voir tous les articles
        </Link>
      </div>
    </section>
  );
};

export default ArticleCard;
