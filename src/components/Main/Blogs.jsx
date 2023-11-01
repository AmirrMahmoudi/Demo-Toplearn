import React from "react";
import { Container, Row } from "react-bootstrap";
import { articles } from "../../database";
import { Blog } from "..";

const Blogs = () => {
  return (
    <aside className="last-articles-layer">
      <Container>
        <Row>
          <header className="headline  d-sm-flex justify-content-between  text-nowrap">
            <h2>آخرین دوره های تاپ لرن</h2>
            <span className="text-info d-flex align-items-center p-1 ps-3 fs-15 ms-4  ms-sm-0">
              <a href="#" className="text-decoration-none text-dark mx-2">
                مشاهده همه مقالات{" "}
              </a>
              <i className="fa fa-arrow-left text-info mx-3"></i>
            </span>
          </header>
        </Row>
        <Row>
          <Container>
            <Row className="justify-content-center">
              {articles &&
                articles.map((article) => {
                  return <Blog key={article.id} article={article} />;
                })}
            </Row>
          </Container>{" "}
        </Row>
      </Container>
    </aside>
  );
};

export default Blogs;
