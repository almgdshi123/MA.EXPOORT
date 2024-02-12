import React, { useRef, useState } from "react";
import "./testi.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";

import img1 from "../../../assets/Img/unnamed (1).png";
import Imgdpd from "../../../assets/Img/DPD_logo.png";
import ImgDhl from "../../../assets/Img/Dhl.png";

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
        <SwiperSlide className="testi-content" >
    
              <div className="Slide">
                <img src={img1} alt="" className="img_testi" />
                <p>{t("Certificates.PostNLbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("Certificates.PostNLtitle")}{" "}
                  </span>
                  <span className="job"> {t("OurCustomers.title")} </span>
                </div>
              </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
            <div className="testi-content">
              <div className="Slide" >
                <img src={Imgdpd} alt="" className="img_testi" />
                <p>{t("DeliverCompany.Dpdbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("DeliverCompany.Dpdtitle")}{" "}
                  </span>
                  <span className="job"> {t("OurCustomers.title")} </span>
                </div>
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
        <div className="testi-content">
          <div className="Slide">
            <img src={ImgDhl} alt="" className="img_testi" />
            <p>{t("DeliverCompany.Dhlbody")}</p>
            <i className="bx bxs-quote-alt-left guote-icon"></i>
            <div className="details">
              <span className="name">
                {" "}
                {t("DeliverCompany.Dhltitle")}{" "}
              </span>
              <span className="job"> {t("OurCustomers.title")} </span>
            </div>
          </div>
        </div>
      
    </SwiperSlide>

    </Swiper>
       </div>
  );
};

export default Testi;
