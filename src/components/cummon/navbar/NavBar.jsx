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
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           About Us
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation footerFontFamilyBold">
    //           Login
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation footerFontFamilyBold">
    //           Signup
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
            <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold">
              My Acount
            </Nav.Link>
            <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="mt-2 ms-sm-2 mt-sm-0 navButtonRed navButtonAnimation navBarFontFamilyBold">
              Logout
            </Nav.Link>
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
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonAdmin navButtonAnimation footerFontFamilyBold">
    //           Administrator
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           My Account
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold">
    //           About Us
    //         </Nav.Link>
    //         <Nav.Link href="#link" className="mt-2 mt-sm-0 ms-sm-2 navButtonRed navButtonAnimation footerFontFamilyBold">
    //           Logout
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
