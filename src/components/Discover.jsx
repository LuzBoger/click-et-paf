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

        <h2 id="discover-section" className="text-3xl font-semibold text-gray-800 mb-6 mt-16">
          Pourquoi choisir ClicketPaf ?
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Chez ClicketPaf, on ne se contente pas de vous offrir des services ordinaires. Nous vous proposons des expériences aussi mémorables qu'absurdes, créées spécialement pour ajouter du fun à votre quotidien. Que vous soyez à la recherche de moments cocasses ou de souvenirs mémorables, nous avons ce qu'il vous faut !
        </p>

        <div className="flex justify-center gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Un Concept Unique</h3>
            <p className="text-gray-600">
              Nos gifles bien réelles et nos expériences uniques vous plongent dans une aventure inattendue. Pourquoi faire comme tout le monde, quand on peut faire rire tout le monde avec une gifle bien placée ? Une idée folle ? Oui, mais qui a dit qu'on ne pouvait pas ajouter de l'absurde à sa vie ?
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Des Souvenirs Inoubliables</h3>
            <p className="text-gray-600">
              Chaque moment passé avec ClicketPaf est une aventure, un souvenir épique à partager. Et ce n'est pas qu'une gifle, c'est un moment qui restera dans les mémoires. Offrez une expérience unique remplie d'humour et vous ferez rire vos amis pendant des années, jusqu'à ce que même eux vous réclament une nouvelle gifle (ou une autre expérience, à vous de choisir !).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
