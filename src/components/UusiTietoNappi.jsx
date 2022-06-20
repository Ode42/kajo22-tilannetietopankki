import React from "react";

export default function UusiTietoNappi(props) {
  return (
    <div
      className="uusiTietoNappi"
      onClick={() => {
        props.vaihdaAuki(true);
      }}
    >
      Uusi tilannetieto
    </div>
  );
}
