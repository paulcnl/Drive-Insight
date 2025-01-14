import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilAriane from "../../components/FilAriane";
import "./Habits.css";

function Habits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleData } = location.state || {};

  const [distance, setDistance] = useState("");
  const [frequency, setFrequency] = useState("");
  const [option, setOption] = useState("jour");

  const handleSubmit = () => {
    const habitsData = {
      distance: Number.parseFloat(distance),
      frequency: Number.parseFloat(frequency),
      option,
    };
    navigate("/options", { state: { vehicleData, habitsData } });
  };

  return (
    <>
      <FilAriane
        currentStep="Habits"
        progress={{
          Matricule: true,
          Habits: true,
          Options: false,
          Results: false,
        }}
      />
      <div className="habits">
        <h2>Mes habitudes</h2>
        <div className="habits-container">
          <div className="input-container">
            <label htmlFor="distance"> distance</label>
            <input
              type="text"
              name="distance"
              id="distance"
              className="distance-input"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <p>km</p>
          <div className="input-container">
            <label htmlFor="frequence"> frequence</label>
            <input
              type="text"
              name="frequence"
              id="frequence"
              className="frequence-input"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="frequence"> </label>
            <select
              name="option"
              id="habits-option"
              className="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="jour">jours </option>
              <option value="mois">mois </option>
              <option value="années">années </option>
            </select>
          </div>
        </div>
        <button type="button" onClick={handleSubmit}>
          Valider
        </button>
      </div>
    </>
  );
}

export default Habits;
