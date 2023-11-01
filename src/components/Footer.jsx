import React from "react";
import { Container } from "react-bootstrap";
import {Newsletter, TopFooter} from "./";

const Footer = () => {
  return (
    <section className="footer-container">
      <Newsletter />
      <div className="footer">
        <section className="top-footer"><TopFooter /></section>
        <div className="copyright my-2">
          <Container>
            <p className="p-3 text-center copyright-text">
              تمامی حقوق مادی و معنوی این سایت متعلق به خودم می باشد و هرگونه
              کپی برداری غیرقانونی محسوب خواهد شد
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Footer;
