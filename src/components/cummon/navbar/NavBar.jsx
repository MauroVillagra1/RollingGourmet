import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ userInLine, setUserInLine }) => {
  const navigator = useNavigate();

  const signOut = () => {
    setUserInLine({});
    sessionStorage.removeItem("registeredUser");
    navigator("/");
  };

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
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold">
    //           About Us
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation navBarFontFamilyBold">
    //           Login
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation navBarFontFamilyBold">
    //           Signup
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
      <Container>
        <Image
          src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
          alt="gourmetLogo"
          className="imgFix"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/administrator"
              className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
            >
              Administrator
            </NavLink>
            {userInLine.nameUser ? (
              <>
                {" "}
                <NavLink
                  to="/my-account"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  My Acount
                </NavLink>
                <Button
                  onClick={signOut}
                  to="/sing-up"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  Login
                </NavLink>{" "}
                <NavLink
                  to="/sing-up"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  Sing up
                </NavLink>
              </>
            )}

            <NavLink
              to="/about-us"
              className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
            >
              About Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar expand="sm" className="navbarBackground navbar-dark">
    //   <Container className="hola">
    //     <Image
    //       src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
    //       alt="gourmetLogo"
    //       className="imgFix"
    //     />
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonAdmin navButtonAnimation navBarFontFamilyBold">
    //           Administrator
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold">
    //           My Account
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold">
    //           About Us
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonRed navButtonAnimation navBarFontFamilyBold">
    //           Logout
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
