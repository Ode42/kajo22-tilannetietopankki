import React, { useState, useEffect } from "react";
import env from "../env.json";
import postTilannetieto from "../services/postTilannetieto";
import populateTime from "../utils/populateTime";
import getLabels from "../services/getLabels";

export default function UusiTieto() {
  const [auki, setAuki] = useState(false);

  const [labels, setLabels] = useState([]);

  const [kuvaus, setKuvaus] = useState("");
  const [lahettaja, setLahettaja] = useState("");
  const [label, setLabel] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    getLabels(env.variables.baseURL.concat("/labels"))
      .then((labels) => setLabels(labels.data))
      .catch((error) => console.error(error));
    setDatetime(populateTime());
  }, []);

  return (
    <div className="uusiTieto">
      {auki ? (
        <div className="uusiTietoLomake">
          <h3>Uusi tilannetieto</h3>
          <form className="uusi-tieto">
            <label htmlFor="kuvaus-field">Tilannetieto: </label>
            <input
              id="kuvaus-field"
              type="text"
              value={kuvaus}
              onChange={(e) => setKuvaus(e.target.value)}
            />
            <label htmlFor="lahettaja-field">Lähettäjä: </label>
            <input
              id="lahettaja-field"
              type="text"
              value={lahettaja}
              onChange={(e) => setLahettaja(e.target.value)}
            />
            <label htmlFor="label-field">Label: </label>
            <select
              name="labels"
              id="labels"
              onChange={(e) => setLabel(e.target.value)}
            >
              {labels.map((label) => {
                return (
                  <option key={label.name} value={label.name} id={label.name}>
                    {label.name}
                  </option>
                );
              })}
            </select>
          </form>
          <button
            type="submit"
            onClick={() => {
              const postURL = env.variables.baseURL.concat(
                "/tilanne/tilannetiedot"
              );
              postTilannetieto(postURL, {
                kuvaus: kuvaus,
                datetime: datetime,
                lahettaja: lahettaja,
                label: label,
              })
                .then(setAuki(false))
                .catch((error) => {
                  console.error(error);
                });
            }}
          >
            Lähetä
          </button>
        </div>
      ) : (
        <button
          className="uusiTietoNappi"
          onClick={() => {
            auki ? setAuki(false) : setAuki(true);
          }}
        >
          Uusi tilannetieto
        </button>
      )}
    </div>
  );
}
