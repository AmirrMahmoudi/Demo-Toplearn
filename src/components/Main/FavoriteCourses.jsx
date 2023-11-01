import React from "react";
import { favoriteCourses } from "../../database";
import { Container, Row } from "react-bootstrap";
import { CourseShow } from "../";

const FavoriteCourses = () => {
  return (
    <Container className="my-5">
      <header className="headline  d-sm-flex">
        <h2>دوره های محبوب تاپ لرن</h2>
      </header>
      <Row className="justify-content-center">
        <CourseShow courses={favoriteCourses} />
      </Row>
    </Container>
  );
};

export default FavoriteCourses;
