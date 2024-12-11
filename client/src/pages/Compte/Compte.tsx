import "./Compte.css";
import avatar from "../../assets/images/538474-user_512x512.webp";

function Compte() {
  return (
    <>
      <div className="compte">
        <div className="user">
          <img src={avatar} alt="" className="avatar" />
          <div className="user-info">
            <div className="nickname">
              <h2>user_nickname</h2>
              <button type="button">✏️</button>
            </div>
            <div className="user-info-perso">
              <p>Nom</p>
              <p>Prénom</p>
              <p>Nombre de véhicules</p>
              <p>Pays</p>
              <p>Ville</p>
              <p>Numéro de siret</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="user-info-vehicule">
          <div className="compte-box">
            <div className="vehicule">
              <p>Mes véhicules</p>
              <button type="button">Modifier mes véhicules ✏️</button>
            </div>
            <div className="box-contenu">
              <div className="car-card-green"> </div>
              <div className="car-card-green"> </div>
            </div>
          </div>
          <div className="compte-box">
            <div className="comparaison">
              <p>Mes dernières comparaisons</p>
            </div>
            <div className="box-contenu">
              <div className="box-card">
                <div className="car-card-red"> </div>
                <div className="car-card-green"> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compte-question">
          <button type="button">?</button>
        </div>
      </div>
    </>
  );
}

export default Compte;
