import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsClock, BsFillPersonFill } from "react-icons/bs";

const SuggestedCourse = ({ course }) => {
  return (
    <Row className="justify-content-center">
      <Col className="col-12">
        <Card className="shadow-sm">
          <Card.Img
            variant="top"
            src={course.image}
            alt={course.title}
            className="img-layer"
          />
          <Card.Body className="py-0">
            <h2 className="mt-3">
              <a href="#" className="hoverblue card-title-style">
                {course.title}
              </a>
            </h2>
            {/* <div className="border-bottom mb-3 pb-2"> */}
            <div className="detail">
              <div className="top border-bottom   mb-3 pb-3 ">
                <i className="card-icon">
                  <BsFillPersonFill />
                </i>
                <Card.Link
                  href="#"
                  className="text-muted text-decoration-none ms-2 card-detail"
                >
                  {course.teacher}
                </Card.Link>
              </div>

              <div className="bottom d-flex justify-content-between align-items-center pb-3">
                <span>
                  <i className="fs-13 mb-md-1">
                    <BsClock />
                  </i>
                  <small className="ms-2">{course.time}</small>
                </span>
                {/* <div className="text-info"> */}
                {/* </div> */}

                <span id="price" className="text-price">
                  {course.price
                    ? course.price + "تومان"
                    : "رایگانـ"}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default SuggestedCourse;
