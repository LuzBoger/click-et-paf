import { StrictMode } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Articles from './pages/Articles/Articles.jsx';
import Article from './pages/Articles/Article.jsx';
import AboutUs from './pages/AboutUs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/a-propos-de-nous" element={<AboutUs />} />
        <Route path="/article/:slug" element={<Article />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
