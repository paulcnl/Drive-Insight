import "./Comparer.css";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import type { Vehicle } from "../../types/types";

function Comparer() {
  const vehicle: Vehicle = {
    id: 1,
    brand: "Volskwagen",
    model: "Golf VII",
    imageUrl:
      "https://www.autoscout24.fr/cms-content-assets/67HYXLkjCsA7ukfTtleZ8V-55834a528d1538b246ce20f6f255f847-vw-golf-7-l-01-1100.jpg",
    licensePlate: "AB-123-CD",
    registrationDate: "2013-01-01",
    price: 30000,
    carbonFootprint: 116,
    critAirCard: 1,
    horsepower: 130,
    powerType: "essence",
    consumption: 5,
    drivenDistance: 1000,
    fuelCost: 90,
  };

  return (
    <div>
      <h1>Comparer les véhicules</h1>
      <div className="vehicle-list">
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      </div>
    </div>
  );
}

export default Comparer;
