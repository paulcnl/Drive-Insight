import type { Vehicule } from "../../types/types";
import "./VehiculeCard.css";

type VehiculeCardProps = {
  vehicule: Vehicule;
};

function VehiculeCard({ vehicule }: VehiculeCardProps) {
  return (
    <div className="vehicule-card">
      <img
        src={vehicule.imageUrl}
        alt={`${vehicule.brand} ${vehicule.model}`}
      />
      <h2>
        {vehicule.brand} {vehicule.model}
      </h2>
      <div className="vehicule-description">
        <p>
          Type :{" "}
          {vehicule.powerType === "électrique" ? "Électrique" : "Thermique"}
        </p>
        <p>Puissance : {vehicule.horsepower} chevaux</p>
        <p>Prix : {vehicule.price?.toLocaleString("fr-FR")} €</p>
        <p>
          Consommation : {vehicule.consumption}{" "}
          {vehicule.powerType === "électrique" ? "kWh/100km" : "L/100km"}
        </p>
        <p>Autonomie : {vehicule.autonomyKm} km</p>
      </div>
    </div>
  );
}

export default VehiculeCard;
