import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="nav">
          <button type="button" className="button-2">
            <p>contact</p>
          </button>
          <button type="button" className="button-1">
            <p>info</p>
          </button>
          <button type="button" className="button-2">
            <p>comparer</p>
          </button>
          <button type="button" className="button-1">
            <p>compte</p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
