import React from "react";
import { WhatsApp } from "./icons";

const FloatingWhatsApp = () => {
  const whatsapp = "919876543210";

  return (
    <a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
    >
      <WhatsApp />
    </a>
  );
};

export default FloatingWhatsApp;
