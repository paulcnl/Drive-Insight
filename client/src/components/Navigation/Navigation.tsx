import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-container">
      <Link to="/contact" className="navbar-button">
        Contact
      </Link>
      <Link to="/info" className="navbar-button">
        Info
      </Link>
      <Link to="/comparer" className="navbar-button">
        Comparer
      </Link>
      <Link to="/compte" className="navbar-button">
        Compte
      </Link>
    </div>
  );
}

export default Navigation;
