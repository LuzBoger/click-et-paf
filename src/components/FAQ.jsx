import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Foire Aux Questions (FAQ)
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleQuestion(1)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Qu'est-ce que Click-et-Paf ?{" "}
              <span className="text-gray-500">
                {openQuestion === 1 ? "–" : "+"}
              </span>
            </h3>
            {openQuestion === 1 && (
              <p className="text-gray-600 mt-2">
                Click-et-Paf est une soltion vous proposant plusierus services,
                 comme recevoir une gifle (réelle, avec consentement), en donné une, ou encore apprendre à en donner.   
              </p>
            )}
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleQuestion(2)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Quelles sont les expériences proposées ?{" "}
              <span className="text-gray-500">
                {openQuestion === 2 ? "–" : "+"}
              </span>
            </h3>
            {openQuestion === 2 && (
              <div className="text-gray-600 mt-2">
                <p>
                  Nos expériences incluent des services uniques et décalés :
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>La Gifle Thérapeutique :</strong> Une gifle libératrice,
                    accompagnée d'une phrase motivante.
                  </li>
                  <li>
                    <strong>La Gifle Cinématographique :</strong> Mise en scène complète
                    pour une gifle digne d'un film culte.
                  </li>
                  <li>
                    <strong>La Gifle Surprise :</strong> Une gifle imprévisible dans un lieu
                    convenu.
                  </li>
                  <li>
                    <strong>Le Stage de Gifles :</strong> Apprenez l'art de la gifle dans un cadre
                    ludique.
                  </li>
                  <li>
                    <strong>La Gifle Sonore :</strong> Une gifle amplifiée pour un effet
                    sonore hilarant.
                  </li>
                  <li>
                    <strong>La Gifle Mémorable :</strong> Une gifle filmée en slow-motion avec
                    des effets dramatiques.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleQuestion(3)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Quels sont les tarifs ?{" "}
              <span className="text-gray-500">
                {openQuestion === 3 ? "–" : "+"}
              </span>
            </h3>
            {openQuestion === 3 && (
              <p className="text-gray-600 mt-2">
                Voici les tarifs pour nos expériences uniques :
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>La Gifle Thérapeutique :</strong> 25€
                  </li>
                  <li>
                    <strong>La Gifle Cinématographique :</strong> 50€
                  </li>
                  <li>
                    <strong>La Gifle Surprise :</strong> 40€
                  </li>
                  <li>
                    <strong>Le Stage de Gifles :</strong> 80€ par participant
                  </li>
                  <li>
                    <strong>La Gifle Sonore :</strong> 35€
                  </li>
                  <li>
                    <strong>La Gifle Mémorable :</strong> 60€, incluant un enregistrement
                    vidéo.
                  </li>
                </ul>
                Pour des prestations personnalisées ou des événements spéciaux,
                contactez-nous pour un devis adapté.
              </p>
            )}
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleQuestion(4)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Est-ce sécurisé ?{" "}
              <span className="text-gray-500">
                {openQuestion === 4 ? "–" : "+"}
              </span>
            </h3>
            {openQuestion === 4 && (
              <p className="text-gray-600 mt-2">
                Oui, toutes nos expériences sont réalisées dans un cadre
                sécurisé. Chaque action est encadrée par des professionnels, et
                le consentement est une condition indispensable avant toute
                participation.
              </p>
            )}
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleQuestion(5)}
          >
            <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
              Où peut-on vivre l'expérience Click-et-Paf ?{" "}
              <span className="text-gray-500">
                {openQuestion === 5 ? "–" : "+"}
              </span>
            </h3>
            {openQuestion === 5 && (
              <p className="text-gray-600 mt-2">
                Nos expériences sont disponibles dans nos locaux situés au
                centre-ville, mais nous proposons également des prestations
                mobiles pour vos événements privés ou professionnels.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
