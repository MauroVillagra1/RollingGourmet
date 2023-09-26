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
            <h4 className="footerFontFamilyBold">Navigation</h4>
            <div>
              <a
                href=""
                className="list-group-item listAnimate pb-2 footerFontFamilyNormal"
              >
                Home
              </a>
              <a
                href=""
                className="list-group-item listAnimate footerFontFamilyNormal"
              >
                About Us
              </a>
            </div>
          </article>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex flex-column align-content-sm-center footerLiCustom">
            <h4 className="footerFontFamilyBold">Information</h4>
            <span className="mt-1 footerFontFamilyNormal">
              E-Mail: rollingcode@gmail.com
            </span>
            <span className="footerFontFamilyNormal">
              Phone: +5493815783030
            </span>
            <span className="footerFontFamilyNormal">Gral. Paz 576 T4000</span>
            <span className="footerFontFamilyNormal">
              San Miguel de Tucumán
            </span>
          </article>

          <article className="col-md-3 col-sm-6 col-12 p-2 d-flex flex-column align-content-sm-center ">
            <h4 className="footerFontFamilyBold">Oppening hour</h4>
            <span className="footerFontFamilyNormal">
              Monday to Friday: 8am to 9pm.
            </span>
            <span className="footerFontFamilyNormal">
              Saturdays: 9am to 11pm.
            </span>
            <span className="footerFontFamilyNormal">
              Sundays: 9am to 10pm.
            </span>
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
