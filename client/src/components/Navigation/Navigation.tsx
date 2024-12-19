import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  function handleClick(_noshow: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="nav-container">
      <Link
        onClick={() => {
          handleClick(false);
        }}
        to="/contact"
        className="navbar-button"
      >
        Contact
      </Link>
      <Link
        onClick={() => {
          handleClick(false);
        }}
        to="/info"
        className="navbar-button"
      >
        Info
      </Link>
      <Link
        onClick={() => {
          handleClick(false);
        }}
        to="/comparer"
        className="navbar-button"
      >
        Comparer
      </Link>
      <Link
        onClick={() => {
          handleClick(false);
        }}
        to="/compte"
        className="navbar-button"
      >
        Compte
      </Link>
    </div>
  );
}

export default Navigation;
