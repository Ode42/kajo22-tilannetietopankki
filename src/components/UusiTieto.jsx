import React, { useState, useEffect } from "react";
import UusiTietoNappi from "./UusiTietoNappi";

export default function UusiTieto() {
  const [auki, setAuki] = useState(false);

  return (
    <div className="uusiTieto">
      {auki ? (
        <div className="uusiTietoLomake">
          <form></form>
        </div>
      ) : (
        <div
          className="uusiTietoNappi"
          onClick={() => {
            setAuki(true);
          }}
        >
          Uusi tilannetieto
        </div>
      )}
    </div>
  );
}
