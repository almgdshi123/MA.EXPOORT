import React, { useRef, useState } from "react";
import "./testi.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";

import img1 from "../../../assets/Img/unnamed (1).png";
const Testi = () => {
  const [t] = useTranslation();

  return (
    <div className="container_testi">

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper Testimonial"
    >
        <SwiperSlide className="testi-content">
    
              <div className="Slide">
                <img src={img1} alt="" className="img_testi" />
                <p>{t("Certificates.PostNLbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("Certificates.PostNLtitle")}{" "}
                  </span>
                  <span className="job"> {t("Certificates.PostNLtitle")} </span>
                </div>
              </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
            <div className="testi-content">
              <div className="Slide">
                <img src={img1} alt="" className="img_testi" />
                <p>{t("Certificates.PostNLbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("Certificates.PostNLtitle")}{" "}
                  </span>
                  <span className="job"> {t("Certificates.PostNLtitle")} </span>
                </div>
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
        <div className="testi-content">
          <div className="Slide">
            <img src={img1} alt="" className="img_testi" />
            <p>{t("Certificates.PostNLbody")}</p>
            <i className="bx bxs-quote-alt-left guote-icon"></i>
            <div className="details">
              <span className="name">
                {" "}
                {t("Certificates.PostNLtitle")}{" "}
              </span>
              <span className="job"> {t("Certificates.PostNLtitle")} </span>
            </div>
          </div>
        </div>
      
    </SwiperSlide>

    </Swiper>
       </div>
  );
};

export default Testi;
