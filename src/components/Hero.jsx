import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const candidateInfo = {
    name: "मयूर सुबास भोई",
    ward: "प्रभाग क्र. 5",
    area: "भोई गल्ली, तळोदा",
  };

  const images = [
    "/src/assets/img/nagar-sevak.png",
    "/src/assets/img/ns-preview.png",
    "/src/assets/img/IMG_7708-removebg-preview.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Play music on any click anywhere on the page
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    // Play on any click or touch
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("touchstart", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        background:
          "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #4caf50 100%)",
      }}
    >
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/src/assets/music/ala-nagar-sevak.mp3" type="audio/mpeg" />
      </audio>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-6xl">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${candidateInfo.name} - ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-7xl sm:text-9xl mb-3 animate-bounce">
            <img
              className="block mx-auto"
              src="/src/assets/img/Bharatiya_Janata_Party_logo.svg.png"
              width="100px"
            />
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
          {candidateInfo.name}
        </h1>
        <p className="text-xl sm:text-3xl text-white font-bold mb-3 drop-shadow-lg">
          भारतीय जनता पक्ष उमेदवार
        </p>
        <p className="text-lg sm:text-2xl text-white mb-6 font-semibold drop-shadow-lg">
          {candidateInfo.ward} | {candidateInfo.area}
        </p>
        <div className="text-2xl sm:text-4xl font-bold text-white mb-8 drop-shadow-xl">
          "आपल्या मताने विकासाच्या वाटेवर!"
        </div>
        <div className="flex mb-5 flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-white text-orange-600 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition-all text-base sm:text-lg"
          >
            पाठिंबा द्या
          </button>
          <button
            onClick={() => scrollToSection("promises")}
            className="w-full sm:w-auto bg-green-600 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl hover:scale-105 transition-all text-base sm:text-lg"
          >
            आपला सेवक
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
