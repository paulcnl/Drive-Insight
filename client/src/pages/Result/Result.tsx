import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { vehicleData, habitsData } = location.state || {};

  const [electricVehicle, setElectricVehicle] =
    useState<ElectricVehicle | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(
    null,
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFrequency, setSelectedFrequency] = useState(habitsData.option);

  const formatFrequency = (value: number, frequency: string) => {
    switch (frequency) {
      case "jour":
        return `${value.toFixed(2)} € par jour`;
      case "semaine":
        return `${value.toFixed(2)} € par semaine`;
      case "mois":
        return `${value.toFixed(2)} € par mois`;
      case "an":
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

  useEffect(() => {
    if (!vehicleData || !habitsData) {
      navigate("/");
      return;
    }

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

        const frequencyMultiplier = (option: string) => {
          switch (option) {
            case "jour":
              return 1;
            case "semaine":
              return 7;
            case "mois":
              return 30;
            case "an":
              return 365;
            default:
              return 1;
          }
        };

        const totalDistance =
          habitsData.distance * frequencyMultiplier(habitsData.option);

        const fuelCost =
          (vehicleData.engine.consumption / 100) * totalDistance * fuelPrice;
        const electricCost = similarElectricVehicle
          ? (similarElectricVehicle.engine.consumption / 100) *
            totalDistance *
            electricityPrice
          : 0;

        const comparison = {
          fuelCost,
          electricCost,
          co2Emission: vehicleData.engine.consumption * totalDistance * 2.31,
          electricConsumption: similarElectricVehicle
            ? similarElectricVehicle.engine.consumption * totalDistance
            : 0,
          savings: fuelCost - electricCost,
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
  }, [vehicleData, habitsData, navigate]);

  if (isLoading) {
    return <div>Calcul des résultats en cours...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  if (!comparisonData) {
    return <div>Aucune donnée disponible</div>;
  }

  const calculateCost = (
    cost: number,
    originalFrequency: string,
    targetFrequency: string,
  ) => {
    const frequencyConversion = {
      jour: 1,
      semaine: 7,
      mois: 30,
      an: 365,
    };

    const originalMultiplier =
      frequencyConversion[
        originalFrequency as keyof typeof frequencyConversion
      ];
    const targetMultiplier =
      frequencyConversion[targetFrequency as keyof typeof frequencyConversion];

    return (cost / originalMultiplier) * targetMultiplier;
  };

  const fuelCost = calculateCost(
    comparisonData.fuelCost,
    habitsData.option,
    selectedFrequency,
  );
  const electricCost = calculateCost(
    comparisonData.electricCost,
    habitsData.option,
    selectedFrequency,
  );

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
        <div className="annual_summary">
          <div className="summary-header">
            <h3>Votre bilan</h3>
            <select
              className="frequency-select"
              value={selectedFrequency}
              onChange={(e) => setSelectedFrequency(e.target.value)}
            >
              <option value="jour">Quotidien</option>
              <option value="semaine">Hebdomadaire</option>
              <option value="mois">Mensuel</option>
              <option value="an">Annuel</option>
            </select>
          </div>
          <p>
            Coût en carburant : {formatFrequency(fuelCost, selectedFrequency)}
          </p>
          <p>
            Coût en électricité :{" "}
            {formatFrequency(electricCost, selectedFrequency)}
          </p>
          <p>
            <strong>Économies potentielles :</strong>{" "}
            {formatFrequency(
              calculateCost(
                comparisonData.savings,
                habitsData.option,
                selectedFrequency,
              ),
              selectedFrequency,
            )}
          </p>
          <p>
            <strong>Réduction d'émissions de CO2 :</strong>{" "}
            {comparisonData.co2Emission.toFixed(2)} kg par an
          </p>
        </div>
        <div className="result_cards">
          <CardResultRed
            title="Votre véhicule actuel"
            vehicleImage={vehicleData.car_picture}
            vehicleName={`${vehicleData.brand} ${vehicleData.model}`}
            costs={{
              fuel: formatFrequency(
                calculateCost(
                  comparisonData.fuelCost,
                  habitsData.option,
                  "jour",
                ),
                "jour",
              ),
              total: formatFrequency(
                calculateCost(
                  comparisonData.fuelCost,
                  habitsData.option,
                  selectedFrequency,
                ),
                selectedFrequency,
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
                calculateCost(
                  comparisonData.electricCost,
                  habitsData.option,
                  "jour",
                ),
                "jour",
              ),
              savings: formatFrequency(
                calculateCost(
                  comparisonData.savings,
                  habitsData.option,
                  selectedFrequency,
                ),
                selectedFrequency,
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
      </div>
    </>
  );
};

export default Result;
