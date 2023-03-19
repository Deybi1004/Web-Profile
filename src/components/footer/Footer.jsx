import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Deybi</h1>

        <ul className="footer__list">
          <li className="footer__link">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li className="footer__link">
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li className="footer__link">
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/deibi.orrego/"
            className="footer__social-link"
            target="noopener"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/deibi_1709/"
            className="footer__social-link"
            target="noopener"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Deybi1234"
            className="footer__social-link"
            target="noopener"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
