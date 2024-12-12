import { useState } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="header-container">
      <div className="sub-header-container">
        <div className="header-logo">Insert Logo here</div>
        <button
          className="btn-menu"
          type="button"
          id="check"
          onClick={() => {
            handleClick();
          }}
        >
          test
        </button>
      </div>
      <nav className={`nav ${isClicked ? "show" : ""}`}>
        <Navigation />
      </nav>
    </div>
  );
}

export default Header;
