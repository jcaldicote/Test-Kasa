import FooterLogo from "../assets/footer-logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={FooterLogo} alt="footer-logo" />
      </div>
      <span className="footer__span">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
