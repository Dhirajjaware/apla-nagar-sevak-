import React from "react";

const Gallery = () => {
  const galleryItems = [
    { emoji: "🎤", label: "सार्वजनिक सभा" },
    { emoji: "🤝", label: "लोकभेटी" },
    { emoji: "🎉", label: "कार्यक्रम" },
    { emoji: "📸", label: "सेवाकार्य" },
    { emoji: "🏆", label: "पुरस्कार" },
    { emoji: "👥", label: "सहकारी" },
    { emoji: "🚩", label: "रॅली" },
    { emoji: "📰", label: "वृत्तपत्र" },
  ];

  return (
    <section
      id="gallery"
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-orange-100 to-green-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-orange-600 mb-8 sm:mb-12">
          गॅलरी
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-orange-500/50 transition-all duration-500 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500">
                <div className="text-4xl sm:text-6xl mb-2 sm:mb-3">
                  {item.emoji}
                </div>
                <div className="text-sm sm:text-base font-bold px-2 text-center">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          * वास्तविक फोटो येथे जोडा
        </p>
      </div>
    </section>
  );
};

export default Gallery;
