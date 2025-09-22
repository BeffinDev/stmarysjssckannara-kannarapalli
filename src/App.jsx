import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { Suspense, useEffect } from "react";

import './App.css'


// const HomePage = React.lazy(() => import("./pages/landingPages/HomePage"));

import HomePage from './pages/landingPages/HomePage';
import AboutPage from './pages/landingPages/AboutPage';
import ContactPage from './pages/landingPages/ContactPage';
import AdministrationPage from './pages/landingPages/AdministrationPage';
import SingleAboutPage from './pages/landingPages/SingleAboutPage';
import GalleryPage from './pages/landingPages/GalleryPage';
import SocialMediasPage from './pages/landingPages/SocialMediasPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import VowsAndOfferingsPage from './pages/landingPages/VowsAndOfferingsPage';
import Error404Page from './pages/landingPages/Error404Page';
import { HelmetProvider } from 'react-helmet-async';

function App() {


  return (
    <>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          {/* <Suspense fallback={<div className="loaderOverlay">Loading.....</div>}> */}
          <Routes>
            <Route path="*" element={<Error404Page />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/about/:id" element={<SingleAboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/social-media" element={<SocialMediasPage />} />
            <Route path="/vows-and-offerings" element={<VowsAndOfferingsPage />} />
          </Routes>
          {/* </Suspense> */}
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
