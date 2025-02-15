import React from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"
const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Notre Histoire | ClicketPaf</title>
        <meta name="description" content="Découvrez l'histoire de ClicketPaf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://click-et-paf.com/notre-histoire" />
        <meta property="og:url" content="https://www.click-et-paf.com/notre-histoire" />
        <meta property="og:title" content="Notre Histoire | ClicketPaf" />
        <meta property="og:description" content="Découvrez l'histoire de ClicketPaf" />
        <meta property="og:image" content="/images/logo-click-et-paf.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notre Histoire | ClicketPaf" />
        <meta name="twitter:description" content="Découvrez l'histoire de ClicketPaf" />
        <meta name="twitter:image" content="/images/logo-click-et-paf.webp" />
      </Helmet>
      
      <Header title="Notre Histoire" />
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
                            <span className="hover:text-blue-500">Notre Histoire</span>
                        </li>
                    </ul>
                </div>
            </nav>
      <section id="discover" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              L’histoire de ClicketPaf commence dans un moment où l'absurde se rencontre avec la
              réalité. Deux amis, Martin et Sophie, se retrouvaient régulièrement à discuter autour d’un verre de vin, en observant les travers de la société
              moderne. Entre les conversations sérieuses sur le stress quotidien, les désirs de déconnexion, et les discussions sur les tendances de plus en
              plus étranges qui émergeaient autour d'eux, une question leur est venue en tête : Et si on pouvait offrir à tout le monde l’opportunité de se
              libérer de la pression quotidienne avec une expérience totalement décalée, réelle, et un peu choquante ?
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              C’est alors qu’a germé l’idée d’un service hors du commun : un ClicketPaf dans la vraie
              vie. Une plateforme commerciale qui offrirait des services où, d’un simple clic, une personne pourrait, par exemple, recevoir une gifle… ou bien
              expérimenter d'autres actions étonnantes pour sortir du cadre habituel de la vie quotidienne. Une manière inédite de se défouler, de créer un moment
              décalé et de rendre la vie un peu plus piquante, tout en garantissant sécurité et consentement.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              L’idée était à la fois absurde et audacieuse. Un service qui permettrait aux clients de vivre des sensations extrêmes, des actions physiques mais
              toujours dans un cadre de jeu, avec une approche humoristique et décalée.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Le concept a pris forme sous le nom de ClicketPaf : un service unique où les clients
              peuvent choisir parmi une sélection d'expériences physiques et inattendues, allant d’une gifle (lancée par des professionnels formés ou par vous mêmes) à des
              actions un peu plus farfelues. Tout est pensé pour offrir un moment de décompression totale, sans jugement.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              L'entreprise a vu le jour dans un petit local en plein centre-ville. Dès les premières semaines, la communauté a commencé à se développer, et les
              demandes sont devenues de plus en plus créatives. Les clients venaient de tous horizons pour se détendre d'une manière totalement inhabituelle,
              souvent en groupe, pour des anniversaires, des enterrements de vie de jeune fille/garçon, ou simplement pour passer un moment de folie entre amis.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              ClicketPaf s’est alors métamorphosée en une véritable entreprise, avec des prestations
              variées qui allaient bien au-delà des gifles : des actions décalées comme des cris de joie dans des endroits publics (mais avec la permission et
              sous surveillance), des interventions théâtrales dans la rue, des surprises en pleine réunion de travail, ou même des moments de "décompression"
              extrême où l'on peut s’autoriser à tout lâcher, de façon totalement respectueuse et consensuelle.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Le secret de notre succès ? Le respect de nos valeurs : sécurité, consentement et, bien sûr, une bonne dose d’humour. Nous avons compris que l’un des
              plus grands besoins des gens aujourd’hui est celui de se libérer des normes sociales et de vivre des moments absurdes qui, paradoxalement, permettent
              de se reconnecter à l’essentiel : le plaisir de rire, de surprendre et de se déconnecter de la pression du quotidien.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Aujourd’hui, ClicketPaf est bien plus qu’un simple service : c’est un mouvement, une
              manière nouvelle d’explorer la vie avec un brin de folie et une touche d’imprévu. Nous offrons à nos clients une chance de sortir des sentiers
              battus, de faire un pas de côté et de vivre une expérience mémorable. Car parfois, un petit coup de "paf" peut tout changer.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Alors, prêt à défier les conventions et à vivre l’expérience ClicketPaf dans la vraie vie ?
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
