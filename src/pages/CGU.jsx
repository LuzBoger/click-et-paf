import React from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const CGU = () => {
  return (
    <div>
      <Helmet>
        <title>Conditions Générales d'Utilisation | ClicketPaf</title>
        <meta
          name="description"
          content="Consultez les Conditions Générales d'Utilisation du site ClicketPaf pour comprendre les règles et engagements d'utilisation."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://click-et-paf.com/cgu" />
        <meta property="og:url" content="https://click-et-paf.com/cgu" />
        <meta property="og:title" content="Conditions Générales d'Utilisation | ClicketPaf" />
        <meta property="og:description" content="Consultez les Conditions Générales d'Utilisation du site ClicketPaf pour comprendre les règles et engagements d'utilisation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo_click_et_paf.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conditions Générales d'Utilisation | ClicketPaf" />
        <meta name="twitter:description" content="Consultez les Conditions Générales d'Utilisation du site ClicketPaf pour comprendre les règles et engagements d'utilisation." />
        <meta name="twitter:image" content="/images/logo_click_et_paf.webp" />
      </Helmet>

      <Navbar />
      <Header title="Conditions Générales d'Utilisation" />

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
              <span className="hover:text-blue-500">Conditions Générales d'Utilisation</span>
            </li>
          </ul>
        </div>
      </nav>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-left">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Conditions Générales d'Utilisation (CGU)</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
            <p className="text-lg text-gray-700 mb-6">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site web <a href="https://click-et-paf.com/"><strong>ClicketPaf</strong></a> et des services associés. En accédant à ce site, vous acceptez de respecter ces
              conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Services proposés</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf offre des services de divertissement basés sur des expériences physiques et inattendues, telles que des
              événements surprenants et décalés, le tout dans un cadre sécurisé et respectueux des valeurs de consentement et
              de bien-être. L'accès et l'utilisation des services sont soumis à des conditions particulières qui seront précisées
              lors de la réservation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Utilisation du site</h3>
            <p className="text-lg text-gray-700 mb-6">
              L'utilisateur s'engage à utiliser le site de manière conforme à la législation en vigueur. L'accès à certains
              services peut nécessiter une inscription ou un abonnement, et l'utilisateur doit fournir des informations exactes
              et à jour. L'utilisateur est responsable de la sécurité de ses identifiants et mots de passe.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Propriété intellectuelle</h3>
            <p className="text-lg text-gray-700 mb-6">
              Le contenu du site, incluant mais ne se limitant pas aux textes, images, logos, vidéos et autres éléments
              multimédia, est la propriété exclusive de ClicketPaf et est protégé par les lois relatives à la propriété
              intellectuelle. Toute reproduction, diffusion, ou exploitation sans autorisation préalable est interdite.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Responsabilité</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf s'efforce de fournir des informations précises et de garantir la qualité des services, mais ne peut
              être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, des services ou de
              l'impossibilité d'y accéder. L'utilisateur utilise le site à ses propres risques.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Protection des données personnelles</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf respecte la confidentialité des données personnelles de ses utilisateurs et s'engage à les protéger.
              Pour plus d'informations sur la collecte et l'utilisation des données, veuillez consulter notre politique de
              confidentialité.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Modifications des CGU</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf se réserve le droit de modifier les présentes Conditions Générales d'Utilisation à tout moment. Les
              modifications seront publiées sur cette page, et la date de la dernière mise à jour sera indiquée en bas du
              document. Il est de la responsabilité de l'utilisateur de consulter régulièrement cette page.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Loi applicable</h3>
            <p className="text-lg text-gray-700 mb-6">
              Les présentes Conditions Générales d'Utilisation sont soumises à la législation française. En cas de litige, les
              parties conviennent de chercher une solution amiable. Si aucun accord n'est trouvé, le litige sera porté devant
              les juridictions compétentes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Contact</h3>
            <p className="text-lg text-gray-700 mb-6">
              Pour toute question ou demande relative aux présentes Conditions Générales d'Utilisation, vous pouvez nous
              contacter à l'adresse suivante :<br />
              <strong>Email :</strong> contact@click-et-paf.com<br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGU;
