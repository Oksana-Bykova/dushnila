import React from "react";
import "./Logo.css";

import logo from "../../../images/Logo.svg";

function Logo() {
  return (
    <section className="logo">
      <img src={logo} className="logo__img" alt="Логотип компании" />
    </section>
  );
}

export default Logo;
