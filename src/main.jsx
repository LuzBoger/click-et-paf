import { StrictMode } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Articles from './pages/Articles/Articles.jsx';
import Article from './pages/Articles/Article.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import LegalMentions from './pages/LegalMentions.jsx';
import PrivacyPolicy from './pages/PrivatePolicy.jsx';
import CGU from './pages/CGU.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notre-histoire" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Articles />} />
        <Route path="/blog/:category/:slug" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
