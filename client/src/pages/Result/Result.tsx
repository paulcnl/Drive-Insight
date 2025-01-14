import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardResultGreen from "../../components/CardResultGreen/CardResultGreen";
import CardResultRed from "../../components/CardResultRed/CardResultRed";
import FilAriane from "../../components/FilAriane";
import "./Result.css";

interface Vehicle {
  brand: string;
  model: string;
  engine: {
    power_type: string;
    consumption: number;
  };
}

interface ElectricVehicle extends Vehicle {
  car_picture: string;
  engine: {
    power_type: string;
    consumption: number;
    autonomy_km: number;
  };
}

const Result = () => {
  const location = useLocation();
  const { vehicleData, habitsData } = location.state || {};
  const [electricVehicle, setElectricVehicle] =
    useState<ElectricVehicle | null>(null);

  const formatFrequency = (value: number, frequency: string) => {
    switch (frequency) {
      case "jour":
        return `${value.toFixed(2)} € par jour`;
      case "mois":
        return `${value.toFixed(2)} € par mois`;
      case "années":
        return `${value.toFixed(2)} € par an`;
      default:
        return `${value.toFixed(2)} €`;
    }
  };
  interface ComparisonData {
    fuelCost: number;
    electricCost: number;
    savings: number;
    co2Emission: number;
    electricConsumption: number;
  }

  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(
    null,
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndCalculate = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api-yooliz-blush.vercel.app/api/vehicles",
        );
        const data = await response.json();

        const similarElectricVehicle: ElectricVehicle | undefined = data.find(
          (vehicle: ElectricVehicle) =>
            vehicle.brand === vehicleData.brand &&
            vehicle.engine.power_type === "électrique",
        );
        setElectricVehicle(similarElectricVehicle || null);

        const fuelPrice = 1.8;
        const electricityPrice = 0.15;

        const comparison = {
          fuelCost:
            (vehicleData.engine.consumption / 100) *
            habitsData.distance *
            habitsData.frequency *
            fuelPrice,
          electricCost: similarElectricVehicle
            ? (similarElectricVehicle.engine.consumption / 100) *
              habitsData.distance *
              habitsData.frequency *
              electricityPrice
            : 0,
          co2Emission:
            vehicleData.engine.consumption *
            habitsData.distance *
            habitsData.frequency *
            2.31,
          electricConsumption: similarElectricVehicle
            ? similarElectricVehicle.engine.consumption *
              habitsData.distance *
              habitsData.frequency
            : 0,
          savings:
            (vehicleData.engine.consumption / 100) *
              habitsData.distance *
              habitsData.frequency *
              fuelPrice -
            (similarElectricVehicle
              ? (similarElectricVehicle.engine.consumption / 100) *
                habitsData.distance *
                habitsData.frequency *
                electricityPrice
              : 0),
        };

        setComparisonData(comparison);
      } catch (error) {
        console.error("Error:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndCalculate();
  }, [vehicleData, habitsData]);

  if (isLoading) {
    return <div>Calcul des résultats en cours...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!comparisonData) {
    return <div>Aucune donnée disponible</div>;
  }

  return (
    <>
      <FilAriane
        currentStep="Results"
        progress={{
          Matricule: true,
          Habits: true,
          Options: true,
          Results: true,
        }}
      />
      <div className="result_container">
        <h2>Résultat de la comparaison</h2>
        <div className="result_cards">
          <CardResultRed
            title="Votre véhicule actuel"
            vehicleImage={vehicleData.car_picture}
            vehicleName={`${vehicleData.brand} ${vehicleData.model}`}
            costs={{
              fuel: formatFrequency(comparisonData.fuelCost, habitsData.option),
              total: formatFrequency(
                comparisonData.fuelCost,
                habitsData.option,
              ),
            }}
            emissions={{
              co2: `${comparisonData.co2Emission.toFixed(2)} kg CO2`,
              difference: `+${comparisonData.co2Emission.toFixed(2)} kg CO2 supplémentaires`,
            }}
            consumption={`${vehicleData.engine.consumption}L/100km`}
          />
          <CardResultGreen
            title="Alternative électrique"
            vehicleImage={electricVehicle?.car_picture || ""}
            vehicleName={`${electricVehicle?.brand || ""} ${electricVehicle?.model || ""}`}
            costs={{
              electricity: formatFrequency(
                comparisonData.electricCost,
                habitsData.option,
              ),
              savings: formatFrequency(
                comparisonData.savings,
                habitsData.option,
              ),
            }}
            emissions={{
              co2: "0 kg CO2",
              difference: `${comparisonData.co2Emission.toFixed(2)} kg CO2 économisés`,
            }}
            consumption={`${electricVehicle?.engine.consumption || 0}kWh/100km`}
            autonomy={`${electricVehicle?.engine.autonomy_km || 0} km`}
          />
        </div>
        <div className="annual_summary">
          <h3>Bilan annuel</h3>
          <p>
            Économies potentielles:{" "}
            {formatFrequency(comparisonData.savings * 12, "années")}
          </p>
          <p>
            Réduction CO2: {(comparisonData.co2Emission * 12).toFixed(2)} kg par
            an
          </p>
        </div>
      </div>
    </>
  );
};

export default Result;
