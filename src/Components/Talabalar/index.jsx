import React from "react";
import "./style.scss";
import { talabalar } from "../../Data/mock";
import dropVektor from "../../assets/icons/dropVektor.svg";

const Talabalar = () => {
  return (
    <>
      <div className="talabalar">
        <div className="main">
          <div className="main-name">Bosh sahifa/Talabalar</div>
          <div className="title-container">
            <div className="main-title">TALABALAR</div>
            <img src={dropVektor} alt="" />
          </div>
        </div>
        <div className="title">Bakalavriat</div>
        <div className="line"></div>
        <div className="card-wrap">
          {talabalar.map(({ id, img, title }) => {
            return (
              <div className="card" key={id}>
                <div className="img-wrap">
                  <img src={img} alt="" />
                  <div className="filter"></div>
                </div>
                <div className="text-wrap">
                  <div className="text">{title}</div>
                  <div className="link-container">
                    <button className="link">
                      Batafsil  
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="title">Kechgi va sirtqi ta’lim</div>
        <div className="line"></div>
        <div className="card-wrap">
          {talabalar.map(({ id, img, title }) => {
            return (
              <div className="card" key={id}>
                <div className="img-wrap">
                  <img src={img} alt="" />
                  <div className="filter"></div>
                </div>
                <div className="text-wrap">
                  <div className="text">{title}</div>
                  <div className="link-container">
                    <button className="link">
                      Batafsil
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="title">Magistratura</div>
        <div className="line"></div>
        <div className="card-wrap">
          {talabalar.map(({ id, img, title }) => {
            return (
              <div className="card" key={id}>
                <div className="img-wrap">
                  <img src={img} alt="" />
                  <div className="filter"></div>
                </div>
                <div className="text-wrap">
                  <div className="text">{title}</div>
                  <div className="link-container">
                    <button className="link">
                      Batafsil
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="title">Bitiruvchilar</div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Talabalar;
