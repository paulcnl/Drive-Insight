import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  return (
    <footer>
      <div className="footer-container">
        <button
          type="button"
          onClick={() => setShowFooter(!showFooter)}
          className="footer-button"
        >
          <h3 className="footer-h3">Footer</h3>
        </button>
        <div className={showFooter ? "show-footer" : "none"}>
          <ul>
            <li>
              <a href="https://github.com/login" className="footer-link">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.yooliz.com/" className="footer-link">
                Yooliz
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yooliz_france/"
                className="footer-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
