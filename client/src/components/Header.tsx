import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="nav">
          <button type="button">
            <p>contact</p>
          </button>
          <button type="button">
            <p>info</p>
          </button>
          <button type="button">
            <p>comparer</p>
          </button>
          <button type="button">
            <p>compte</p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
