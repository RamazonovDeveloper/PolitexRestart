import React from 'react';
import './Faculty.scss'
import '../TitleStyle.scss'

import issiq1 from "../../../assets/images/issiq1.png";
import mash1 from "../../../assets/images/mash1.png";
import elektr1 from "../../../assets/images/elektr1.png";
import mux1 from "../../../assets/images/mux1.png";
import avto1 from "../../../assets/images/avto1.png";
import mex1 from "../../../assets/images/mex1.png";
import neft1 from "../../../assets/images/neft1.png";

import eleklogo from "../../../assets/icons/eleklogo.svg";
import issiqlogo from "../../../assets/icons/issiqlogo.svg";
import mashlogo from "../../../assets/icons/mashlogo.svg";
import muxlogo from "../../../assets/icons/muxlogo.svg";
import mexlogo from "../../../assets/icons/mexlogo.svg";
import neftlogo from "../../../assets/icons/neftlogo.svg";


const Faculty = () => {
    return (
        <section className="fakultetlar">
        <div className='section__title'>
                <div className="section__title__container myContainer">
                    <h4 className='section__title__container__text'>Fakultetlar</h4>
                    
                </div>
            </div>
        <div className="myContainer fakultetlar__body">
          <ul className="fakultetlar__list">
            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={elektr1}
                  alt=" img"
                />
              </a>
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={issiqlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Issiqlik Energetikasi Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={issiq1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={eleklogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Elektr Energiyasi Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={mash1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={mashlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">Mashinasozlik Fakulteti</h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={mux1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={muxlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Muxandsilik texnologiyalari Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={neft1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={neftlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Issiqlik Energetikasi Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={mex1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={issiqlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Issiqlik Energetikasi Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={neft1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={mexlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Issiqlik Energetikasi Fakulteti
                </h3>
              </div>
            </li>

            <li className="fakultetlar__item">
              <a className="fakultetlar__link" href="#">
                <img
                  className="fakultetlar__img"
                  src={issiq1}
                  alt=" img"
                />
              </a>{" "}
              <div className="fakultetlar__content">
                <img
                  className="fakultetlar__img-logo"
                  src={neftlogo}
                  alt="img"
                />
                <h3 className="fakultetlar__title">
                  Issiqlik Energetikasi Fakulteti
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

    );
}

export default Faculty;
