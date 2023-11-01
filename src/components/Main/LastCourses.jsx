import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { lastCourses } from "../../database";
import { LastCourse } from "../";
const LastCourses = () => {
  return (
    <section className="last-courses-layer">
      <header className="headline d-sm-flex justify-content-between text-nowrap">
        <h2>آخرین ودره های تاپ لرن</h2>
        <span className="text-info d-flex align-items-center p-1 ps-3 fs-15 ms-4  ms-sm-0">
          <a href="#" className="text-decoration-none text-dark mx-2 hoverblue">
            مشاهده همه دوره ها{" "}
          </a>
          <h3 className="text-info mx-3">
            <i>
              <BsArrowLeft />
            </i>
          </h3>
        </span>
      </header>
      <LastCourse courses={lastCourses} />
    </section>
  );
};

export default LastCourses;
