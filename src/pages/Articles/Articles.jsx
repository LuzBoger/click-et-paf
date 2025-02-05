import React from 'react';
import { allArticles } from '../../data/Articles';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Articles = () => {
  const sortedArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredArticle = allArticles[0];
  const otherArticles = allArticles.slice(1);



  return (
    <div className="bg-gray-100 min-h-screen">

      <Helmet>
        <title>Blog ClicketPaf</title>
        <meta name="description" content="Explorez notre blog Clicketpaf pour des articles amusants et inspirants sur des expériences insolites" />
        <meta name="keywords" content="clicketpaf, click-et-paf,click, paf,services décalés,surprise, expériences insolites,tendances insolites, service de gifle en ligne, gifle, service de gifle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://click-et-paf.com/blog" />
        <meta property="og:title" content="Clicketpaf: Des expériences insolites et des services surprenants" />
        <meta property="og:description" content="Surprenez vos proches avec des gifles virtuelles et des expériences insolites grâce à Clicketpaf. Offrez des moments uniques et mémorables avec notre service en ligne." />
        <meta property="og:image" content={featuredArticle.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clicketpaf: Des expériences insolites et des services surprenants" />
        <meta name="twitter:description" content="Explorez des articles inspirants sur des services décalés et des expériences uniques sur Clicketpaf." />
        <meta name="twitter:image" content={featuredArticle.image} />
        <link rel="canonical" href={`https://click-et-paf.com/blog`} />
      </Helmet>

      <Navbar />

      <Header title="Blog" subtitle="Découvrez l'ensemble de nos articles" />

      <nav className="bg-gray-200 py-3">
        <div className="container mx-auto px-6">
          <ul className="flex text-sm text-gray-700">
            <li>
              <a href="https://click-et-paf.com/" className="hover:text-blue-500">
                <span>Accueil</span>
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>
              <span className="hover:text-blue-500">Blog</span>
            </li>
          </ul>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-12">
        <article className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Article en Vedette</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              loading="lazy"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div className="p-6 lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800">{featuredArticle.title}</h3>
              <p className="mt-4 text-gray-600">{featuredArticle.content.substring(0, 150)}...</p>
              <p className="mt-4 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                {featuredArticle.date} - {featuredArticle.author} - {featuredArticle.category} - 
                </span>
              </p>

              <a
                href={`/blog/${featuredArticle.category}/${featuredArticle.slug}`}
                className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Lire l'article
              </a>
            </div>

          </div>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tous les Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
                  <p className="mt-2 text-gray-600">{article.content.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <a
                      href={`/blog/${article.category}/${article.slug}`}
                      className="text-blue-500 hover:underline font-medium"
                    >
                      Lire l'article
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
                {article.date} - {article.author} - {article.category}  
                </span>
              </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};
export default Articles;
