import "./Compte.css";

function Compte() {
  return (
    <>
      <div className="compte-container">
        <div className="connexion">
          <h2>Connexion</h2>
          <label htmlFor="username">Nom d'utilisateur</label>
          <div className="compte-input-container">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nom d'utilisateur"
            />
            <label htmlFor="username">Mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="Mot de passe"
            />
          </div>
          <button type="button" className="button-compte">
            Se connecter
          </button>
        </div>
        <div className="separateur">
          <hr />
          <p>ou</p>
          <hr />
        </div>
        <div className="inscription">
          <h2>Inscription</h2>
          <div className="compte-input-container">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nom d'utilisateur"
            />
            <label htmlFor="username">Confirmer le nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Confirmez le nom d'utilisateur"
              autoComplete="current-password"
            />
            <label htmlFor="username">Mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="Mot de passe"
              autoComplete="new-password"
            />
            <label htmlFor="username">Confirmer le mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="Confirmez le mot de passe"
              autoComplete="current-password"
            />
          </div>
          <button type="button" className="button-compte">
            S'inscrire
          </button>
        </div>
      </div>
    </>
  );
}

export default Compte;
