import "./Habits.css";

function Habits() {
  return (
    <>
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="frequence"> </label>
            <select name="option" id="habits-option" className="option">
              <option value="jour">jours </option>
              <option value="mois">mois </option>
              <option value="années">années </option>
            </select>
          </div>
        </div>
        <div className="habits-container">
          <div className="input-container">
            <label htmlFor="distance"> distance</label>
            <input
              type="text"
              name="distance"
              id="distance"
              className="distance-input"
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="frequence"> </label>
            <select name="option" id="habits-option" className="option">
              <option value="jour">jours </option>
              <option value="mois">mois </option>
              <option value="années">années </option>
            </select>
          </div>
        </div>
        <div className="button-cont">
          <button type="button">valider</button>
        </div>
      </div>
    </>
  );
}

export default Habits;
