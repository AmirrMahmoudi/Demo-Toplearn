import React from "react";
import { Col, Container } from "react-bootstrap";

const TopFooter = () => {
  const TELEGRAM_SVG = "https://toplearn.com/img/telegram.svg";
  const INSTAGRAM_SVG = "https://toplearn.com/img/instagram.svg";
  return (
    <Container className="d-lg-flex  align-items-baseline  col-lg-8">
      <Col className="menu-layer">
        <ul className="list-unstyled d-table">
          <li className="listgri">
            <a href="//barnamenevisan.org/" target="_blank" rel="'follow'">
              {" "}
              مرجع تخصصی برنامه نویسان{" "}
            </a>
          </li>
          <li>
            <a href="//barnamenevisan.info/" target="_blank" rel="'follow'">
              {" "}
              آموزشگاه برنامه نویسان{" "}
            </a>
          </li>
          <li>
            <a href="//themeshop.ir/" target="_blank" rel="'follow'">
              {" "}
              قالب رایگان{" "}
            </a>
          </li>
          <li>
            <a href="//barnamenevisan.co/" target="_blank" rel="'follow'">
              {" "}
              سفارش پروژه{" "}
            </a>
          </li>
          <li>
            <a href="//getwork.ir/" target="_blank" rel="'follow'">
              {" "}
              گت ورک و کسب درآمد{" "}
            </a>
          </li>
          <li>
            <a href="//barnamenevis.ir/" target="_blank" rel="'follow'">
              {" "}
              موتور جستجو{" "}
            </a>
          </li>
          <li>
            <a href="//learnby.ir/" target="_blank" rel="'follow'">
              {" "}
              لرن بای{" "}
            </a>
          </li>
          <li>
            <a href="//toplearn.com/page/terms" target="_blank" rel="'follow'">
              {" "}
              قوانین سایت{" "}
            </a>
          </li>
          <li>
            <a href="//toplearn.com/about-us" target="_blank" rel="'follow'">
              {" "}
              درباره ما{" "}
            </a>
          </li>
          <li>
            <a href="//toplearn.com/faqs" target="_blank" rel="'follow'">
              {" "}
              سوالات متداول{" "}
            </a>
          </li>
        </ul>
      </Col>
      <Col className="socials-layer d-flex justify-content-center align-items-center  col-lg-3">
        <a href="#" title="Instagram">
          <img src={INSTAGRAM_SVG} alt="instagram" className="telegram-icon" />
        </a>
        <a href="#" title="Telegram">
          <img src={TELEGRAM_SVG} alt="telegram" className="telegram-icon" />
        </a>
      </Col>
    </Container>
  );
};

export default TopFooter;
