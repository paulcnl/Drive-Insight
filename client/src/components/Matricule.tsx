import { useState } from "react";

interface Vehicle {
  brand: string;
  model: string;
  kilometrage: string;
  puissance: string;
  cylindre: string;
  annee: string;
  energie: string;
  license_plate: string;
}
import { useNavigate } from "react-router-dom";
import "./Matricule.css";
import add_car from "../assets/images/add.png";

export default function Matricule() {
  const [immatriculation, setImmatriculation] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [puissance, setPuissance] = useState("");
  const [cylindre, setCylindre] = useState("");
  const [annee, setAnnee] = useState("");
  const [energie, setEnergie] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let vehicleData: {
      brand?: string;
      model?: string;
      kilometrage?: string;
      puissance?: string;
      cylindre?: string;
      annee?: string;
      energie?: string;
      license_plate?: string;
    };
    if (immatriculation) {
      const response = await fetch(
        `https://api-yooliz-blush.vercel.app/api/vehicles?license_plate=${immatriculation}`,
      );
      if (response.ok) {
        const data = await response.json();
        vehicleData = data.find(
          (vehicle: Vehicle) => vehicle.license_plate === immatriculation,
        );
        if (!vehicleData) {
          alert("No vehicle found with the provided license plate");
          return;
        }
      } else {
        alert("Failed to fetch vehicle data");
        return;
      }
    } else {
      vehicleData = {
        brand,
        model,
        kilometrage,
        puissance,
        cylindre,
        annee,
        energie,
      };
    }
    navigate("/confirm", { state: { vehicleData } });
  };

  return (
    <div>
      <h2 className="h2_vehicule">Mon véhicule</h2>
      <div className="box-comparator">
        <div className="box_immatriculation">
          <div className="comparator_child">
            <h3 className="matricule_h3">Immatriculation</h3>
            <div className="add_car">
              <img className="add_item" src={add_car} alt="" />
              <input
                type="text"
                placeholder="Entrez votre plaque d'immatriculation"
                className="matricule_left_input"
                value={immatriculation}
                onChange={(e) => setImmatriculation(e.target.value)}
              />
            </div>
          </div>
          <button className="matricule" type="submit" onClick={handleSubmit}>
            Valider
          </button>
        </div>
        <div className="mat_separator">
          <hr />
          <p>ou</p>
          <hr />
        </div>
        <div className="registred_info">
          <h3 className="matricule_h3">Informations du véhicule</h3>
          <div className="car_info">
            <input
              className="matricule_input"
              type="text"
              placeholder="Marque"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Modele"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Kilometrage"
              value={kilometrage}
              onChange={(e) => setKilometrage(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Puissance"
              value={puissance}
              onChange={(e) => setPuissance(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Cylindre"
              value={cylindre}
              onChange={(e) => setCylindre(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Année"
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Energie"
              value={energie}
              onChange={(e) => setEnergie(e.target.value)}
            />
          </div>
          <button className="matricule" type="button" onClick={handleSubmit}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}
