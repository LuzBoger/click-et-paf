import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { allArticles } from '../../data/Articles';

const Article = () => {
  const { slug } = useParams(); 
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Article non trouvé</h1>
          <p className="text-gray-600 mt-2">Vérifiez le lien ou retournez à la page d'accueil.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.content.slice(0, 150) + '...'} />
      </Helmet>

      <article>
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <img
            src={article.image}
            alt={`Illustration de l'article ${article.title}`}
            className="w-full rounded-lg shadow-md"
          />
        </header>
        <section className="text-gray-700 text-lg leading-relaxed space-y-6">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
        <footer className="mt-10 text-center">
          <a
            href="/articles"
            className="text-blue-600 hover:underline"
          >
            Retour à la liste des articles
          </a>
        </footer>
      </article>
    </main>
  );
};

export default Article;
