import type { Vehicule } from "../../types/types";
import "./VehiculeCard.css";

type VehiculeCardProps = {
  vehicule: Vehicule;
};

function VehiculeCard({ vehicule }: VehiculeCardProps) {
  return (
    <div className="vehicule-card">
      <img
        className="vehicule-image"
        src={vehicule.imageUrl}
        alt={`${vehicule.brand} ${vehicule.model}`}
      />
      <h2 className="vehicule-name">
        {vehicule.brand} {vehicule.model}
      </h2>
      <div className="vehicule-description">
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Immatriculation</span>
          <span className="value">{vehicule.licensePlate}</span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Carburant</span>
          <span className="value">
            {vehicule.powerType === "essence" ? "essence" : "diesel"}
          </span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Puissance</span>
          <span className="value">{vehicule.horsepower} chevaux</span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Prix</span>
          <span className="value">
            {vehicule.price?.toLocaleString("fr-FR")} €
          </span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Consommation</span>
          <span className="value">
            {vehicule.consumption}{" "}
            {vehicule.powerType === "électrique" ? "kWh/100km" : "L/100km"}
          </span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Distance mensuelle</span>
          <span className="value">{vehicule.drivenDistance} km</span>
        </div>
        <div className="vehicule-detail">
          <span className="vehicule-data-label">Empreinte carbone</span>
          <span className="value">{vehicule.carbonFootprint} g/km</span>
        </div>
      </div>
    </div>
  );
}

export default VehiculeCard;
