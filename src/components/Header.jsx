import React from "react";
import MenuHeader from "./Header/MenuHeader";
import { Container, Row } from "react-bootstrap";
import MainHeader from "./Header/MainHeader";

const Header = () => {
  return (
    <Container fluid>
      <Row className="landing-layer home-page">
        <header>
          <MenuHeader />
          <MainHeader  />
        </header>
      </Row>
    </Container>
  );
};

export default Header;
