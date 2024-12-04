import "./Header.css";
function Header() {
  return (
    <header className="header-mobile">
      <img src="./assets/menu-burger.png" alt="menu-burger" />
      <div>
        <h2>Insert Logo here</h2>
        <button type="button" className="navbar-mobile">
          <h2>Compte</h2>
        </button>
        <button type="button" className="navbar-mobile">
          <h2>Infos env.</h2>
        </button>
        <button type="button" className="navbar-mobile">
          <h2>Contact</h2>
        </button>
      </div>
    </header>
  );
}

export default Header;
