import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contactez-Nous | ClicketPaf</title>
                <meta name="description" content="Contactez l'équipe de ClicketPaf pour toute question, idée, ou demande d'information." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://click-et-paf.com/contact" />
                <meta property="og:url" content="https://www.click-et-paf.com/contact" />
                <meta property="og:title" content="Contactez-Nous | ClicketPaf<" />
                <meta property="og:description" content="Contactez l'équipe de ClicketPaf pour toute question, idée, ou demande d'information." />
                <meta property="og:image" content="/images/logo-click-et-paf.webp" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contactez-Nous | ClicketPaf<" />
                <meta name="twitter:description" content="Contactez l'équipe de ClicketPaf pour toute question, idée, ou demande d'information." />
                <meta name="twitter:image" content="/images/logo-click-et-paf.webp" />
            </Helmet>

            <Header title="Contactez-Nous" />

            <nav className="bg-gray-200 py-3">
                <div className="container mx-auto px-6">
                    <ul className="flex text-sm text-gray-700">
                        <li>
                            <a href="https://click-et-paf.com/" className="hover:text-blue-500">
                                <span>Accueil</span>
                            </a>
                            <span className="mx-2">/</span>
                        </li>
                        <li>
                            <span className="hover:text-blue-500">Contact</span>
                        </li>
                    </ul>
                </div>
            </nav>

            <section id="contact" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nous Contacter</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
                            Une question, une idée, ou simplement envie de nous écrire ? Remplissez le formulaire ci-dessous ou contactez-nous directement via nos coordonnées. Votre satisfaction est notre priorité !
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Votre nom complet"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Votre adresse email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Votre message"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Envoyer
                            </button>
                        </form>

                        <div className="mt-8 text-left bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Nos coordonnées</h3>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-700">
                                    <span className="font-medium text-gray-900">Email : </span>
                                    contact@click-et-paf.com
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium text-gray-900">Téléphone : </span>
                                    +33 1 23 45 67 89
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium text-gray-900">Adresse : </span>
                                    25 rue des Renaudes, 75017 Paris, France
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
