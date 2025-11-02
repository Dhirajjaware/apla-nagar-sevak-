import React from "react";

const Footer = () => {
  const candidateInfo = {
    name: "मयूर सुभाष भोई",
    ward: "प्रभाग क्र. 5",
    electionDate: "2025-12-15",
  };

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            {/* <div className="text-4xl">
              <img
                src="/assets/img/Bharatiya_Janata_Party_logo.svg.png"
                width="100px"
              />
            </div> */}
            <div>
              <div className="font-bold text-xl">{candidateInfo.name}</div>
              <div className="text-sm opacity-90">{candidateInfo.ward}</div>
            </div>
          </div>
          <div className="text-sm opacity-90">
            "आपल्या मताने विकासाच्या वाटेवर!"
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-sm opacity-80">
            © 2025 {candidateInfo.name}. |
            <span className="mx-2">भारतीय जनता पक्ष उमेदवार</span> |
            <span className="mx-2">
              निवडणूक:{" "}
              {new Date(candidateInfo.electionDate).toLocaleDateString("mr-IN")}
            </span>
          </p>
          <p className="text-xs opacity-60 mt-2">जय हिंद! जय महाराष्ट्र!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
