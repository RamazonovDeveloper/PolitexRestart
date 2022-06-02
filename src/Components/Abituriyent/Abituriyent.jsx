// import { Link, Route, Routes } from "react-router-dom";

import AbituriyentList from "./AbituriyentList/AbituriyentList";
// import AbituriyentItem from "./AbituriyentItem/AbituriyentItem";

import { Abituriyent as array } from "../../Data/Abituriyent";

import "./Abituriyent.scss";

const Abituriyent = () => {
  return (
    <main className="main--applicant">
      <section className="applicant">
        <div className="applicant__top">
          <div className="container">
            <div className="applicant__navigation">
              {/* <Link className="applicant__navigation__link" to={"/"}>
                <span className="applicant__navigation__text">Bosh sahifa</span>
              </Link>

              <Link className="applicant__navigation__link" to={"/abituriyent"}>
                <span className="applicant__navigation__text">Talabalar</span>
              </Link> */}

              <a className="applicant__navigation__link" href="#link">
                <span className="applicant__navigation__text">Bosh sahifa</span>
              </a>

              <a className="applicant__navigation__link" href="#link">
                <span className="applicant__navigation__text">Talabalar</span>
              </a>
            </div>

            <h2 className="applicant__heading">Bakalavriat</h2>
          </div>
        </div>

        <div className="container">
          <AbituriyentList array={array} />
          {/* <AbituriyentItem /> */}
          {/* <Routes>
            <Route path="" element={<AbituriyentList array={array} />} />

            <Route path="/:abduturientId" element={<AbituriyentItem />} />
          </Routes>  */}
        </div>
      </section>
    </main>
  );
};

export default Abituriyent;
