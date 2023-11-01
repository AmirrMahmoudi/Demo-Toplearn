import React from "react";
import { Container } from "react-bootstrap";
import {
  Banner,
  Blogs,
  FavoriteCourses,
  LastCourses,
  MainMenu,
  SuggestedCourses,
} from "./";
import { suggestedCourses } from "../database";

const Main = () => {
  return (
    <>
      {/* <MainMenu /> */}
      <Container>
        <Banner />
        <LastCourses />
        <div className="suggested-courses-layer">
          <SuggestedCourses courses={suggestedCourses} />
        </div>
      </Container>
      <Blogs />
      <FavoriteCourses />
    </>
  );
};

export default Main;
