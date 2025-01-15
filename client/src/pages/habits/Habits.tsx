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
  const [distanceError, setDistanceError] = useState("");
  const [frequencyError, setFrequencyError] = useState("");

  const validateNumber = (value: string) => {
    return /^\d*\.?\d*$/.test(value);
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateNumber(value)) {
      setDistance(value);
      setDistanceError("");
    } else {
      setDistanceError("Veuillez entrer un nombre valide");
    }
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateNumber(value)) {
      setFrequency(value);
      setFrequencyError("");
    } else {
      setFrequencyError("Veuillez entrer un nombre valide");
    }
  };

  const isFormValid =
    distance !== "" &&
    frequency !== "" &&
    !distanceError &&
    !frequencyError &&
    validateNumber(distance) &&
    validateNumber(frequency);

  const handleSubmit = () => {
    if (!isFormValid) return;

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
            <div className="input-container-distance">
              <label htmlFor="distance">Distance parcourue (en km)</label>
              <input
                type="text"
                name="distance"
                className={`distance-input ${distanceError ? "error-habits" : ""}`}
                value={distance}
                onChange={handleDistanceChange}
              />
            </div>
            {distanceError && (
              <span className="error-message-habits">{distanceError}</span>
            )}
          </div>
          <div className="input-container">
            <label className="frequency-label" htmlFor="frequence">
              Quelle fréquence ?
            </label>
            <div className="input-container-frequency">
              <input
                type="text"
                name="frequence"
                className={`frequence-input ${frequencyError ? "error-habits" : ""}`}
                value={frequency}
                onChange={handleFrequencyChange}
              />
              <select
                name="frequence"
                className="option"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="jour">Quotidien </option>
                <option value="semaine">Hebdomadaire </option>
                <option value="mois">Mensuel </option>
                <option value="années">Annuel </option>
              </select>
            </div>
            {frequencyError && (
              <span className="error-message-habits">{frequencyError}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`validate-button ${!isFormValid ? "disabled" : ""}`}
        >
          Valider
        </button>
      </div>
    </>
  );
}

export default Habits;
