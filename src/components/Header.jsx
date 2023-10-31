import React from "react";
import { Container, Row } from "react-bootstrap";
import { MainHeader, MenuHeader } from "./";

const Header = () => {
  return (
    <Container fluid>
      <Row className="landing-layer home-page">
        <header>
          <MenuHeader />
          <MainHeader />
        </header>
      </Row>
    </Container>
  );
};

export default Header;
