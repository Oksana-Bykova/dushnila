import React from "react";
import { useSelector } from "react-redux";
import "./Status.css";
import {
  TextError,
  Text,
  ErrorCO2,
  ErrorTemp,
  TextNorm,
  ErrorCombo,
} from "../../../constants/constants";

function Status() {
  const status = useSelector((state) => state.status.meaning);
  const statusCO2 = useSelector((state) => state.status.CO2);
  const statusTemp = useSelector((state) => state.status.temp);

  return (
    <section className={status === false ? "status" : "status status_red"}>
      <p className="status__text">{status === false ? Text : TextError}</p>
      <p className="status__clue">
        {status === false
          ? TextNorm
          : statusCO2 === true && statusTemp === true
          ? ErrorCombo
          : statusCO2 === true
          ? ErrorCO2
          : ErrorTemp}
      </p>
    </section>
  );
}

export default Status;
