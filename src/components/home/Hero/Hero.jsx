import React from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation();

  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="text-box">
            <h1> {t("hero.title")} </h1>
            <p>{t("hero.body")}</p>
            <a className="hero-btn">{t("hero.btn")}</a>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default Hero;
