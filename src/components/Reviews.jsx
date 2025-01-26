import React from 'react';
import { Helmet } from 'react-helmet-async';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophie Martin",
      rating: 5,
      comment: "Click-et-Paf a rendu l'anniversaire de mon meilleur ami inoubliable ! Le gifleur professionnel a parfaitement exécuté la surprise. Un service unique qui fait son effet 👋😂",
      date: "15 Mars 2024"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      rating: 5,
      comment: "Le service client de Click-et-Paf est exceptionnel ! La gifle était parfaitement dosée, comme demandé. Une expérience client vraiment unique. Je recommande vivement leurs services !",
      date: "2 Mars 2024"
    },
    {
      id: 3,
      name: "Julie Leroux",
      rating: 5,
      comment: "Grâce à Click-et-Paf, j'ai offert un moment mémorable à ma famille. Le côté décalé et professionnel de leur service est impressionnant. La meilleure expérience insolite à Paris ! 😄",
      date: "28 Février 2024"
    },
    {
      id: 4,
      name: "Marc Dupont",
      rating: 5,
      comment: "Click-et-Paf propose vraiment un concept unique en France. J'ai utilisé leur service pour un enterrement de vie de garçon, c'était parfait ! L'équipe est super réactive et professionnelle.",
      date: "20 Février 2024"
    },
    {
      id: 5,
      name: "Emma Laurent",
      rating: 5,
      comment: "Quand on m'a parlé de Click-et-Paf, je ne savais pas à quoi m'attendre. Mais leur service de gifles surprises est juste génial ! Tout est bien pensé, de la réservation à la livraison de la gifle 👌",
      date: "15 Février 2024"
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {
            `
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "ClicketPaf",
              "description": "ClicketPaf propose des expériences de gifles surprises uniques pour des occasions spéciales.",
              "serviceType": "Surprise slap experience",
              "provider": {
                "@type": "Organization",
                "name": "ClicketPaf",
                "url": "https://www.click-et-paf.com",
                "telephone": "+33 1 23 45 67 89",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Rue de l'Imprévu",
                  "addressLocality": "Paris",
                  "addressRegion": "Île-de-France",
                  "postalCode": "75000",
                  "addressCountry": "FR"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "${averageRating.toFixed(1)}",
                "reviewCount": "${reviews.length}",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                ${reviews.map(review => `
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "${review.name}"
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "${review.rating}"
                    },
                    "datePublished": "${review.date}",
                    "reviewBody": "${review.comment}"
                  }
                `).join(',')}
              ]
            }
            `
          }
        </script>
      </Helmet>

      <section aria-labelledby="reviews-heading" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 id="reviews-heading" className="text-3xl font-semibold text-center mb-4 text-black">
            Ils ont testé Click-et-Paf !
          </h2>
          <p className="text-xl text-gray-800 text-center mb-12">
            Découvrez les expériences insolites de nos clients satisfaits
          </p>
          <span className="sr-only"> - Note moyenne de {averageRating.toFixed(1)}/5 basée sur {reviews.length} avis</span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <article key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400" aria-label={`Note : ${review.rating} sur 5`}>
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 000-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-800 mb-4">
                  {review.comment}
                </blockquote>

                <footer className="flex justify-between items-center">
                  <cite className="font-semibold text-gray-900 not-italic">
                    {review.name}
                  </cite>
                  <time dateTime={review.date} className="text-sm text-gray-700">
                    {review.date}
                  </time>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
