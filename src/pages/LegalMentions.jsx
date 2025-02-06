import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LegalMentions = () => {
  return (
    <div>
      <Helmet>
        <title>Mentions Légales | ClicketPaf</title>
        <meta
          name="description"
          content="Consultez les mentions légales du site ClicketPaf, incluant des informations sur l'éditeur, l'hébergement, la protection des données et plus encore."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://click-et-paf.com/mentions-legales" />
        <meta property="og:url" content="https://click-et-paf.com/mentions-legales" />
        <meta property="og:title" content="Mentions Légales | ClicketPaf" />
        <meta
          property="og:description"
          content="Consultez les mentions légales du site ClicketPaf, incluant des informations sur l'éditeur, l'hébergement, la protection des données et plus encore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo-click-et-paf.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentions Légales | ClicketPaf" />
        <meta name="twitter:description" content="Consultez les mentions légales du site ClicketPaf, incluant des informations sur l'éditeur, l'hébergement, la protection des données et plus encore." />
        <meta name="twitter:image" content="/images/logo-click-et-paf.webp" />
      </Helmet>

      <Navbar />
      <Header title="Mentions Légales" />

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
              <span className="hover:text-blue-500">Mentions Légales</span>
            </li>
          </ul>
        </div>
      </nav>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-left">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Mentions Légales</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Éditeur du site</h3>
            <p className="text-lg text-gray-700 mb-6">
              <strong className="text-gray-800">Nom de l’entreprise :</strong> ClicketPaf <br />
              <strong className="text-gray-800">Forme juridique :</strong> Société par Actions Simplifiée (SAS) <br />
              <strong className="text-gray-800">Capital social :</strong> 10 000 € <br />
              <strong className="text-gray-800">Adresse :</strong> 123 Rue de l'Imprévu, 75000 Paris, France <br />
              <strong className="text-gray-800">Téléphone :</strong> +33 1 23 45 67 89 <br />
              <strong className="text-gray-800">Email :</strong> <a href="mailto:contact@click-et-paf.com" className="text-blue-600 hover:underline">contact@click-et-paf.com</a> <br />
              <strong className="text-gray-800">Numéro SIRET :</strong> 123 456 789 00012 <br />
              <strong className="text-gray-800">Numéro TVA intracommunautaire :</strong> FR12345678901
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hébergement</h3>
            <p className="text-lg text-gray-700 mb-6">
              <strong className="text-gray-800">Nom :</strong> Vercel <br />
              <strong className="text-gray-800">Forme juridique :</strong> Société par Actions Simplifiée (SAS) <br />
              <strong className="text-gray-800">Adresse :</strong> 340 S. Lemon Ave #4143, Walnut, CA 91789, États-Unis <br />
              <strong className="text-gray-800">Téléphone :</strong> +1 844 950 7760 <br />
              <strong className="text-gray-800">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.vercel.com</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conditions d’utilisation</h3>
            <p className="text-lg text-gray-700 mb-6">
              En accédant et en utilisant ce site, l’utilisateur accepte les conditions générales d’utilisation. Il est interdit de publier des contenus illicites, diffamatoires, ou de toute nature qui enfreindrait la loi applicable. Toute utilisation abusive ou malveillante du site pourra entraîner des sanctions ou des poursuites judiciaires.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cookies</h3>
            <p className="text-lg text-gray-700 mb-6">
              Le site utilise des cookies afin d’améliorer l’expérience de navigation et de personnaliser le contenu. Vous pouvez désactiver l’utilisation des cookies à tout moment dans les paramètres de votre navigateur.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Liens hypertextes</h3>
            <p className="text-lg text-gray-700 mb-6">
              Ce site peut contenir des liens hypertextes vers d’autres sites. ClicketPaf ne peut être tenu responsable du contenu des sites externes vers lesquels ces liens pointent. Ces liens sont fournis uniquement à titre informatif.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Limitation contractuelles sur les données</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf s’efforce de garantir la sécurité des données de ses utilisateurs, mais ne peut être tenu responsable des pertes de données dues à des défaillances techniques ou à des actions malveillantes. Il est de la responsabilité de l'utilisateur de sauvegarder ses propres données.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h3>
            <p className="text-lg text-gray-700 mb-6">
              Le contenu de ce site, incluant mais ne se limitant pas aux textes, images, graphismes, logos, vidéos et icônes, est la propriété exclusive de ClicketPaf ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou exploitation non autorisée de ces éléments est interdite.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Déclaration à la CNIL</h3>
            <p className="text-lg text-gray-700 mb-6">
              Conformément à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978, ce site est déclaré auprès de la CNIL sous le numéro [numéro de déclaration]. Vous disposez d’un droit d’accès, de rectification et de suppression des données personnelles vous concernant.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Données personnelles</h3>
            <p className="text-lg text-gray-700 mb-6">
              Les informations personnelles collectées sur ce site sont utilisées uniquement dans le cadre légal prévu en France pour le respect de la vie privée. ClicketPaf s’engage à ne pas vendre, partager ou divulguer vos données personnelles à des tiers sans votre accord. Vous disposez de droits d’accès, de rectification, de suppression et d’opposition sur vos données personnelles.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Conformément à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 et au RGPD (Règlement Général sur la Protection des Données), vous pouvez exercer ces droits en envoyant une demande par email à{' '}
              <a href="mailto:contact@click-et-paf.com" className="text-blue-600 hover:underline">contact@click-et-paf.com</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Modifications des mentions légales</h3>
            <p className="text-lg text-gray-700 mb-6">
              ClicketPaf se réserve le droit de modifier ou mettre à jour les présentes mentions légales à tout moment et sans préavis. Les utilisateurs sont invités à les consulter régulièrement pour rester informés des éventuelles modifications.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalMentions;
