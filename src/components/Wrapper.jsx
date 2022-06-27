import React from "react";
import UusiTieto from "./UusiTieto";
import Tilannetiedot from "./Tilannetiedot";
import "./../styles/tilannetiedot.css";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <UusiTieto />
      <Tilannetiedot />
    </div>
  );
}
