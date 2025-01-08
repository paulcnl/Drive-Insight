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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignIn: FormEventHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Veuillez saisir une adresse email valide.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
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
