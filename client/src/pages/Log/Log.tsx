import "./Log.css";

function Log() {
  return (
    <>
      <div className="log-container">
        <div className="connexion">
          <h2>Connexion</h2>
          <label htmlFor="username">nom d'utilisateur</label>
          <div className="log-input-container">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="nom d'utilisateur"
            />
            <label htmlFor="username">mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="mot de passe"
            />
          </div>
          <button type="button" className="button-log">
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
          <div className="log-input-container">
            <label htmlFor="username">nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="nom d'utilisateur"
            />
            <label htmlFor="username">confirmer le nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="confirmez le nom d'utilisateur"
              autoComplete="current-password"
            />
            <label htmlFor="username">mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="mot de passe"
              autoComplete="new-password"
            />
            <label htmlFor="username">confirmer le mot de passe</label>
            <input
              type="password"
              id="pass"
              name="password"
              required
              placeholder="confirmez le mot de passe"
              autoComplete="current-password"
            />
          </div>
          <button type="button" className="button-log">
            S'inscrire
          </button>
        </div>
      </div>
    </>
  );
}

export default Log;
