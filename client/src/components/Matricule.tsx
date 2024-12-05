import add_car from "../assets/images/add.png";

export default function Matricule() {
  return (
    <div className="box-comparator">
      <h2>Mon vehicule</h2>
      <div className="comparator_child">
        <h3>Immatriculation</h3>
        <div className="add_car">
          <img className="add_item" src={add_car} alt="" />
          <input
            type="text"
            placeholder="Entrez votre plaque d'immatriculation"
          />
        </div>
      </div>
      <button className="matricule" type="submit">
        Valider
      </button>
      <div className="separator">
        <hr />
        ou
        <hr />
      </div>
      <div className="registred_info">
        <h3 className="matricule_h3">informations du vehicule</h3>
        <div className="car_info">
          <input className="matricule_input" type="text" placeholder="Marque" />
          <input className="matricule_input" type="text" placeholder="Modele" />
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
          <input className="matricule_input" type="text" placeholder="Année" />
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
  );
}
