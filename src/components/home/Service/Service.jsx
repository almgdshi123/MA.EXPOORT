import React from "react";
import "./service.css";
import { useTranslation } from "react-i18next";
import PayChecked from "../../assets/Img/sss.jpg";
import niwo from "../../assets/Img/niwo.svg";
import Testi from "./testi/Testi";

const Service = () => {
  const [t] = useTranslation();
  return (
    <>
    <section id="ourTame">
      <div class="services-section">
        <div class="inner-width">
          <h1 class="section-title">{t("OurCustomers.title")}</h1>
          <p className="text-box text-box-service" style={{ color: "black" }}>
            {t("OurCustomers.titlebody")}
          </p>
          <div class="border"></div>
        </div>
      </div>
      <Testi />{" "}
      <div class="services-section">
        <div class="inner-width">
          <h1 class="section-title">{t("Certificates.title")}</h1>
          <p className="text-box" style={{ color: "black" }}>
            {t("Certificates.titlep")}
          </p>
          <div class="border"></div>
          <div class="services-container">
            <div class="service-box">
              <div class="service-icon">
                <img src={PayChecked} style={{ transform: "rotate(14deg)" }}></img>
              </div>
              <div class="service-title">
                {t("Certificates.PayCheckedtitle")}
              </div>
              <div class="service-desc">{t("Certificates.PayCheckedbody")}</div>
            </div>
            <div class="service-box">
              <div class="service-icon">
                <img src={niwo} style={{ marginTop: "60px" }}></img>
              </div>
              <div class="service-title">{t("Certificates.niwotitle")}</div>
              <div class="service-desc">{t("Certificates.niwobody")}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="border"></div>
      </section>
    </>
  );
};

export default Service;
