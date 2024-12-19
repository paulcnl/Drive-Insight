import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-container">
      <Link
        // onClick={() => {
        //   handleClick(!isClicked);
        // }}
        to="/contact"
        className="navbar-button"
      >
        Contact
      </Link>
      <Link
        // onClick={() => {
        //   handleClick(!isClicked);
        // }}
        to="/info"
        className="navbar-button"
      >
        Info
      </Link>
      <Link
        // onClick={() => {
        //   handleClick(!isClicked);
        // }}
        to="/comparer"
        className="navbar-button"
      >
        Comparer
      </Link>
      <Link
        // onClick={() => {
        //   handleClick(!isClicked);
        // }}
        to="/compte"
        className="navbar-button"
      >
        Compte
      </Link>
    </div>
  );
}

export default Navigation;
