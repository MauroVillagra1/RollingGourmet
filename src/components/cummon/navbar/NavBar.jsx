import { Nav, Navbar, Container, Image } from "react-bootstrap";
import "./NavBar.css";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = ({reloadNav, userActive}) => {
  const [userRole, setUserRole] = useState("");
  const [reload, setReload] = useState("");

  useEffect(() => {
    const userActiveJSON = sessionStorage.getItem("userActive");
    if (userActiveJSON) {
      const userActive = JSON.parse(userActiveJSON);
      if (userActive && userActive.rol) {
        setUserRole(userActive.rol);
      } else {
        setUserRole("");
      }
    } else {
      setUserRole("");
    }
  }, [reload, userActive]);

  const closeSession = () => {
    sessionStorage.removeItem("userActive");
    localStorage.removeItem("orders");
    localStorage.removeItem("countGlobal");
    localStorage.removeItem("userActive2");
    reloadNav();
  };

  return (
    <Navbar expand="sm" className="navbarBackground navbar-dark">
      <Container>
        <NavLink to={"/"}>
          <Image
            src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET_fcyqgy.png"
            alt="gourmetLogo"
            className="imgFix"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userRole === "" ? (
              <>
                <NavLink
                  to={"/about-us"}
                  className="mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold nav-link"
                >
                  About Us
                </NavLink>
                <NavLink
                  to={"/Login"}
                  className="mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation navBarFontFamilyBold nav-link"
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/sing-up"}
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonGreen navButtonAnimation navBarFontFamilyBold"
                >
                  Signup
                </NavLink>
              </>
            ) : userRole === "Admin" ? (
              <>
                <NavLink
                  to="/administrator"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  Administrator
                </NavLink>
                <NavLink
                  to="/my-account"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  My Account
                </NavLink>
                <NavLink
                  to="/about-us"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation footerFontFamilyBold"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/"
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonRed navButtonDefault navButtonAnimation footerFontFamilyBold"
                  onClick={() => {
                    closeSession();
                  }}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/my-account"}
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold"
                >
                  My Account
                </NavLink>
                <NavLink
                  to={"/about-us"}
                  className="nav-link mt-2 mt-sm-0 ms-sm-2 navButtonDefault navButtonAnimation navBarFontFamilyBold"
                >
                  About Us
                </NavLink>
                <NavLink
                  className="nav-link mt-2 ms-sm-2 mt-sm-0 navButtonRed navButtonAnimation navBarFontFamilyBold"
                  onClick={() => {
                    closeSession();
                  }}
                >
                  Logout
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
