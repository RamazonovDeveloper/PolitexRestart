import {React} from "react";
// import 
// import React from "react";
import Hujjatlar from "./Hujjatlar";
import Qabulxona from "./Qabulxona";
import RektorTabrigi from "./RektorTabrigi";
import Rekvizitlar from "./Rekvizitlar";
import UniversitetNizomi from "./UniversitetNizomi";
import { Router } from "react-router";

const Universitet = () => {
  return (
    <div>
      <Hujjatlar />
      <Qabulxona />
      <RektorTabrigi />
      <Rekvizitlar />
      <UniversitetNizomi />
    </div>
  );
};

export default Universitet;
