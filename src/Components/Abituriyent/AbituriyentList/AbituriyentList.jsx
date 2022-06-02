// import { Link } from "react-router-dom";

import "./AbituriyentList.scss";

const AbituriyentList = ({ array = [] }) => {
  return (
    <ul className="applicant__list">
      {array.length > 0 &&
        array.map((item) => (
          <li key={item.id} className="applicant__item">
            <div className="applicant__item__inner">
              <p className="applicant__item__text" title={item.text}>
                {item.text}
              </p>

              <div className="applicant__item__bottom">
                <time className="applicant__item__time">{item.date}</time>

                {/* <Link
                  className="application__item__link"
                  to={"/abituriyent/" + item.id}
                >
                  Batafsil
                </Link> */}

                <a className="application__item__link" href="#link">
                  Batafsil
                </a>
              </div>
            </div>

            <div className="application__item__aside">
              <img
                className="applicant__item__image"
                src={
                  "https://i.insider.com/5fd7c083e00bce00188bb457?width=1000&format=jpeg&auto=webp"
                }
                // src={"https://via.placeholder.com/390x410"}
                alt=""
                width={390}
                height={410}
              />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default AbituriyentList;
