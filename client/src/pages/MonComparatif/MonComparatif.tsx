import { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import CardResultGreen from "../../components/CardResultGreen/CardResultGreen";
import CardResultRed from "../../components/CardResultRed/CardResultRed";
import { useComparison } from "../../context/ComparisonContext";
import "./MonComparatif.css";

type User = {
  id: number;
  email: string;
  isAdmin: boolean;
};

type Auth = {
  user: User;
};

function MonComparatif() {
  const { lastComparison } = useComparison();
  const [selectedFrequency] = useState<string>(
    lastComparison?.calculations.frequency || "jour",
  );
  const { auth } = useOutletContext<{ auth: Auth }>();

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  if (!lastComparison) {
    return (
      <div className="no-comparison">
        <h2>Aucune comparaison trouvée</h2>
        <p>Effectuez une comparaison pour voir les résultats ici.</p>
      </div>
    );
  }

  function formatFrequency(cost: number, frequency: string): string {
    const frequencies = {
      jour: 365,
      semaine: 52,
      mois: 12,
      an: 1,
    };

    const factor = frequencies[frequency as keyof typeof frequencies] || 1;
    const formattedCost = (cost / factor).toFixed(2);

    return `${formattedCost} €/${frequency}`;
  }
  return (
    <div className="result_container">
      <h2>Ma dernière comparaison</h2>

      <div className="annual_summary">
        {/* ...existing summary JSX using lastComparison.calculations... */}
      </div>

      <div className="result_cards">
        <CardResultRed
          title="Votre véhicule actuel"
          vehicleName={`${lastComparison.vehicleData.brand} ${lastComparison.vehicleData.model}`}
          vehicleImage={lastComparison.vehicleData.car_picture}
          costs={{
            fuel: formatFrequency(
              lastComparison.calculations.fuelCost,
              selectedFrequency,
            ),
            total: formatFrequency(
              lastComparison.calculations.fuelCost,
              selectedFrequency,
            ),
          }}
          emissions={{
            co2: `${lastComparison.calculations.co2Emission.toFixed(0)} kg CO2`,
            difference: `+${lastComparison.calculations.co2Emission.toFixed(0)} kg CO2`,
          }}
          consumption={`${lastComparison.vehicleData.engine.consumption}L/100km`}
        />

        <CardResultGreen
          title="Alternative électrique"
          vehicleName={`${lastComparison.electricVehicle?.brand} ${lastComparison.electricVehicle?.model}`}
          vehicleImage={lastComparison.electricVehicle?.car_picture || ""}
          costs={{
            electricity: formatFrequency(
              lastComparison.calculations.electricCost,
              selectedFrequency,
            ),
            savings: formatFrequency(
              lastComparison.calculations.savings,
              selectedFrequency,
            ),
          }}
          emissions={{
            difference: `${lastComparison.calculations.co2Emission.toFixed(0)} kg CO2 économisés`,
          }}
          consumption={`${lastComparison.electricVehicle?.engine.consumption || 0}kWh/100km`}
          autonomy={`${lastComparison.electricVehicle?.engine.autonomy_km || 0} km`}
        />
      </div>
    </div>
  );
}

export default MonComparatif;
