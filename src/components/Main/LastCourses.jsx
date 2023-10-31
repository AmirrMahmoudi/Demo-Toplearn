import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LastCoursesContext } from "../../context/ContainerContext";
import { lastCourses } from "../../database";
import { Courses } from "../";
const LastCourses = () => {
  const [courses, setCourses] = useState(lastCourses);
  return (
    <section className="last-courses-layer">
      <header className="headline d-sm-flex justify-content-between text-nowrap">
        <h2>آخرین ودره های تاپ لرن</h2>
        <span className="text-info d-flex align-items-center p-1 ps-3 fs-15 ms-4  ms-sm-0">
          <a className="text-decoration-none text-dark mx-2">
            مشاهده همه دوره ها{" "}
          </a>
          <h3 className="text-info mx-3">
            <i>
              <BsArrowLeft />
            </i>
          </h3>
        </span>
      </header>
      <LastCoursesContext.Provider value={courses}>
        <Courses />
      </LastCoursesContext.Provider>
    </section>
  );
};

export default LastCourses;
