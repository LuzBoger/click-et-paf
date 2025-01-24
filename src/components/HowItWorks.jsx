import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Choisissez votre service",
      description: "Sélectionnez le type de gifle ou d'expérience insolite qui vous intéresse",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Réservez votre créneau",
      description: "Choisissez la date et l'heure qui vous conviennent le mieux",
      icon: "📅"
    },
    {
      id: 3,
      title: "Personnalisez l'expérience",
      description: "Ajoutez vos instructions spéciales pour une surprise parfaite",
      icon: "✨"
    },
    {
      id: 4,
      title: "Profitez du moment",
      description: "Vivez une expérience unique et mémorable avec Click-et-Paf",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          Comment ça marche ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 