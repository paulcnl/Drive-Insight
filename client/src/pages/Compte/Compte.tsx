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
              <button type="button" className="modif">
                ✏️
              </button>
            </div>
            <div className="user-info-perso">
              <p>information</p>
              <p>information</p>
              <p>information</p>
              <p>information</p>
              <p>information</p>
              <p>information</p>
              <p>information</p>
              <p>information</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="user-info-vehicule">
          <div className="compte-box">
            <div className="vehicule">
              <p>Mes véhicules</p>
              <button type="button" className="modif">
                ✏️
              </button>
            </div>
            <div className="box-contenu">
              <div className="car-card"> </div>
              <div className="car-card"> </div>
            </div>
          </div>
          <div className="compte-box">
            <p>Mes dernières comparaisons</p>
            <div className="box-contenu">
              <div className="box-card">
                <div className="car-card"> </div>
                <div className="car-card"> </div>
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
