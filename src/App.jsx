import { Helmet, HelmetProvider } from 'react-helmet-async';
// import './App.css';
import ArticleCard from './components/ArticleCard';
import Service from './components/Services';
import Discover from './components/Discover';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Reviews from './components/Reviews';
import HowItWorks from './components/HowItWorks';
import Partenariats from './components/Partnerships';
import Partnerships from './components/Partnerships';



function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>ClicketPaf | Pour des expériences insolites et uniques</title>
        <meta
          name="description"
content="ClicketPaf vous propose des expériences insolites et amusantes, parfaites pour surprendre vos proches avec des moments uniques et décalés. Découvrez nos services exclusifs." />
        <meta
          name="keywords"
          content="click,paf,click&paf,click-et-paf,ClicketPaf,concours de gifle, expériences insolites,expériences, expériences surprenantes,gifles, expériences décalées, moments uniques, humour,services, surprises"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://click-et-paf.com" />
        <meta property="og:url" content="https://www.click-et-paf.com" />
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

      </Helmet>
      <NavBar />
      <Header title="Bienvenue sur ClicketPaf" subtitle="Faites sensation en offrant des gifles à vos proches !" />
      <Discover />
      <HowItWorks />

      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Nos Services</h2>
          <Service />
        </div>
      </section>

      <article id="articles" className="py-16 ">
        <ArticleCard />
      </article>

      <Reviews />
      <Partnerships />
      <FAQ />

      <Footer />
    </HelmetProvider>
  );
}

export default App;
