import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <Container className="footerPosition">
      <div>
        <h1 className="footerFontFamilyBold">footer Under Construction</h1>
        <p className="footerFontFamilyNormal">come back soon...</p>
      </div>
      <div>
        <p className="footerFontFamilyNormal">Copyryght 2023 - GrupoTres Developers</p>
      </div>
    </Container>
    </>
  );
};

export default Footer;
