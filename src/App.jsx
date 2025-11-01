import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import News from "./components/News.jsx";
import MapSection from "./components/MapSection.jsx";
import Achievements from "./components/Achievements.jsx";
import Promises from "./components/Promises.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import TopBanner from "./components/TopBanner.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <TopBanner />
      <Header />
      <Hero />
      <Countdown />
      <About />
      <Gallery />
      <News />
      <MapSection />
      <Achievements />
      <Promises />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
