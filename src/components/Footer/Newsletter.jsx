import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div fluid className="newsletter-layer">
        <Container className="d-flex  flex-column flex-lg-row">
          {/* <section className="newsletter-form "> */}
          <Row className="col-lg-8">
            <Col     className="newsletter-form">
              <NewsletterForm />
            </Col>
          </Row>
          {/* </section> */}
          <Row className="col-lg-4">
            <Col className="namad-layer col d-flex justify-content-center mt-3 mt-lg-0">
              <NavLink href="#">
                <img
                  src="https://parspng.com/wp-content/uploads/2023/01/ENAMADpng.parspng.com_.png"
                  alt=""
                />
              </NavLink>
              <a href="#">
                <img
                  alt="logo-anjoman-senfi"
                  src="https://parspng.com/wp-content/uploads/2023/01/samandehipng.parspng.com_.png"
                />
              </a>
              <img
                alt="logo-anjoman-senfi"
                src="https://toplearn.com/img/logo/logo_anjooman_senfi.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Newsletter;
