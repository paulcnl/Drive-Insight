import "./confirmVehicle.css";
import FilAriane from "../../components/FilAriane";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import type { Vehicle } from "../../types/types";

function Confirm() {
  const vehicles: Omit<
    Vehicle,
    "registrationDate" | "imageUrl" | "powerType"
  >[] = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, brand: "Honda", model: "Civic", year: 2019 },
  ];

  return (
    <>
      <FilAriane />
      <h1>confirm</h1>
      <div className="confirm_cards">
        <div className="item-confirm">
          <h2>Mon vehicule 1</h2>
          <VehicleCard vehicle={vehicles[0]} />
        </div>
        <div className="item-confirm">
          <h2>Mon vehicule 2</h2>
          <VehicleCard vehicle={vehicles[1]} />
        </div>
      </div>
      <div className="btn_confirm_cards">
        <button type="button">Valider</button>
      </div>
    </>
  );
}

export default Confirm;
