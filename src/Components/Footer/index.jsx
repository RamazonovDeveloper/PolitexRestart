import footlogo from "../../assets/icons/footlogo.svg";
import footlog from "../../assets/icons/footlog.svg";

import fteleg from "../../assets/icons/ftelegram.svg";
import finst from "../../assets/icons/finstag.svg";
import ftwit from "../../assets/icons/ftiwit.svg";
import fface from "../../assets/icons/fface.svg";
import flast from "../../assets/icons/flast.svg";

import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__top--container">
            <ul className="footer__top--list">
              <li className="footer__top--item">
                <div className="pattern">
                  <a className="footer__top--link" href="#">
                    Tashrif buyurish
                  </a>
                  <p>bu yerda malumot boladi text uzunligiga qarab tepaga osadi</p>
                </div>
              </li>
              <li className="footer__top--item footer__top--item2">
                <div className="pattern">
                  <a className="footer__top--link" href="#">
                    Qabul 2022
                  </a>
                  <p>bu yerda malumot boladi text uzunligiga qarab tepaga osadi</p>
                </div>

              </li>
              <li className="footer__top--item">
                <div className="pattern">
                  <a className="footer__top--link" href="#">
                    Contact
                  </a>

                  <p>bu yerda malumot boladi text uzunligiga qarab tepaga osadi</p>


                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="myContainer footer__body--container">
          <p className="footer__name">
            Islom Karimov Nomidagi Toshkent Davlat Texnika Universiteti
          </p>
          <div className="footer__wrapper">
            
            <div className="foot__logo">
              <a className="footer__logo" href="#">
              <img
                className="footer__img"
                src={footlogo}
                alt="logo"
                width="300"
                height="300"
              />
              </a>
              <div className="foot__contacts">
                <p>Ijtimoiy Tarmoqlarda biz</p>
                <div>
                  <a href="#">
                    <img src={fteleg} alt="" />
                  </a>
                  <a href="#">
                    <img src={finst} alt="" />
                  </a>
                  <a href="#">
                    <img src={ftwit} alt="" />
                  </a>
                  <a href="#">
                    <img src={fface} alt="" />
                  </a>
                  <a href="#">
                    <img src={flast} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Unversitet
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Elektron Kutubxona
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Tuzilma
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Moliyaviy Faoliyat
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Faoliyat
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Grand Loyihalar
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Yangilklar
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Tayyorlov Kursi
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Talabalar
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Ilmiy Jurnallar
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Abituriyent
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Korrupsiyasiz soha
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="#">
                    Hemis
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <iframe
                className="footer__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.261179891124!2d69.59851441465106!3d40.86614213610931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae33b0faf5cfbd%3A0xb230e8b4db97941d!2sIslom%20Karimov%20Nomidagi%20Toshkent%20Davlat%20Texnika%20Universiteti%20Olmaliq%20Filiali%20%22Konchilik%20ishi%20va%20Metallurgiya%20fakulteti%22!5e0!3m2!1sru!2s!4v1649221880602!5m2!1sru!2s"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        

        <div className="footer__bottom">
          <div className="myContainer footer__botom--container">
            <p className="footer__bottom--text">© TDTU 2022</p>
            <img
              className="footer__bottom--img"
              src={footlog}
              alt="img"
              width="170"
              height="48"
            />
          </div>
        </div>
      </footer>

      {/* <div className="bac">
salom
      </div> */}
    </div>
  );
};

export default Footer;
