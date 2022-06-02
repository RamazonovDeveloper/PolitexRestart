import React from "react";

import IlmiyFaoliyatButton from "../IlmiyFaoliyatButton/IlmiyFaoliyatButton";

import "./IlmiyFaoliyatList.scss";

const IlmiyFaoliyatList = () => {
  const [isFirstOpen, setFirstOpen] = React.useState(false);
  const [isSecondOpen, setSecondOpen] = React.useState(false);

  return (
    <ul className="technology-stars__list">
      <li
        className={`technology-stars__item ${
          isFirstOpen ? "technology-stars__item--open" : ""
        }`}
      >
        <IlmiyFaoliyatButton
          buttonText="Texnika yulduzlari 2022-yil"
          isTop="true"
          isOpen={isFirstOpen}
          setOpen={setFirstOpen}
        />

        <ul className="technology-stars__sublist">
          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="2022/1 va 2 Maxsus son" />
          </li>

          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="Texnika yulduzlari 2022/3" />
          </li>

          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="Texnika yulduzlari 2022/4" />
          </li>
        </ul>
      </li>

      <li
        className={`technology-stars__item ${
          isSecondOpen ? "technology-stars__item--open" : ""
        }`}
      >
        <IlmiyFaoliyatButton
          buttonText="Texnika yulduzlari 2021-yil"
          isTop="true"
          isOpen={isSecondOpen}
          setOpen={setSecondOpen}
        />

        <ul className="technology-stars__sublist">
          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="2021/1 va 2 Maxsus son" />
          </li>

          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="Texnika yulduzlari 2021/3" />
          </li>

          <li className="technology-stars__sublist__item">
            <IlmiyFaoliyatButton buttonText="Texnika yulduzlari 2021/4" />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default IlmiyFaoliyatList;
