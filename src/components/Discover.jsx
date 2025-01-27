import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <section aria-labelledby="discover-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            L'Histoire de ClicketPaf : Comment tout a commencé ?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            L'idée a germé dans un cerveau légèrement déjanté. Un soir, une simple question : "Pourquoi ne pas ajouter un peu de folie dans les vies des gens ?" Et voilà, ClicketPaf est né ! De l'idée originale à un service qui s'est rapidement transformé en phénomène, découvrez l'incroyable histoire de notre aventure.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            De l'art de recevoir une gifle "thérapeutique" à la création de services plus fous les uns que les autres, notre équipe a toujours eu un seul but : vous faire rire, surprendre, et offrir des souvenirs mémorables. Ne soyez pas timide, rejoignez notre aventure et laissez-vous surprendre !
          </p>

          <Link
            to="/notre-histoire"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:underline focus:outline-none"
            title="Découvrez notre histoire"
          >
            Cliquez ici pour découvrir notre histoire !
          </Link>
        </div>

        <h2 id="discover-section" className="text-3xl font-extrabold text-gray-800 mb-8 mt-16">
  Pourquoi choisir ClicketPaf ?
</h2>

<p className="text-lg text-gray-700 mb-12 max-w-none mx-auto px-4 sm:px-6 lg:px-8">
Chez ClicketPaf, on ne se contente pas de vous offrir une simple activité. On vous propose de vivre des moments inoubliables et complètement décalés. Si vous avez envie d'un instant original et fun, vous êtes au bon endroit !
</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className="text-blue-600 mb-4">
      <i className="fas fa-star text-4xl"></i>
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-4">Vivez des moments incroyables</h4>
    <p className="text-gray-600">
      Avec nos gifles surprises et autres expériences insolites, vous vivrez des moments inoubliables qui vous feront rire à coup sûr.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className="text-pink-500 mb-4">
      <i className="fas fa-photo-video text-4xl"></i>
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-4">Créez des souvenirs inoubliables</h4>
    <p className="text-gray-600">
      Nos services vous permettent de créer des souvenirs précieux à partager avec vos proches, des instants de joie et de complicité.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className="text-blue-600 mb-4">
      <i className="fas fa-cogs text-4xl"></i>
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-4">Profitez d'un service personnalisé</h4>
    <p className="text-gray-600">
      Pour une expérience sur-mesure, nous vous offrons des activités adaptées à vos envies et à vos besoins, pour des moments à votre image.
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    <div className="text-red-500 mb-4">
      <i className="fas fa-users text-4xl"></i>
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-4">Rapprochez-vous de vos proches</h4>
    <p className="text-gray-600">
      Nos activités fun et décalées sont parfaites pour renforcer les liens entre amis, famille ou collègues, et passer des moments mémorables ensemble.
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default Discover;
