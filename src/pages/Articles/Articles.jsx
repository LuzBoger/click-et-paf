import React from 'react';
import { allArticles } from '../../data/Articles';
import { HeadProvider, Title, Link, Meta  } from 'react-head';



const Articles = () => {
  const featuredArticle = allArticles[0];
  const otherArticles = allArticles.slice(1);

  return (
    
    <div className="bg-gray-100 min-h-screen"> 
    <HeadProvider>
        <Title>Mon Blog - Articles</Title>
        <Meta name="description" content="Explorez notre blog Click-et-paf pour des articles amusants et inspirants sur des expériences insolites, des surprises virtuelles et  des services décalés. Trouvez des idées originales et vivez des moments mémorables !" />
        <Meta name="keywords" content="clicketpaf, click-et-paf,click, paf, click et action,surprise, ,expériences insolites,tendances insolites, service de gifle en ligne, gifle, service de gifle" />
        <Meta   name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta name="robots" content="index, follow" />
        <Meta property="og:url" content="http://click-et-paf.com/articles" />
        <Meta  property="og:title" content="Click-et-paf: Des expériences insolites et des services surprenants" />
        <Meta property="og:description" content="Surprenez vos proches avec des gifles virtuelles et des expériences insolites grâce à Click-et-paf. Offrez des moments uniques et mémorables avec notre service en ligne." />           
        <Meta  property="og:image" content="../../../public/images/logo_click_et_paf.webp" />
        <Meta  property="og:type" content="website" />
        <Meta  name="twitter:card" content="summary_large_image" />
        <Meta  name="twitter:title" content="Click-et-paf: Des expériences insolites et des services surprenants" />
        <Meta name="twitter:description" content="Surprenez vos proches avec des gifles virtuelles et des expériences insolites grâce à Click-et-paf. Offrez des moments uniques et mémorables avec notre service en ligne." />
        <Meta  name="twitter:image" content="../../../public/images/logo_click_et_paf.webp" />
      </HeadProvider>
 
      <header className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-4 text-gray-300">Découvrez les derniers articles et tendances.</p>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <div className="mb-12">
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
              <p className="mt-4 text-sm text-gray-500">{featuredArticle.author} - {featuredArticle.category} - {featuredArticle.date}</p>
              <a
                href={`/article/${featuredArticle.slug}`}
                className="inline-block mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Lire l'article
              </a>
            </div>
          </div>
        </div>


        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tous les Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                      href={`/article/${article.slug}`}
                      className="text-blue-500 hover:underline font-medium"
                    >
                      Lire l'article
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{article.author} - {article.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
