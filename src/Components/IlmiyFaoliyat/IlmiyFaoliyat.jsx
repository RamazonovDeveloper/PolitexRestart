// import { Link } from "react-router-dom";

import IlmiyFaoliyatList from "./IlmiyFaoliyatList/IlmiyFaoliyatList";
import IlmiyFaoliyatButton from "./IlmiyFaoliyatButton/IlmiyFaoliyatButton";

import technologyStars from "../../assets/images/technology-stars.jpg";
import masterClassFirst from "../../assets/images/master-class-1.jpg";
import masterClassSecond from "../../assets/images/master-class-2.jpg";

import "./IlmiyFaoliyat.scss";

const IlmiyFaoliyat = () => {
  return (
    <main>
      <section className="scientific-activity__hero">
        <div className="container">
          <div className="scientific-activity__navigation">
            {/* <Link className="scientific-activity__navigation__link" to={"/"}>
              <span className="scientific-activity__navigation__text">
                Bosh sahifa
              </span>
            </Link>

            <Link
              className="scientific-activity__navigation__link"
              to={"/ilmiy"}
            >
              <span className="scientific-activity__navigation__text">
                Imiy jurnallar
              </span>
            </Link> */}
            <a className="scientific-activity__navigation__link" href="#link">
              <span className="scientific-activity__navigation__text">
                Bosh sahifa
              </span>
            </a>

            <a className="scientific-activity__navigation__link" href="#link">
              <span className="scientific-activity__navigation__text">
                Imiy jurnallar
              </span>
            </a>
          </div>

          <h2 className="scientific-activity__heading">Ilmiy faoliyat</h2>
        </div>
      </section>

      <section className="technology-stars">
        <div className="technology-stars__top section-top">
          <div className="container">
            <h2 className="technology-stars__heading section-heading">
              Texnika yulduzlari
            </h2>
          </div>
        </div>

        <div className="technology-stars__inner">
          <div className="container">
            <div className="technology-stars__left">
              <img
                className="technology-stars__image"
                src={technologyStars}
                alt="Respublika miqyosidagi ilmiy jurnal 2001 yilda tashkil topgan va yiliga 4 marotaba chop etiladi"
                width={403}
                height={574}
              />

              <IlmiyFaoliyatList />
            </div>

            <div className="technology-stars__right">
              <p className="technology-stars__description">
                RESPUBLIKA MIQYOSIDAGI ILMIY JURNAL 2001 YILDA TASHKIL TOPGAN VA
                YILIGA 4 MAROTABA CHOP ETILADI
              </p>

              <IlmiyFaoliyatButton buttonText="Maqola rasmiylashtirish talablari" />
            </div>
          </div>
        </div>
      </section>

      <section className="master-class">
        <div className="master-class__top section-top">
          <div className="container">
            <h2 className="master-class__heading section-heading">
              Mahorat darsi
            </h2>
          </div>
        </div>

        <div className="container">
          <ul className="master-class__list">
            <li className="master-class__item">
              <div className="master-class__item__inner">
                <img
                  className="master-class__item__image"
                  src={masterClassFirst}
                  alt="O. Zaripov mahorat darsi"
                  width={920}
                  height={554}
                />
              </div>

              <div className="master-class__item__info">
                <h3 className="master-class__item__heading">
                  O. Zaripov mahorat darsi
                </h3>
              </div>
            </li>

            <li className="master-class__item">
              <div className="master-class__item__inner">
                <img
                  className="master-class__item__image"
                  src={masterClassSecond}
                  alt="Ayubova .I  mahorat darsi  2021-2022 yil"
                  width={920}
                  height={554}
                />
              </div>

              <div className="master-class__item__info">
                <h3 className="master-class__item__heading">
                  Ayubova .I mahorat darsi 2021-2022 yil
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="technology-stars-address">
        <div className="container">
          <ul className="technology-stars-address__list">
            <li className="technology-stars-address__item">
              <h3 className="technology-stars-address__heading">
                Tahririyat manzili:
              </h3>
              <span className="technology-stars-address__text">
                100095, Toshkent - 95,Unversitet ko’chasi,2.
              </span>
            </li>

            <li className="technology-stars-address__item">
              <h3 className="technology-stars-address__heading">Telefon:</h3>
              <a
                className="technology-stars-address__text"
                href="tel:+998712271032"
              >
                (71) 227-10-32
              </a>
            </li>

            <li className="technology-stars-address__item">
              <h3 className="technology-stars-address__heading">E-mail:</h3>
              <a
                className="technology-stars-address__text"
                href="mailto:texnikayulduzlari@gmail.com"
                target={"blank"}
              >
                texnikayulduzlari@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default IlmiyFaoliyat;
