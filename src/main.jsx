import { StrictMode } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Articles from './pages/Articles/Articles.jsx';
import Article from './pages/Articles/Article.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notre-histoire" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Articles />} />
        <Route path="/article/:slug" element={<Article />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
