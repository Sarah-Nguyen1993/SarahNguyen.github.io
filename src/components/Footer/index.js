import React from "react";
import "./style.css";
// import Container from "../Container";

function Footer() {
  return (
      <footer className="footer">
      <div className="container text-center">
        <span>
          <a href='https://linkedin.com/in/sarah-nguyen1993' target = "_blank" rel="noreferrer">
            LinkedIn
          </a> | 
          <a href='https://github.com/Sarah-Nguyen1993' target = "_blank" rel="noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
