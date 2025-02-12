import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content-containner">
        <span>LET'S TALK:)</span>
        <a href="mailto:juwendy98@gmail.com">
          {" "}
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/wxwendyju/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div>
        <div className="copyright">Copyright @ 2023 Wendy Ju. All rights</div>{" "}
        <div className="reserved">reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
