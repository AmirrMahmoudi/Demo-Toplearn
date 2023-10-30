import React from "react";
import MenuHeader from "./Header/MenuHeader";
import { Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <Container fluid>
      <Row className="landing-layer home-page">
        <MenuHeader />
      </Row>
    </Container>
  );
};

export default Header;
