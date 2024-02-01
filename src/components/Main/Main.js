import React from "react";
import "./Main.css";

import Logo from "./Logo/Logo";
import Status from "./Status/Status";
import Story from "./Story/Story";
import Indicators from "./Indicators/Indicators";

function Main() {

  return (
    <section className="main">
      <div className="main__container">
        <Status></Status>
        <Story></Story>
        <Logo></Logo>
      </div>
      <Indicators></Indicators>
    </section>
  );
}

export default Main;