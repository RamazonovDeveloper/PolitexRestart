import React from "react";
import { user } from "../../../Data/tuzilma";
import "./style.scss";

const Rector = () => {
  return (
    <div>
      <h1 className="title">Rektorat</h1>
      <div className="hrline"></div>
      <div style={{ padding: " 0 140px" }}>
        {user.map(
          ({
            id,
            FIO,
            lavozim,
            ilmiyDaraja,
            QabulVaqti,
            Telefon,
            Email,
            img,
            logos,
          }) => (
            <div className="info">
              <div className="info__img" key={id}>
                <div className="info__img__left">
                  <img className="info__img__left__img" src={img} alt="user" />
                  <div className="info__img__left__imgWrapper"></div>
                  <div className="info__img__left__data">
                    <span className="info__img__left__data__title">{FIO}</span>{" "}
                    <br />
                    <span className="info__img__left__data__title">
                      Lavozimi :
                    </span>
                    {"  "}
                    <span className="info__img__left__data__text">
                      {"  "}
                      {lavozim}
                    </span>
                    {"  "}
                    <br />
                    <span className="info__img__left__data__title">
                      Ilmit Darajasi :
                    </span>
                    {"  "}
                    <span className="info__img__left__data__text">
                      {ilmiyDaraja}
                    </span>
                    {"  "}
                    <br />
                    <span className="info__img__left__data__title">
                      Qabul vaqti :
                    </span>
                    {"  "}
                    <span className="info__img__left__data__text">
                      {QabulVaqti}
                    </span>
                    {"  "}
                    <br />
                    <span className="info__img__left__data__title">
                      Telefon :
                    </span>
                    {"  "}
                    <span className="info__img__left__data__text">
                      {Telefon}
                    </span>{" "}
                    <br />
                    <span className="info__img__left__data__title">
                      E mail :
                    </span>
                    {"  "}
                    <span className="info__img__left__data__text">
                      {Email}
                    </span>{" "}
                    <br />
                  </div>
                </div>
                <img style={{ height: "11.5vw" }} src={logos} alt="logo" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Rector;
