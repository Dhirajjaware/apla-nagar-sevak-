import React from "react";

const MapSection = () => {
  const candidateInfo = {
    ward: "प्रभाग क्र. 5",
    area: "भोई गल्ली, तळोदा",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.5245379960188!2d74.21269975054705!3d21.56126672003987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf9e03868a1d3f%3A0x39edae4f070dd472!2sBhoi%20Galli%2C%20Taloda%2C%20Maharashtra%20425413!5e1!3m2!1sen!2sin!4v1761996220036!5m2!1sen!2sin",
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-orange-600 mb-4">
          माझा प्रभाग
        </h2>
        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          {candidateInfo.ward} - {candidateInfo.area}
        </p>
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
          <iframe
            src={candidateInfo.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ward Map"
            className="w-full h-64 sm:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
