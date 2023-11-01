import React from "react";
import { Card, Col } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";

const Blog = ({ article }) => {
  return (
    // <Col xs={11} sm={6} lg={4} className="my-1">
    <Col className="article-col col-11 col-sm-6 col-lg-4 my-3">
      <article className="mx-1 shadow-sm bg-white rounded-bottom-3">
        <Card.Img
          variant="top"
          src={article.image}
          alt={article.title}
          className="img-layer rounded-top-3"
        />
        <Card.Title className="article-title">
          <a
            href=""
            className="article-title-h2 hoverblue text-decoration-none"
          >
            {article.title}
          </a>
        </Card.Title>
        <Card.Body className="pt-0">
          {/* <div className="border-bottom mb-3 pb-2"> */}
          <div className="article-top">
            <p className="article-text">{article.text}</p>
            {/* <i className="fa fa-user opacity-25 text-muted ms-2 ps-1"></i> */}
          </div>
          {/* <Card.Link href="#" className="text-muted text-decoration-none ">
                {" "}
                {blog.teacher}
              </Card.Link> */}

          <div className="article-bottom d-flex justify-content-between align-items-center mt-3 ms-3 ">
            <div className="right ">
              <span className="view me-2">
                <i className="opacity-25">
                  <BsEyeFill />
                </i>
                <small className="">{article.view}</small>
              </span>
              <span className="comment">
                <span className="me-1 opacity-25">
                  <FaComments />
                </span>
                <small className="">{article.comment}</small>
              </span>
            </div>
            {/* <div className="text-info"> */}
            {/* </div> */}

            <div id="" className="m-3">
              <a href="#" className="hoverGreen text-decoration-none text-info">
                <i className="text-info ms-2 ps-1 hoverGreen">
                  <BiSolidUser className="hoverGreen" />
                </i>{" "}
                <span>{article.author}</span>
              </a>
            </div>
          </div>
        </Card.Body>
      </article>
    </Col>
    // </Col>
  );
};

export default Blog;
