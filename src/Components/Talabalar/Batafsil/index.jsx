import React from "react";
import { talabalar } from "../../../Data/mock";
import "./style.scss";

export const Batafsil = () => {
  return (
    <div className="batafsil">
      {talabalar.map(({ id, img, title, category }) => {
        return (
          <div >
            <div className="title">{category}</div>
            <div className="line"></div>
            <img src={img} alt="" />
            <div className="text">{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Batafsil;
