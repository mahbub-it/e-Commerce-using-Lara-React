import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Core Layout Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FooterFixedMobile from "../Components/FooterFixedMobile";
import LoginForm from "../Components/LoginForm";
import CardDrawer from "../Components/CardDrawer";
import SiteMap from "../Components/SiteMap";
import QuickView from "../Components/QuickView";
import NewsLetterPopup from "../Components/NewsLetterPopup";
import PageOverlay from "../Components/PageOverlay";
import ScrollToTop from "../Components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

// Page Component Targets (Ensure src/Pages/ folder exists)
import Shop from "./Shop";
import ProductDetail from "./ProductDetail";
import Main from "../Components/Main";

const Home = () => {
  // Global UI States
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(true);

  // Close actions
  const closeAllOverlays = () => setActiveOverlay(null);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  return (
    <>
      {/* Navigation triggers */}
        <Header 
          onOpenLogin={() => setActiveOverlay('login')}
          onOpenCart={() => setActiveOverlay('cart')}
          onOpenSitemap={() => setActiveOverlay('sitemap')}
        />

        {/* 3. Main Section container wraps the core application page views */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            {/* Dynamic route using the :slug parameter */}
            <Route path="/product/:slug" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
        
        <FooterFixedMobile 
          onOpenLogin={() => setActiveOverlay('login')}
          onOpenCart={() => setActiveOverlay('cart')}
          onOpenSitemap={() => setActiveOverlay('sitemap')}
        />

        {/* Conditional global modules */}
        {activeOverlay === 'login' && <LoginForm onClose={closeAllOverlays} />}
        {activeOverlay === 'cart' && <CardDrawer onClose={closeAllOverlays} />}
        {activeOverlay === 'sitemap' && <SiteMap onClose={closeAllOverlays} />}
        {activeOverlay === 'quickview' && <QuickView onClose={closeAllOverlays} />}

        {isNewsletterOpen && <NewsLetterPopup onClose={closeNewsletter} />}

        <ScrollToTop />

        {activeOverlay && <PageOverlay onClick={closeAllOverlays} />}
    </>
  );
};

export default Home;
