import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  WhatsApp,
} from "./icons/index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const candidateInfo = {
    phone: "+91 98765 43210",
    email: "rajesh.patil@bjp.org",
    area: "भोई गल्ली, तळोदा",
    ward: "प्रभाग क्र. 5",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "919876543210",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("धन्यवाद! आपला संदेश प्राप्त झाला आहे.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-orange-50 to-green-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-center text-orange-600 mb-4">
          संपर्क साधा
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg">
          आपले मतदान, आपला विश्वास - विकासासाठी एकत्र
        </p>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border-t-4 border-orange-500">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              संदेश पाठवा
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="आपले नाव"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="tel"
                placeholder="मोबाईल नंबर"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                placeholder="आपला संदेश"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                संदेश पाठवा
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border-t-4 border-green-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                संपर्क माहिती
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Phone />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {candidateInfo.phone}
                    </p>
                    <p className="text-sm text-gray-600">फोन नंबर</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Mail />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {candidateInfo.email}
                    </p>
                    <p className="text-sm text-gray-600">ईमेल</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MapPin />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {candidateInfo.area}
                    </p>
                    <p className="text-sm text-gray-600">
                      {candidateInfo.ward}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">सोशल मीडिया</h4>
                <div className="flex gap-4">
                  <a
                    href={candidateInfo.facebook}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Facebook />
                  </a>
                  <a
                    href={candidateInfo.instagram}
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <Instagram />
                  </a>
                  <a
                    href={`https://wa.me/${candidateInfo.whatsapp}`}
                    className="text-green-600 hover:text-green-800"
                  >
                    <WhatsApp />
                  </a>
                </div>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl text-lg">
              Ballot Box मला पाठिंबा द्या - विकासासाठी मतदान करा Ballot Box
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
