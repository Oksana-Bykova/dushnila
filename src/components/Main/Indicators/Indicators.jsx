import React from "react";
import "./Indicators.css";

import { useDispatch } from "react-redux";

import { gooddeloApi } from "../../../utils/GooddeloApi";
import { setStatus, setStatusCO2, setStatusTemp } from "../../../redux/status/reducer";
import { useSelector } from "react-redux";

function Indicators() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status.meaning);
  const [query, setQuery] = React.useState([]);

  function getIndicators() {
    gooddeloApi.getIndicators().then((data) => {
      setQuery(data);
      if (parseFloat(data.temp) > 27 || parseFloat(data.co2) > 800) {
        dispatch(setStatus(true));
      } else {
        dispatch(setStatus(false));
      }

      if (parseFloat(data.temp) > 27) {
        dispatch(setStatusTemp(true));
      }else {
        dispatch(setStatusTemp(false))
      }

      if (parseFloat(data.co2) > 800) {
        dispatch(setStatusCO2(true));
      } else {
        dispatch(setStatusCO2(false));
      }
    });
  }

  React.useEffect(() => {
    getIndicators();
    const interval = setInterval(() => {
      getIndicators();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={status === false ? "indicators" : "indicators indicators_red"}
    >
      <span className="indicators__meaning">{query.temp} ℃</span>
      <p className="indicators__text">Температура</p>

      <span className="indicators__meaning">{Math.round(query.co2)} ppm</span>
      <p className="indicators__text">CO2</p>
    </section>
  );
}

export default Indicators;
