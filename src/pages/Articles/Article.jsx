import React from 'react';
import { useParams } from 'react-router-dom';
import { allArticles } from '../../data/Articles';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Article = () => {
  const { category, slug } = useParams();
  const article = allArticles.find(a => a.category === category && a.slug === slug);

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
    <div>
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.content.slice(0, 150) + '...'} />
        <meta name="keywords" content="clicketpaf, click-et-paf, click, paf, surprise, expériences insolites, tendances, service de gifle, gifle, donner une gifle, recevoir une gifle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={`${article.author}`} />
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://click-et-paf.com/blog/${article.category}/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.slice(0, 150) + '...'} />
        <meta property="og:image" content={article.image} />
        <meta property="og:author" content={'Moussi Sid-Ahmed'} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content.slice(0, 150) + '...'} />
        <meta name="twitter:image" content={article.image} />
        <meta name="twitter:creator" content={`${article.author}`} />

        <link rel="canonical" href={`https://click-et-paf.com/blog/${article.category}/${article.slug}`} />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${article.title}",
              "description": "${article.content.slice(0, 150)}...",
              "author": {
                "@type": "Person",
                "name": "${article.author}"
              },
              "datePublished": "${article.date}",
              "image": "${article.image}",
              "url": "http://click-et-paf.com/blog/${article.category}/${article.slug}",
              "publisher": {
                "@type": "Organization",
                "name": "ClicketPaf"
              }
            }
          `}
        </script>
      </Helmet>

      <NavBar />
      <nav className="bg-gray-200 py-3">
        <div className="container mx-auto px-6">
          <ul className="flex text-sm text-gray-700">
            <li>
              <a href="http://click-et-paf.com/" className="hover:text-blue-500">
                <span>Accueil</span>
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="http://click-et-paf.com/blog" className="hover:text-blue-500">
                <span>Blog</span>
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="hover:text-blue-500">{article.category}</span>
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="hover:text-blue-500">{article.title}</span>
            </li>
          </ul>
        </div>
      </nav>

      <main className="px-6 py-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-12 mb-12">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{article.title}</h1>

            <img
              src={article.image}
              alt={article.imageTitle || article.title}
              title={article.imageTitle || article.title}
              className="w-full rounded-lg shadow-xl mb-6"
              loading="lazy"
            />
          </header>

          <section className="text-lg text-gray-800 leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-justify">
                {paragraph}
              </p>
            ))}
          </section>
          <a
            href={`/blog`}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            title={`Lire l'article: ${article.title}`}
          >
            Revenir vers le blog
          </a>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
