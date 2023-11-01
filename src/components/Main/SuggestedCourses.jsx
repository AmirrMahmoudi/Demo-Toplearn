import React from "react";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import {SuggestedCourse} from "../";
const SuggestedCourses = ({ courses }) => {
  return (
    <Container fluid className="">
      <header className="headline  d-sm-flex justify-content-between  text-nowrap my-2">
        <h2>دوره های پیشنهادی تاپ لرن</h2>
      </header>

      <Row className="justify-content-center">
        <Swiper
          spaceBetween={20}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {courses &&
            courses.map((suggestedCourse) => {
              return (
                <SwiperSlide>
                  <SuggestedCourse
                    suggestedCourse={suggestedCourse}
                    key={suggestedCourse.id}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Row>
    </Container>
  );
};

export default SuggestedCourses;
