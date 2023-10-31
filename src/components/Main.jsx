import React from "react";
import { Container } from "react-bootstrap";
import { Banner, LastCourses, MainMenu } from "./";

const Main = () => {
  return (
    <>
      {/* <MainMenu /> */}
      <Container>
        <Banner />
        <LastCourses />
      </Container>
    </>
  );
};

export default Main;
