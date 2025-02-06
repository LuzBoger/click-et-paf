import React from 'react';

const partenaires = [
  {
    name: 'The Gifle Hunt Experience - Un Escape Game Unique avec ClicketPaf',
    description:
      'Plongez dans un escape game palpitant avec "The Gifle Hunt Experience" ! Chaque énigme résolue vous rapproche de l’objectif, mais attention à chaque erreur : une gifle symbolique vous attend ! Cette collaboration avec ClicketPaf rend l’expérience encore plus immersive et amusante avec des scènes de gifles spectaculaires et des mises en scène interactives. Résolvez des puzzles, évitez les gifles, et faites preuve de stratégie pour sortir victorieux de ce défi unique.',
    image: '/images/gifle-hunt-experience.webp',
    altText: 'Illustration du partenariat avec Hunt Experience',
    title: 'The Gifle Hunt Experience - Un Escape Game Unique avec ClicketPaf',
  },
  {
    name: 'Séances de Bien-être avec Holistic Life',
    description:
      'ClicketPaf et Holistic Life s’unissent pour vous offrir des événements alliant détente et expériences thérapeutiques. Lors de vos séminaires, ateliers ou événements privés, nos thérapeutes vous guideront à travers des séances de relaxation profonde, des exercices de respiration et des pratiques holistiques pour améliorer le bien-être global.',
    image: '/images/gifle-therapeutique.webp',
    altText: 'Illustration du partenariat avec Holistic Life',
    title: 'Séances de Bien-être avec Holistic Life',
  },

  
];

const Partnerships = () => {
  return (
    <section id="partenariats" className="py-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Nos Partenariats</h2>
        <p className="text-lg mb-12 text-gray-700  mx-auto">
          ClicketPaf collabore avec des marques de renom pour proposer des expériences uniques,surprenantes.
        </p>
        <div className="grid grid-cols-1 gap-12">
          {partenaires.map((partenaire, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 p-8 bg-white shadow-lg rounded-lg transition-transform transform ${
                index % 2 === 0 ? 'lg:flex-row-reverse text-left' : 'text-left'
              }`}
            >
              <img
                src={partenaire.image}
                alt={partenaire.altText}
                title={partenaire.title}
                loading="lazy"
                className="w-full lg:w-1/2 object-cover rounded-lg shadow-md h-[60vh]"
              />
              <div className="w-full lg:w-1/2 text-gray-800 px-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{partenaire.name}</h3>
                <p className="text-gray-700 leading-relaxed">{partenaire.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
