import { useRef } from "react";
import type { FormEventHandler } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { WebsiteUser } from "../../types/types";

function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { setUser } = useOutletContext<{
    setUser: (user: WebsiteUser | null) => void;
  }>();
  const navigate = useNavigate();

  const handleSignIn: FormEventHandler = async (event) => {
    event.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        setUser(user);
        navigate("/");
      } else {
        alert(
          "Erreur lors de la connexion. Veuillez vérifier vos identifiants.",
        );
      }
    } catch (err) {
      alert("Une erreur s'est produite. Veuillez réessayer.");
      console.error(err);
    }
  };

  return (
    <div className="connexion">
      <h2>Connexion</h2>
      <form onSubmit={handleSignIn}>
        <div className="log-input-container">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            required
          />
        </div>
        <button type="submit" className="button-log">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default SignIn;
