import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
                <title>Politique de confidentialité | ClicketPaf</title>
                <meta
                    name="description"
                    content="Consultez la politique de confidentialité du site ClicketPaf, incluant des informations sur la collecte et l'utilisation de vos données personnelles."
                />
                 <meta name="robots" content="noindex, nofollow" />
                 <meta property="og:type" content="website" />
                <meta property="og:url" content="https://click-et-paf.com/" />
                <link rel="canonical" href="https://click-et-paf.com/mentions-legales" />
            </Helmet>
            
            <Navbar />
            <Header title="Politique de Confidentialité" />

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
                            <span className="hover:text-blue-500">Politique de Confidentialité</span>
                        </li>
                    </ul>
                </div>
            </nav>

            <section id="privacy-policy" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Politique de Confidentialité</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
                            Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et partageons vos informations personnelles lorsque vous visitez notre site web. Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément aux lois en vigueur.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Collecte des données personnelles</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous collectons des informations personnelles lorsque vous remplissez un formulaire de contact, vous vous inscrivez à notre newsletter, ou interagissez avec notre site d'une autre manière. Ces informations peuvent inclure votre nom, votre adresse email, votre adresse IP, et d'autres données pertinentes pour nous permettre de répondre à vos demandes.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Utilisation des données personnelles</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Les informations personnelles que nous collectons sont utilisées pour répondre à vos demandes, améliorer notre service, vous envoyer des communications marketing (si vous avez accepté de les recevoir), et assurer le bon fonctionnement du site.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Partage des données personnelles</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos données avec des prestataires de services tiers qui nous aident à exploiter notre site et à vous fournir des services, mais ces tiers sont tenus de respecter la confidentialité de vos informations.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Sécurité des données</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre l'accès non autorisé, la divulgation, la modification et la destruction. Cependant, aucune méthode de transmission sur Internet n'est totalement sécurisée, et nous ne pouvons garantir la sécurité absolue de vos informations.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Vos droits</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Conformément à la législation sur la protection des données, vous avez le droit d'accéder à vos données personnelles, de les rectifier, de les supprimer, de vous opposer à leur traitement ou de demander leur portabilité. Vous pouvez exercer ces droits en nous contactant directement à l'adresse email suivante : <a href="mailto:contact@click-et-paf.com" className="text-blue-600">contact@click-et-paf.com</a>.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Ce site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte stocké sur votre appareil. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités du site.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Modifications de la politique de confidentialité</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page, et la date de la dernière mise à jour sera indiquée au bas de cette politique.
                        </p>

                        <p className="text-lg text-gray-700 mb-6">
                            En utilisant notre site, vous acceptez les termes de cette politique de confidentialité.
                        </p>

                        <div className="mt-8 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Contact</h3>
                            <p className="text-gray-700">
                                Si vous avez des questions concernant notre politique de confidentialité, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:contact@click-et-paf.com" className="text-blue-600">contact@click-et-paf.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
