import React from "react";
import { allArticles } from "../data/Articles";
import Article from "../components/Article";

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
    </section>
  );
};

export default ArticleCard;
