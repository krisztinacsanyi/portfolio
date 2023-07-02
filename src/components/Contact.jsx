import React from "react";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/contact.css";

export default function Contact() {
  return (
    <footer className="flex-rw" id="contact">
      <section className="footer-social-section flex-rw">
        <span className="footer-social-overlap footer-social-connect">
          CONNECT WITH ME
        </span>
        <span className="footer-social-overlap footer-social-icons-wrapper">
          <a
            href="https://www.linkedin.com/in/csányi-krisztina-677338189/"
            rel="noreferrer"
            className="generic-anchor"
            target="_blank"
            title="Linkedin"
            itemprop="significantLink"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/krisztinacsanyi"
            className="generic-anchor"
            target="_blank"
            rel="noreferrer"
            title="Github"
            itemprop="significantLink"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a
            href="mailto:krisztina.csanyi@proton.me"
            className="generic-anchor"
            target="_blank"
            rel="noreferrer"
            title="E-mail"
            itemprop="significantLink"
          >
            <i class="fa-solid fa-square-envelope"></i>
          </a>
          <a
            href="/public/pdf/CSKR_cv_en.pdf"
            className="generic-anchor"
            target="_blank"
            rel="noreferrer"
            title="CV"
            itemprop="significantLink"
          >
            <i class="fa-solid fa-square-pen"></i>
          </a>
        </span>
      </section>
      <section className="footer-bottom-section flex-rw">
        <div className="footer-bottom-wrapper">
          <span className="footer-bottom-rights">@ Krisztina Csanyi 2023</span>
        </div>
      </section>
    </footer>
  );
}
