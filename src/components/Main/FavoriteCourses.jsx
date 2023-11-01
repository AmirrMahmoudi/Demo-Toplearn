import React from "react";
import { favoriteCourses } from "../../database";
import FavoriteCourse from "./FavoriteCourse";
import { Container, Row } from "react-bootstrap";

const FavoriteCourses = () => {
  return (
    <Container className="my-5">
      <header className="headline  d-sm-flex">
        <h2>دوره های محبوب تاپ لرن</h2>
      </header>
      <FavoriteCourse courses={favoriteCourses} />
    </Container>
  );
};

export default FavoriteCourses;
