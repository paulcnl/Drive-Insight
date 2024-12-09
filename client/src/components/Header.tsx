import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <header>
      <div className="header-mobile">
        <div className="header-logo">
          <h2>Insert Logo here</h2>
          <button
            type="button"
            className="menu-burger"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <img
              src="./src/assets/images/menu-3-line (2).png"
              alt="menu-burger"
            />
          </button>
        </div>
        <div className={isClicked ? "navbar-mobile" : "none"}>
          <Link to="/compte" className="navbar-button-mobile">
            <span>Compte</span>
          </Link>
          <Link to="/info" className="navbar-button-mobile">
            <span>Infos env.</span>
          </Link>
          <Link to="/contact" className="navbar-button-mobile">
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="nav">
        <Link to="/contact">
          <button type="button" className="button-desktop">
            <p>contact</p>
          </button>
        </Link>
        <Link to="/info">
          <button type="button" className="button-desktop">
            <p>info</p>
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="button-desktop">
            <p>comparer</p>
          </button>
        </Link>
        <Link to="/compte">
          <button type="button" className="button-desktop">
            <p>compte</p>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
