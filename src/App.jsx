import { Helmet, HelmetProvider } from 'react-helmet-async';
// import './App.css';
import ArticleCard from './components/ArticleCard';
import Service from './components/Services';
import Discover from './components/Discover';
import NavBar from './components/NavBar';

import Action from './components/Action';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Header from './components/Header';


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Click-et-Paf | Pour des expériences insolites et uniques</title>
        <meta
          name="description"
          content="Click-et-Paf propose des expériences insolites pour surprendre et amuser vos proches. Découvrez nos services uniques"
        />
        <meta
          name="keywords"
          content="Click-et-Paf, expériences insolites, expériences surprenante,gifles, expériences décalées, moments uniques, idées originales, services, surprises, humour"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ftAWunL-4c94Nb9eY0VWAQDyDcqcgp2snDELV1D-d08" />
        <meta property="og:url" content="https://click-et-paf.com" />
        <meta property="og:title" content="Click-et-Paf | Pour des expériences insolites et uniques" />
        <meta
          property="og:description"
          content="Transformez votre quotidien avec Click-et-Paf. Découvrez des expériences uniques, pour ajouter une touche d’absurde à votre vie."
        />
        <meta property="og:image" content="/images/logo_click_et_paf.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Click-et-Paf | Pour des expériences insolites et uniques" />
        <meta
          name="twitter:description"
          content="Transformez votre quotidien avec Click-et-Paf. Découvrez des expériences uniques, pour ajouter une touche d’absurde à votre vie."
        />
        <meta name="twitter:image" content="/images/logo_click_et_paf.webp" />
      </Helmet>
      <NavBar />
      <Header title="Bienvenue sur Click-et-Paf" subtitle="Faites sensation en offrant des gifles à vos proches !" />
      <Discover />
      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>
          <Service />
        </div>
      </section>


      <section id="articles" className="py-16 ">
        <ArticleCard />
      </section>
      <FAQ />

      <Footer />
    </HelmetProvider>
  );
}

export default App;
