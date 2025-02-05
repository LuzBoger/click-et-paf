import React from 'react';
import { Helmet } from 'react-helmet';
import { services } from '../data/Services';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Services de Gifles et Expériences Insolites | ClicketPaf</title>
        <meta 
          name="description" 
          content="Découvrez nos services de gifles thérapeutiques et expériences insolites. Des moments uniques et mémorables garantis par des professionnels certifiés." 
        />
        <meta 
          name="keywords" 
          content="gifle thérapeutique, gifle cinématographique, expérience insolite, service de gifle,click,paf,click&paf,click-et-paf,clicketpaf, thérapy, acting" 
        />
        <meta property="og:title" content="Services de Gifles | ClicketPaf" />
        <meta property="og:description" content="Découvrez nos services de gifles thérapeutiques et expériences insolites. Des moments uniques et mémorables garantis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://click-et-paf.com/services" />
        <link rel="canonical" href="https://click-et-paf.com/services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Services de Gifles & Expériences Insolites",
            "description": "Découvrez nos services de gifles thérapeutiques et expériences insolites pour des moments uniques.",
            "provider": {
              "@type": "Organization",
              "name": "ClicketPaf",
              "url": "https://click-et-paf.com"
            },
            "areaServed": "France"
          })}
        </script>
      </Helmet>

      <NavBar />
      
      <Header 
        title="Services" 
        subtitle="Des expériences uniques qui marqueront les esprits" 
      />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez notre gamme exclusive de services, où chaque gifle est une expérience unique 
            méticuleusement chorégraphiée pour créer des moments inoubliables.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50"></div>
              
              <div className="p-8 md:p-12 relative">
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <span className="text-7xl bg-indigo-50 p-4 rounded-2xl inline-block">{service.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                    <p className="text-xl text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Consultation personnalisée
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Professionnel certifié
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Environnement sécurisé
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce qui est inclus</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Certificat d'expérience
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Photos souvenirs
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Support après-service
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes sur nos services</h2>
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-indigo-600 mb-3">Est-ce que c'est sécurisé ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolument ! Tous nos services sont encadrés par des professionnels qualifiés 
                dans un environnement parfaitement contrôlé. Votre sécurité est notre priorité numéro une.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="font-semibold text-xl text-indigo-600 mb-3">Comment réserver ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La réservation se fait simplement en ligne. Choisissez votre service, 
                sélectionnez une date et une heure qui vous conviennent, et laissez-vous guider 
                par notre processus de réservation intuitif.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 