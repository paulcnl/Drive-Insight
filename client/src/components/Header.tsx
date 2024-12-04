import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-mobile">
        <img
          src="./src/assets/images/menu-3-fill.png"
          alt="menu-burger"
          className="menu-burger"
        />
        <div>
          <h2>Insert Logo here</h2>
          <Link to="/compte">
            <button type="button" className="navbar-mobile">
              <h2>Compte</h2>
            </button>
          </Link>
          <Link to="/info">
            <button type="button" className="navbar-mobile">
              <h2>Infos env.</h2>
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="navbar-mobile">
              <h2>Contact</h2>
            </button>
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
