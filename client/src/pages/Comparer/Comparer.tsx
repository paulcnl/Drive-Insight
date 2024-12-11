import "./Comparer.css";
import VehiculeCard from "../../components/VehiculeCard/VehiculeCard";
import type { Vehicule } from "../../types/types";

function Comparer() {
  const vehicule1: Vehicule = {
    id: 1,
    brand: "Volskwagen",
    model: "Golf VII",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/VW_Golf_1.2_TSI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_4._Januar_2014%2C_D%C3%BCsseldorf.jpg/420px-VW_Golf_1.2_TSI_BlueMotion_Technology_Comfortline_%28VII%29_%E2%80%93_Frontansicht%2C_4._Januar_2014%2C_D%C3%BCsseldorf.jpg",
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

  const vehicule2: Vehicule = {
    id: 2,
    brand: "Volskwagen",
    model: "ID.3",
    imageUrl:
      "https://www.largus.fr/images/styles/max_1300x1300/public/2022-08/volkswagen-id3-2022-gris-arg-mk-bd.jpg?itok=rntpCXcR",
    registrationDate: "2023-01-01",
    price: 40000,
    carbonFootprint: 0,
    critAirCard: 0,
    horsepower: 150,
    powerType: "électrique",
    consumption: 15,
    autonomyKm: 544,
    drivenDistance: 1000,
    fuelCost: 30,
  };

  const vehicules: Vehicule[] = [vehicule1, vehicule2];

  return (
    <div>
      <h1>Comparer les véhicules</h1>
      <div className="vehicule-list">
        {vehicules.map((vehicule) => (
          <VehiculeCard key={vehicule.id} vehicule={vehicule} />
        ))}
      </div>
    </div>
  );
}

export default Comparer;
