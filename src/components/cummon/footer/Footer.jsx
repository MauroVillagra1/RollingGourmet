import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footerPosition footerBackground container-fluid">
        <section className="row text-center footerFontColor">
          <div className="separationLine"></div>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex align-items-center justify-content-center">
            <img
              src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET-nav_u7y7wl.png"
              alt="imagen hamburguesa"
              className="imgFooterFix"
            />
          </article>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex flex-column align-content-sm-center">
            <h4>Enlaces</h4>
            <div>
              <a href="" className="list-group-item listAnimate pb-2">
                Home
              </a>
              <a href="" className="list-group-item listAnimate">
                Sobre Nosotros
              </a>
            </div>
          </article>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex flex-column align-content-sm-center footerLiCustom">
            <h4>Informacion</h4>
            <span className="mt-1">Mail: rollingcode@gmail.com</span>
            <span>Tel.: +5493815783030</span>
            <span>Gral. Paz 576 T4000</span>
            <span>San Miguel de Tucumán</span>
          </article>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex flex-column align-content-sm-center ">
            <h4>Horarios</h4>
            <span>Lunes a Viernes: 08:00 a 21:00 hs</span>
            <span>Sabados: 09:00 a 23:00 hs</span>
            <span>Domingos: 09:00 a 22:00 hs</span>
          </article>
        </section>
      </footer>
      <div className="copyStyleGeneral">
        <p className="footerFontFamilyNormal copyStyleText mt-2">
          &copy; 2023 - GrupoTres Developers - All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
