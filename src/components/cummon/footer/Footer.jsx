import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerPosition footerBackground container-fluid">
        <div className="row text-center footerFontColor">
          <div className="separationLine"></div>

          <div className="col-md-3 col-sm-6 col-12 p-2">
            <img src="" alt="imagen hamburguesa" />
          </div>

          <div className="col-md-3 col-sm-6 col-12 p-2">
            <h4>Enlaces</h4>
          </div>

          <div className="col-md-3 col-sm-6 col-12 p-2">
            <h4>Informacion</h4>
          </div>

          <div className="col-md-3 col-sm-6 col-12 p-2">
            <h4>Horarios</h4>
          </div>
        </div>
      </div>
        <div className="copyStyleGeneral">
          <p className="footerFontFamilyNormal copyStyleText mt-2">
            &copy; 2023 - GrupoTres Developers - All rights reserved
          </p>
        </div>
    </>
  );
};

export default Footer;
