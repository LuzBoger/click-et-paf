import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import ArticleCard from './components/ArticleCard';
import AboutUs from './components/AboutUs';
import Services from './components/Services';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Click-et-Paf | Offrez des Gifles et des Expériences Uniques</title>
        <meta
          name="description"
          content="Click-et-Paf vous propose des services uniques pour surprendre vos proches avec des gifles décalées, des expériences insolites et des moments inoubliables. Découvrez nos formules originales pour pimenter votre quotidien et offrir des souvenirs mémorables."
        />
        <meta
          name="keywords"
          content="Click-et-Paf, services insolites, gifles humoristiques, expériences décalées, moments mémorables, idées originales, surprises drôles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://click-et-paf.com" />
        <meta property="og:title" content="Click-et-Paf | Services Déjantés pour des Moments Inoubliables" />
        <meta
          property="og:description"
          content="Surprenez vos proches avec des gifles virtuelles et des expériences insolites grâce à Click-et-paf. Offrez des moments uniques et mémorables avec notre service en ligne."
        />
        <meta property="og:image" content="../../../public/images/logo_click_et_paf.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Click-et-Paf | Services Déjantés pour des Moments Inoubliables" />
        <meta
          name="twitter:description"
          content="Transformez votre quotidien avec Click-et-Paf. Découvrez des expériences surprenantes, comme les gifles humoristiques, pour ajouter une touche d’absurde à votre vie."
        />
        <meta name="twitter:image" content="../../../public/images/logo_click_et_paf.webp" />
      </Helmet>

      <AboutUs />
      <Services />
      <ArticleCard />
    </HelmetProvider>
  );
}

export default App;
