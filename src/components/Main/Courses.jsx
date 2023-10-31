import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { LastCoursesContext } from "../../context/ContainerContext";
import { CourseItem } from "../";

const Courses = () => {
  const courses = useContext(LastCoursesContext);
  return (
    <Row className="justify-content-center">
      {courses && courses.map((course) => <CourseItem />)}
    </Row>
  );
};

export default Courses;
