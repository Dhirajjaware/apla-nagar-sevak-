const TopBanner = () => {
  const electionDate = "2025-12-15";

  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-2 px-2 text-center text-xs sm:text-sm font-semibold animate-pulse relative z-50">
      निवडणूक {new Date(electionDate).toLocaleDateString("mr-IN")} - आपला मत,
      आपली शक्ती <span className="text-2xl animate-bounce">🗳️</span>
    </div>
  );
};

export default TopBanner;
