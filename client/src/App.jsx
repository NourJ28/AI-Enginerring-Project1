import { useState } from "react";
import outfitData from "./data/outfits.json";
import "./App.css";

function App() {
  const [occasion, setOccasion] = useState("School");
  const [style, setStyle] = useState("Casual");
  const [weather, setWeather] = useState("Sunny");
  const [outfit, setOutfit] = useState(null);

  const generateOutfit = () => {
    const recommendedOutfit = {
      top: outfitData.tops[occasion][style],
      bottom: outfitData.bottoms[style],
      shoes:
        weather === "Rainy"
          ? "Waterproof Boots"
          : outfitData.shoes[style],
      extra: outfitData.weatherExtras[weather]
    };

    setOutfit(recommendedOutfit);
  };

  return (
    <div className="container">
      <h1>StyleFit</h1>
      <p>Find the perfect outfit for any occasion.</p>

      <div className="form">
        <label>Occasion</label>
        <select
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            setOutfit(null);
          }}
        >
          <option value="School">School</option>
          <option value="Party">Party</option>
          <option value="Work">Work</option>
        </select>

        <label>Style</label>
        <select
          value={style}
          onChange={(e) => {
            setStyle(e.target.value);
            setOutfit(null);
          }}
        >
          <option value="Casual">Casual</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Classic">Classic</option>
        </select>

        <label>Weather</label>
        <select
          value={weather}
          onChange={(e) => {
            setWeather(e.target.value);
            setOutfit(null);
          }}
        >
          <option value="Sunny">Sunny</option>
          <option value="Rainy">Rainy</option>
          <option value="Cold">Cold</option>
        </select>

        <button onClick={generateOutfit}>
          Generate Outfit
        </button>
      </div>

      {outfit && (
        <div className="result">
          <h2>Your Recommended Outfit</h2>

          <p>👕 Top: {outfit.top}</p>
          <p>👖 Bottom: {outfit.bottom}</p>
          <p>👟 Shoes: {outfit.shoes}</p>
          <p>🧥 Extra: {outfit.extra}</p>
        </div>
      )}
    </div>
  );
}

export default App;
