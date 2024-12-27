const options = {
  "APPLE WATCH SERIES 10": {
    description: "46mm Jet Black Aluminum Case with Black Solo Loop",
    price: 429,
  },
  "Apple Watch Hermes Series 10": {
    description: "46mm Silver Titanium Case with Satiné Grand H",
    price: 1949,
  },
  "Apple Watch SE": {
    description: "44mm Silver Aluminum Case with Star Fruit Solo Loop",
    price: 279,
  },
};

const ProductDetails = ({ selectedOption }) => {
  const optionDetails = options[selectedOption] || {};

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="text-xs text-[#6e6e73] font-semibold">
        {selectedOption || "APPLE WATCH SERIES 10"}
      </div>
      <div className="font-semibold text-sm text-[#1d1d1f] mt-1">
        {optionDetails.description ||
          "46mm Jet Black Aluminum Case with Black Solo Loop"}
      </div>
      <div className="text-sm mt-1">
        {optionDetails.price ? `From $${optionDetails.price}` : "From $429"}
      </div>
    </div>
  );
};

export default ProductDetails;
