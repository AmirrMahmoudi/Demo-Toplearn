import React from "react";
import MenuHeader from "./Header/MenuHeader";
import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <Container fluid>
      <Row className="landing-layer home-page">
        <div>
          <MenuHeader />
        </div>

        {/* <MainHeader /> */}
      </Row>
    </Container>
  );
};

export default Header;
