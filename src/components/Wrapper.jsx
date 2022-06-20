import React from "react";
import UusiTieto from "./UusiTieto";
import Tilannetiedot from "./Tilannetiedot";
import "./../styles/tilannetiedot.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <h1 className="tilannetietopankki-header">Tilannetietopankki</h1>
      <UusiTieto />
      <Tilannetiedot />
    </div>
  );
}
