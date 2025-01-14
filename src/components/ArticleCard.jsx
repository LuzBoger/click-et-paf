import React from 'react';
import { allArticles } from '../data/Articles';
import Article from '../components/Article';

export const ArticleCard = () => {
  const recentArticles = allArticles.slice(-3).reverse();
  return (
    <div className="max-w-screen-xl mx-auto p-16">

      <h2 className="text-2xl font-bold mb-8 text-center">Derniers articles</h2>

      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {recentArticles.map((article) => {
          return (
            <Article item={article} key={article.id}></Article>
          )
        })}
      </div>
    </div>
  );
};

export default ArticleCard;
