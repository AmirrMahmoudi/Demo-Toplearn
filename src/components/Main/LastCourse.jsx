import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { BsClock, BsFillPersonFill } from "react-icons/bs";

const LastCourse = ({ courses }) => {
  return (
    <Row className="justify-content-center">
      {courses &&
        courses.map((course) => (
          <Col xs={12} lg={4} xl={3} className="my-3 col-11 col-xs-6">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={course.image}
                alt={course.title}
                className="img-layer"
              />
              <Card.Body className="py-0 box-shadow">
                <h2 className="">
                  <a href="#" className="hoverblue card-title-style">
                    {course.title}
                  </a>
                </h2>
                <div className="detail">
                  <div className="top border-bottom   mb-3 pb-3 ">
                    <i className="card-icon ">
                      <BsFillPersonFill />
                    </i>
                    <Card.Link
                      href="#"
                      className="text-decoration-none ms-1 card-detail"
                    >
                      {course.teacher}
                    </Card.Link>
                  </div>
                  <div className="bottom d-flex justify-content-between align-items-center pb-3">
                    <span className="text-time d-flex ">
                      <i className="fs-13 mb-md-1">
                        {" "}
                        <BsClock />{" "}
                      </i>
                      <small className="ms-2">{course.time}</small>
                    </span>
                    <span id="price" className="text-price">
                      {course.price ? course.price + "تومان" : "رایگانـ"}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>

  );
};

export default LastCourse;
