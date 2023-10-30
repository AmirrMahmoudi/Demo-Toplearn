import React from "react";
import SITE_LOGO from "../../assets/toplearnLogo.svg";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
const MenuHeader = () => {
  return (
    <Navbar className="menu-header w-100 flex-wrap justify-content-lg-center align-items-baseline">
      <Container>
        <NavbarBrand className="title-homepage">
          <img src={SITE_LOGO} alt="Logo" />
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default MenuHeader;
