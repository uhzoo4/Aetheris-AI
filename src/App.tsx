import { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Navbar } from './components/sections/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { TrustedBy } from './components/sections/TrustedBy/TrustedBy';
import { FeatureShowcase } from './components/sections/FeatureShowcase/FeatureShowcase';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { Pricing } from './components/sections/Pricing/Pricing';
import { CTA } from './components/sections/CTA/CTA';
import { Footer } from './components/sections/Footer/Footer';
import { Login } from './components/sections/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <MainLayout>
      <Navbar 
        onLoginClick={() => setShowLogin(true)} 
        onLinkClick={() => setShowLogin(false)} 
        showLogin={showLogin} 
      />
      {showLogin ? (
        <Login onClose={() => setShowLogin(false)} />
      ) : (
        <main className="pt-20">
          <Hero />
          <TrustedBy />
          <FeatureShowcase />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
      )}
      <Footer />
    </MainLayout>
  );
}

export default App;
