import "./Matricule.css";
import add_car from "../assets/images/add.png";

export default function Matricule() {
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
                className="matricule_input"
              />
            </div>
          </div>
          <button className="matricule" type="submit">
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
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Modele"
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Kilometrage"
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Puissance"
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Cylindre"
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="Année"
            />
            <input
              className="matricule_input"
              type="text"
              placeholder="energie"
            />
            <input className="matricule_input" type="text" placeholder="" />
          </div>
          <button className="matricule" type="button">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
