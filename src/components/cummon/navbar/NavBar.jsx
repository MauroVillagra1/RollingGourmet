import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    // <Navbar expand="sm" className="navbarBackground navbar-dark">
    //   <Container>
    //     <Image
    //       src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
    //       alt="gourmetLogo"
    //       className="imgFix"
    //     />
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           Sobre Nosotros
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           Iniciar Sesión
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           Registro
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    // <Navbar expand="sm" className="navbarBackground navbar-dark">
    //   <Container>
    //     <Image
    //       src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
    //       alt="gourmetLogo"
    //       className="imgFix"
    //     />
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           Mi Cuenta
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           Sobre Nosotros
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 mt-sm-0 navButtonRed navButtonAnimation footerFontFamilyBold">
    //           Cerrar Sesión
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    
    <Navbar expand="sm" className="navbarBackground navbar-dark">
      <Container className="hola">
        <Image
          src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
          alt="gourmetLogo"
          className="imgFix"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <NavLink to="/administrator" className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
              Administrador
            </NavLink>
            <NavLink to="/" className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
              Mi Cuenta
            </NavLink>
            <NavLink to="/about-us" className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
              Sobre Nosotros
            </NavLink>
            <NavLink to="/" className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
              Cerrar Sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
