import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import AboutSection from './components/AboutSection';
import CateringServices from './components/CateringServices';
import MasterChef from './components/MasterChef';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <AboutSection />
      <CateringServices />
      <MasterChef />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;