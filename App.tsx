
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));

const Loading = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black">
        <Header />
        <main className="flex-grow pt-20">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </Router>
  );
};

export default App;
