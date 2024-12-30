import React from 'react';
import { useParams } from 'react-router-dom';
import { allArticles } from '../../data/Articles';
import { HeadProvider, Title, Link, Meta  } from 'react-head';


const Article = () => {
  const { slug } = useParams();
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Article non trouvé</h1>
          <p className="text-gray-600 mt-2">Vérifiez le lien ou retournez à la page d'accueil.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
          <HeadProvider>
              <Title>{article.title}</Title>
              <Meta name="description" content={article.content.slice(0, 150) + '...'} />
              <Meta name="keywords" content="clicketpaf, click-et-paf,click, paf, click et action,surprise, ,expériences insolites,tendances insolites, service de gifle en ligne, gifle, service de gifle" />
              <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <Meta name="author" content={'Moussi Sid-Ahmed'} />
              <Meta name="robots" content="index, follow" />
              <Meta property="og:url" content={`http://click-et-paf.com/article/${article.slug}`} />
              <Meta property="og:title" content={article.title} />
              <Meta property="og:description" content={article.content.slice(0, 150) + '...'} />
              <Meta  property="og:image" content={article.image} />
              <Meta property="og:author" content={'Moussi Sid-Ahmed'} />
              <Meta  property="og:type" content="article" />
              <Meta  name="twitter:card" content="summary_large_image" />
              <Meta  name="twitter:title" content={article.title} />
              <Meta name="twitter:description" content={article.content.slice(0, 150) + '...'} />
              <Meta  name="twitter:image" content={article.image} />
              <Meta name="twitter:creator" content={'Moussi Sid-Ahmed'} />
              <Link rel="canonical" href={`http://click-et-paf.com/article/${article.slug}`} />

            </HeadProvider>
      <article>
        
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
          <img
            src={article.image}
            alt={article.imageTitle}
            title={article.imageTitle}
            className="w-full rounded-lg shadow-xl mb-6"
          />
        </header>

        
        <section className="text-lg text-gray-800 leading-relaxed">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-justify">
              {paragraph}
            </p>
          ))}
        </section>

        
        <footer className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Articles connexes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {allArticles
              .filter((item) => item.id !== article.id) 
              .slice(0, 3) 
              .map((related) => (
                <li key={related.id} className="hover:text-blue-600 transition-all duration-300">
                  <a href={`/article/${related.slug}`} className="text-xl font-medium">
                    {related.title}
                  </a>
                </li>
              ))}
          </ul>

          
          <div className="mt-8 text-center">
            <a
              href="/articles"
              className="text-blue-600 hover:underline text-lg"
            >
              Retour à la liste des articles
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default Article;
