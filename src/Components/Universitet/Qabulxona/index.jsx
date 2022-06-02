import React, { forwardRef } from "react";
import qabul from "../../../assets/images/qabulxona.png";
import veri from "../../../assets/images/veri.png";
import upload from "../../../assets/icons/upload.svg";

import Uploady from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";

import "./style.scss";

const DivUploadButton = asUploadButton(
  forwardRef((props, ref) => (
    <div {...props} style={{ cursor: "pointer", }}>
      <div className="upload-button">
        <img src={upload} alt="" />
      </div>
    </div>
  ))
);

const Qabulxona = () => {
  const props = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
      console.log("Your upload file:", file);
      // Your process logic. Here we just mock to the same file
      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  return (
    <div className="qabulxona">
      <div className="title-wrap">
        <div className="title-little">
          Bosh sahifa/Rektor virtual qabulxonasi
        </div>
        <div className="title">Rektor virtual qabulxonasi</div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="bottom-left">
          <div className="input-line">
            <div className="input-wrap">
              <label>Familiya Ism</label>
              <input type="text" placeholder="Azizov Mahmud" />
            </div>
            <div className="input-wrap">
              <label>Telefon raqami</label>
              <input type="text" placeholder="+998 (__) XXX-XX-XX" />
            </div>
          </div>
          <div className="input-line">
            <div className="input-wrap">
              <label>Mavzu</label>
              <input className="mavzu" type="text" placeholder="Mavzu" />
            </div>
          </div>
          <div className="input-line">
            <div className="input-wrap">
              <label>Matn</label>
              <textarea name="" id="" placeholder="Matn..."></textarea>
            </div>
          </div>

          <div className="input-line">
            <div className="input-wrap">
              <label>Faylni yuklash</label>
              <div className="upload-wrap upload-large">
                <Uploady destination={{ url: "https://my-server/upload" }}>
                  <DivUploadButton />
                </Uploady>
                
              </div>
            </div>

            <div className="input-wrap">
              <label>Verifikatsiya</label>
              <img src={veri} className="kod" alt="" />
            </div>

            <div className="input-wrap">
              <label></label>
              <div className="upload-wrap">
                <input placeholder="Kodni kiriting" type="text" />
                <div className="tasdiqlash">Tasdiqlash</div>
              </div>
            </div>
          </div>

          <div className="input-line">
            <span>
              Fuqarolar murojaati bo’yicha ishonch telefoni:{" "}
              <span className="bold">+998 71 246 39 29</span>{" "}
            </span>
          </div>
        </div>
        <div className="bottom-right">
          <img src={qabul} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qabulxona;
