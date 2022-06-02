import React from "react";
import { hodimlar } from "../../../Data/tuzilma";
import "./style.scss";

const Hodimlar = () => {
  return (
    <div>
      <h1 className="title">Hodimlar</h1>
      <div className="hrline"></div>
      <div className="hodimlar">
        {hodimlar.map(({ id, img, FIO, lavozim, Telefon, Email }) => (
          <div className="hodimlar__item">
            <img className="hodimlar__item__img" src={img} alt="hodim" />
            <div className="hodimlar__item__info">
              <span className="hodimlar__item__info__head">{FIO}</span> <br />
              <span className="hodimlar__item__info__head">Lavozim: </span>{" "}
              <span className="hodimlar__item__info__text">{lavozim}</span>
              <br />
              <span className="hodimlar__item__info__head">Telefon: </span>{" "}
              <span className="hodimlar__item__info__text">{Telefon}</span>
              <br />
              <span className="hodimlar__item__info__head">e-mail: </span>
              <span className="hodimlar__item__info__text">{Email}</span>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hodimlar;
