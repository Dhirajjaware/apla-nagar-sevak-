import React from "react";

const Promises = () => {
  const promises = [
    "रस्ते आणि गटारे दुरुस्ती",
    "प्रत्येक घरी स्वच्छ पाणी पुरवठा",
    "डिजिटल वॉर्ड - सर्व सेवा ऑनलाइन",
    "महिला सुरक्षा - CCTV कॅमेरे",
    "युवा रोजगार योजना",
    "वरिष्ठ नागरिक कल्याण केंद्र",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promises" className="py-12 sm:py-20 px-4 sm:px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-orange-600 mb-4">
          माझी आश्वासने
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">
          तुमच्या विकासासाठी माझी वचनबद्धता
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {promises.map((promise, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 border-l-4 border-orange-500 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:text-3xl text-orange-500">✓</div>
                <p className="text-gray-700 font-semibold text-sm sm:text-base flex-1">
                  {promise}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base sm:text-lg"
          >
            🗳️ या आश्वासनांसाठी मला मतदान करा 🗳️
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promises;
