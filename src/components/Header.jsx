import React, { useState } from "react";
import { Menu, X } from "./icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const candidateInfo = {
    name: "मयूर सुभाष भोई",
    ward: "प्रभाग क्र. 5",
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-2xl">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
              <img
                src="/assets/img/Bharatiya_Janata_Party_logo.svg.png"
                alt="BJP Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-2xl  sm:text-xl">
                {candidateInfo.name}
              </div>
              <div className="text-xs opacity-90">{candidateInfo.ward}</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {["about", "promises", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-orange-200 transition font-semibold"
              >
                {section === "about" && "माझ्याविषयी"}
                {section === "promises" && "आश्वासने"}
                {section === "contact" && "संपर्क"}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-3 space-y-2">
            {["about", "promises", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 px-4 hover:bg-white/10 rounded-lg transition font-semibold"
              >
                {section === "about" && "माझ्याविषयी"}
                {section === "promises" && "आश्वासने"}
                {section === "contact" && "संपर्क"}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
