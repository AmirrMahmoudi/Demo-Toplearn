import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import Statistics from "./Statistics";
import { statisticInfo } from "../../database";

const MainHeader = () => {
  return (
    <Container className="landing-content d-flex flex-column align-items-center justify-content-center mx-auto  text-center py-5 pt-sm-3 py-lg-5">
      <Row className="landing-header my-3">
        <h2 className="">خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن</h2>
        <span className=" pb-2">
          با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر
        </span>
      </Row>
      <Row className="landing-search mt-1 ">
        <Form.Label></Form.Label>
        <Form.Control
          id="search-input"
          className="p-3 "
          type="text"
          placeholder="چی میخوای یاد بگیری؟"
        />
      </Row>

      <Statistics statistics={statisticInfo} />
    </Container>
  );
};

export default MainHeader;
