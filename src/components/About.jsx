import React from "react";

const About = () => {
  const candidateInfo = {
    name: "मयूर शुबास ढोले",
    area: "भोई गल्ली, तळोदा",
    ward: "प्रभाग क्र. 5",
  };

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-orange-600 mb-8 sm:mb-12">
          माझ्याविषयी
        </h2>
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 border-t-4 sm:border-t-8 border-orange-500">
          <div className="text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              मी {candidateInfo.name}, {candidateInfo.area} येथील{" "}
              {candidateInfo.ward} मधून भारतीय जनता पक्षाचा नगरसेवक उमेदवार आहे.
              गेल्या १५ वर्षांपासून मी समाजसेवेत सक्रिय आहे.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              माझा विश्वास आहे की प्रामाणिक नेतृत्व आणि समर्पित सेवेतूनच खरा
              विकास साध्य होतो.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {["प्रामाणिकता", "कष्टाळूपणा", "जनसेवा", "विकास"].map(
                (trait, i) => (
                  <div
                    key={i}
                    className="bg-orange-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-l-4 border-orange-500 font-bold text-orange-700 text-sm sm:text-base text-center"
                  >
                    Check {trait}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
