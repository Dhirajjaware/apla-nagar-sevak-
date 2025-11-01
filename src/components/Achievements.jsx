import React from "react";

const Achievements = () => {
  const achievements = [
    {
      icon: "Construction",
      title: "रस्ते विकास",
      desc: "५० किमी नवीन रस्ते बांधले",
    },
    { icon: "Droplet", title: "पाणी पुरवठा", desc: "२४×७ स्वच्छ पाणी सुविधा" },
    {
      icon: "Lightbulb",
      title: "विद्युतीकरण",
      desc: "सर्व भागात स्ट्रीट लाइट",
    },
    { icon: "School", title: "शिक्षण", desc: "३ नवीन शाळा उभारल्या" },
    { icon: "Hospital", title: "आरोग्य", desc: "मोफत आरोग्य तपासणी" },
    { icon: "Leaf", title: "स्वच्छता", desc: "५००+ झाडे लावली" },
  ];

  return (
    <section
      id="achievements"
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-8 sm:mb-12">
          माझी कामगिरी
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
