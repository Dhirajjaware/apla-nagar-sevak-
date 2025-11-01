import React from "react";

const News = () => {
  const newsUpdates = [
    {
      date: "२८ ऑक्टोबर २०२५",
      title: "मोठी सभा यशस्वी",
      desc: "५००० लोकांची उपस्थिती",
    },
    {
      date: "२५ ऑक्टोबर २०२५",
      title: "घरोघर भेट मोहीम",
      desc: "१०,००० घरांना भेट",
    },
    {
      date: "२० ऑक्टोबर २०२५",
      title: "विकास प्रकल्प जाहीर",
      desc: "भविष्याची योजना",
    },
  ];

  return (
    <section id="news" className="py-12 sm:py-20 px-4 sm:px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-green-600 mb-4">
          ताज्या बातम्या
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">
          मोहिमेची अपडेट्स
        </p>
        <div className="space-y-4 sm:space-y-6">
          {newsUpdates.map((news, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 border-l-4 border-green-500 hover:shadow-2xl hover:scale-102 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="bg-green-50 rounded-lg px-3 sm:px-4 py-2 text-green-700 font-bold text-sm whitespace-nowrap">
                  Calendar {news.date}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {news.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
