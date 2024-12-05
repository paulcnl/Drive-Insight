import add_car from "../assets/images/add-line.png";

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
      <button type="submit">Valider</button>
      <div className="separator">
        <hr />
        ou
        <hr />
      </div>
      <div className="registred_info">
        <h3>informations du vehicule</h3>
        <div className="car_info">
          <input type="text" placeholder="Marque" />
          <input type="text" placeholder="Modele" />
          <input type="text" placeholder="Kilometrage" />
          <input type="text" placeholder="Puissance" />
          <input type="text" placeholder="Cylindre" />
          <input type="text" placeholder="Année" />
          <input type="text" placeholder="energie" />
          <input type="text" placeholder="" />
        </div>
        <button type="button">Enregistrer</button>
      </div>
    </div>
  );
}
