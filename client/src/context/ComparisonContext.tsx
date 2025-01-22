import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ComparisonData = {
  vehicleData: {
    brand: string;
    model: string;
    car_picture: string;
    engine: {
      consumption: number;
    };
  };
  electricVehicle: {
    brand: string;
    model: string;
    car_picture: string;
    engine: {
      consumption: number;
      autonomy_km: number;
    };
  } | null;
  calculations: {
    fuelCost: number;
    electricCost: number;
    savings: number;
    co2Emission: number;
    distance: number;
    frequency: string;
  };
};

type ComparisonContextType = {
  lastComparison: ComparisonData | null;
  setLastComparison: (data: ComparisonData | null) => void;
};

const ComparisonContext = createContext<ComparisonContextType | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [lastComparison, setLastComparison] = useState<ComparisonData | null>(
    null,
  );

  return (
    <ComparisonContext.Provider value={{ lastComparison, setLastComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
  }
  return context;
}
