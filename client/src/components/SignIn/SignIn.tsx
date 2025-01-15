import { useRef, useState } from "react";
import type { FormEventHandler } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { WebsiteUser } from "../../types/types";

function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [passwordType, setPasswordType] = useState("password");
  const [, setTogglePasswordIcon] = useState("");

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setTogglePasswordIcon(passwordType === "password" ? "" : "");
  };

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
          <div className="password-input-container">
            <input
              ref={passwordRef}
              type={passwordType}
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              required
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="password-toggle-button"
            >
              {passwordType === "password" ? (
                <img
                  src="./src/assets/icons/close-eye.png"
                  alt="Show password"
                  className="password-icon"
                />
              ) : (
                <img
                  src="./src/assets/icons/view.png"
                  alt="Hide password"
                  className="password-icon"
                />
              )}
            </button>
          </div>
        </div>
        <button type="submit" className="button-log">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default SignIn;
