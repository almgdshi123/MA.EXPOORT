import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import cookies from "js-cookie";
import { languages } from "../../len/len";
import icone from "../assets/Img/WhatsApp Image 2023-10-06 at 01.59.58.jpg";
import SubmitEmail from "../Submit/SubmitEmail";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveCell, setIsActivCell] = useState(false);
  let value = "en";

  const [t, i18n] = useTranslation();

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    if (event === 1) {
      setIsActive((current) => !current);
    }

    if (event === 3) {
      setIsActivCell((current) => !current);
    }
  };

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";

    document.body.style = currentLanguage.dir
      ? "font-family:'Cairo', sans-serif"
      : "font-family:'Poppins',Helvetica,Arial,Lucida,sans-serif";
    document.title = t("title");
  }, [currentLanguage, t]);

  return (
    <header className="header">
      <nav className="container">
        <a href="#" className="logo">
          <span>MA.</span>
          <span className="red-color">EXPRESS</span>
          <div className="heading">
            <p>{t("logo")}</p>
          </div>
        </a>

        <ul
          className={
            (isActive ? "menu  menu-active " : "menu ") +
            (i18n.language === "ar" ? " left-right" : "")
          }
        >
          <li className="nav-item">
            <a href="#home" className="nav-link">
              {t("home")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#service" className="nav-link">
              {t("service")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#ourTame" className="nav-link">
              {t("ourTame")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              {t("contact")}
            </a>
          </li>
          <button onClick={() => handleClick(1)} className="close-btn">
            <i className="ri-close-line"></i>
          </button>
        </ul>

        <div className={isActiveCell ? "menu2 menu-active-cell" : "menu2"}>
          <a href="#" className="logo">
            <span>MA.</span>
            <span className="red-color">EXPRESS</span>
          </a>
          <div className="team-box-elements grid">
            <div className="team-box-img">
              <img src={icone} alt="" />
            </div>
            <div className={i18n.language === "ar" ? " left-right" : ""}>
              <div className="team-box-card-img">
                <a href="https://www.facebook.com/profile.php?id=100064244430215&mibextid=ZbWKwL">
                  <i className="ri-facebook-box-line"></i>
                </a>
              </div>
              {SubmitEmail(
                t("SubmitEmail.contact"),
                t("SubmitEmail.yourfullname"),
                t("SubmitEmail.email"),
                t("SubmitEmail.message"),
                t("SubmitEmail.submit"),
                ""
              )}
            </div>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/profile.php?id=100064244430215&mibextid=ZbWKwL">
              <i className="ri-facebook-box-fill"></i>
            </a>
          </div>

          <button onClick={() => handleClick(3)} className="close-btn-call">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="grp-btns">
          <button onClick={() => handleClick(1)} className="menu-btn">
            <i className="ri-menu-2-fill"></i>
          </button>

          <a onClick={() => handleClick(3)} className="menu-btn-call " alt="">
            <i className="ri-phone-fill"></i>{" "}
          </a>
          <div className="header-top-left">
            <ul>
              <li className="select-opt ">
                <select
                  onChange={(event) => {
                    i18n.changeLanguage(event.target.value);
                  }}
                  defaultValue={value}
                  className="header-top-left"
                  name="language"
                  id="language"
                >
                  <option value="en">EN</option>
                  <option
                    onSelect={() => {
                      i18n.changeLanguage("nl");
                    }}
                    value="nl"
                  >
                    NL
                  </option>
                  <option
                    onSelect={() => {
                      i18n.changeLanguage("ar");
                    }}
                    value="ar"
                  >
                    AB
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div id="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=31633854062"
            target="_blank"
            id="toggle1"
            className="wtsapp"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
