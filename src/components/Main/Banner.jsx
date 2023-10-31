import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Row className="w-100 mx-auto">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          //   spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mt-2  p-0 "
        >
          <SwiperSlide className="p-0">
            <img
              className="img-banner"
              src="https://toplearn.com/img/Banner/%D9%86%DB%8C%D9%85_%D8%A8%D9%87%D8%A7_%D8%B4%D8%AF%D9%86_%D8%A7%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA_%D8%AA%D8%A7%D9%BE_%D9%84%D8%B1%D9%86.jpg?v=pNkMpZImSlFwoFVwbg5lSy4bilS5m5WpqYvh-ge4vnk"
              // text="First slide"
              alt="carousel"
            />
          </SwiperSlide>

          <SwiperSlide className="p-0">
            <img
              className=" img-banner"
              src="https://toplearn.com/img/Banner/%D8%A8%D9%88%D8%AA_%DA%A9%D9%85%D9%BE_%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86.jpg?v=aZ_9UjdCfROcV7DYiZX7Fskr6WkZ9aC1LgrSoYf-6Sk"
              alt="carousel"
              text="Second slide"
            />
          </SwiperSlide>
        </Swiper>
      </Row>
    </>
  );
};

export default Banner;
