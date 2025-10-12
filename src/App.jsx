import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fadeIn">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-indigo-50">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fade-in animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fadeIn");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
            PredictX
          </h1>
          <nav className="hidden md:flex gap-8 text-gray-700">
            {["Features", "Download", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
            <nav className="flex flex-col items-center py-4 space-y-4">
              {["Features", "Download", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-600 transition"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-center animate-fadeIn">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Smarter Predictions. Better Trades.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            PredictX helps you make data-driven predictions in stocks, crypto,
            and more — powered by AI.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#download"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md transition-transform transform hover:scale-105"
            >
              Download Now
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-transform transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Live Signals"
              desc="Get timely, human-reviewed signals delivered in-app and via push."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="AI Predictions"
              desc="Our models analyze trends to provide reliable forecasts."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12v6"
                  />
                </svg>
              }
            />
            <FeatureCard
              title="Multi-Market"
              desc="Use PredictX for stocks, forex, and crypto in one app."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3v18h18"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 text-center animate-fadeIn"
      >
        <h3 className="text-3xl font-bold mb-6">Download PredictX</h3>
        <p className="text-gray-600 mb-8">Available for Android and iOS.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Android Download
          </a>
          <a
            href="https://apple.com/app-store"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md"
          >
            iOS Download
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white animate-fadeIn">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            Simple Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                plan: "Starter",
                price: "₹99/week",
                features: ["Basic signals", "1 market access"],
              },
              {
                plan: "Pro",
                price: "₹299/month",
                features: ["AI predictions", "3 market access"],
              },
              {
                plan: "Elite",
                price: "₹599/Quarterly",
                features: ["Full access", "Priority updates"],
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl text-center hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-2">{p.plan}</h4>
                <p className="text-3xl font-bold mb-4">{p.price}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-10 bg-gray-900 text-gray-400 text-center animate-fadeIn"
      >
        <p>© {new Date().getFullYear()} PredictX. All rights reserved.</p>
        <p className="mt-2">Contact: support@predictx.app</p>
      </footer>
    </div>
  );
}
