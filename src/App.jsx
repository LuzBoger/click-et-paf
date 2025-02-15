import { Helmet} from 'react-helmet';
// import './App.css';
import ArticleCard from './components/ArticleCard';
import Service from './components/Services';
import Discover from './components/Discover';

import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Reviews from './components/Reviews';
import HowItWorks from './components/HowItWorks';
import Partnerships from './components/Partnerships';



function App() {
  return (
    <>
      <Helmet>
        <title>ClicketPaf | Pour des expériences insolites et uniques</title>
        <meta
          name="description"
          content="ClicketPaf vous propose des expériences insolites et amusantes, parfaites pour surprendre vos proches avec des moments uniques et décalés. Découvrez nos services exclusifs." />
        <meta
          name="keywords"
          content="click,paf,click&paf,click-et-paf,ClicketPaf,expériences uniques, expériences insolites,expériences, expériences surprenantes,gifle, expériences décalées, moments uniques, humour, surprise, donner une gifle, recevoir une gifle"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://click-et-paf.com" />
        <meta property="og:url" content="https://click-et-paf.com" />
        <meta property="og:title" content="ClicketPaf | Pour des expériences insolites et uniques" />
        <meta
          property="og:description"
          content="Transformez votre quotidien avec ClicketPaf. Découvrez des expériences uniques, pour ajouter une touche d’absurde à votre vie."
        />
        <meta property="og:image" content="/images/logo-click-et-paf.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClicketPaf | Pour des expériences insolites et uniques" />
        <meta
          name="twitter:description"
          content="Transformez votre quotidien avec ClicketPaf. Découvrez des expériences uniques, pour ajouter une touche d’absurde à votre vie."
        />
        <meta name="twitter:image" content="/images/logo-click-et-paf.webp" />
        <meta author="ClicketPaf" />

      </Helmet>
      <Header title="Bienvenue sur ClicketPaf" subtitle="Faites sensation en offrant des gifles à vos proches !" />

      <main>
        <Discover />
        <HowItWorks />
        <Service />
        <ArticleCard />
        <Reviews />
        <Partnerships />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
