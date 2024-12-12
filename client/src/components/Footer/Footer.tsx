import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <button type="button" className="footer-button">
          <h3 className="footer-h3">About us</h3>
        </button>
        <div className="spacer" />
        <div>
          <ul>
            <li>
              <a href="https://github.com/login" className="footer-link">
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.yooliz.com/" className="footer-link">
                <span>Yooliz</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yooliz_france/"
                className="footer-link"
              >
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
