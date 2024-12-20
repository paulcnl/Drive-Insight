import "./confirmVehicle.css";
import FilAriane from "../../components/FilAriane";

function Confirm() {
  return (
    <>
      <FilAriane />
      <h1>confirm</h1>
      <div className="confirm_cards">
        <h2>Mon vehicule 1</h2>
        <h2>Mon vehicule 2</h2>
        <h2>Mon verhicule 3</h2>
      </div>
      <div className="btn_confirm_cards">
        <button type="button">Valider</button>
      </div>
    </>
  );
}

export default Confirm;
