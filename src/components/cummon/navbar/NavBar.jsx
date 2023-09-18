import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./NavBar.css";

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
    //         <Nav.Link href="#link" className="mt-3 ms-sm-2 navButtonDefault">
    //           Sobre Nosotros
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonGreen">
    //           Iniciar Sesión
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonGreen">
    //           Registro
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar expand="sm" className="navbarBackground navbar-dark">
      <Container>
        <Image
          src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
          alt="gourmetLogo"
          className="imgFix"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link" className="mt-3 ms-sm-2 navButtonDefault navButtonAnimation">
              Mi Cuenta
            </Nav.Link>
            <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonDefault navButtonAnimation">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonRed navButtonAnimation">
              Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
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
    //         <Nav.Link href="#link" className="mt-3 ms-sm-2 navButtonDefault">
    //           Administrador
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonDefault">
    //           Mi Cuenta
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonDefault">
    //           Sobre Nosotros
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 ms-sm-2 navButtonRed">
    //           Cerrar Sesión
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
