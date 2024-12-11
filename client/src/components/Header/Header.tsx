// import { useState } from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isClicked, setIsClicked] = useState(false);
//   return (
//     <header>
//       <div className="header-mobile">
//         <div className="header-nav">
//           <div className="header-logo">Insert Logo here</div>
//           <div className="menu-test">
//             <button
//               className="label-menu"
//               type="button"
//               onClick={() => {
//                 setIsClicked(!isClicked);
//               }}
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//           </div>
//         </div>

//         <div className={isClicked ? "navbar-mobile" : "none"}>
//           <Link to="/compte" className="navbar-button-mobile">
//             <span>Compte</span>
//           </Link>
//           <Link to="/info" className="navbar-button-mobile">
//             <span>Infos env.</span>
//           </Link>
//           <Link to="/contact" className="navbar-button-mobile">
//             <span>Contact</span>
//           </Link>
//         </div>
//       </div>

//       <div className="nav">
//         <Link to="/contact">
//           <button type="button" className="button-desktop">
//             <p>Contact</p>
//           </button>
//         </Link>
//         <Link to="/info">
//           <button type="button" className="button-desktop">
//             <p>Info</p>
//           </button>
//         </Link>
//         <Link to="/comparer">
//           <button type="button" className="button-desktop">
//             <p>Comparer</p>
//           </button>
//         </Link>
//         <Link to="/compte">
//           <button type="button" className="button-desktop">
//             <p>Compte</p>
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setIsClicked(!isClicked);
  };

  return (
    <header>
      <div className="header-mobile">
        <div className="header-nav">
          <div className="header-logo">Insert Logo here</div>
          <div className="menu-test">
            <button
              className={`label-menu ${menuOpen ? "open" : ""}`}
              type="button"
              onClick={handleMenuClick}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={menuOpen ? "navbar-mobile" : "none"}>
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
            <p>Contact</p>
          </button>
        </Link>
        <Link to="/info">
          <button type="button" className="button-desktop">
            <p>Info</p>
          </button>
        </Link>
        <Link to="/comparer">
          <button type="button" className="button-desktop">
            <p>Comparer</p>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
