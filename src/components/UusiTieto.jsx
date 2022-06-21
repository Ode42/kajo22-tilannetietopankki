import React, { useState, useEffect } from "react";
import UusiTietoNappi from "./UusiTietoNappi";
import axios from "axios";
import env from "../env.json";

export default function UusiTieto() {
  const [auki, setAuki] = useState(false);

  const [kuvaus, setKuvaus] = useState("");
  const [lahettaja, setLahettaja] = useState("");
  const [label, setLabel] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    setDatetime(dateTime);
  }, []);

  return (
    <div className="uusiTieto">
      {auki ? (
        <div className="uusiTietoLomake">
          <h3>Uusi tilannetieto</h3>
          <form>
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
            <input
              id="label-field"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </form>
          <button
            type="submit"
            onClick={() => {
              const postURL = env.variables.baseURL.concat(
                "/tilanne/tilannetiedot"
              );
              axios
                .post(postURL, {
                  tietoKuvaus: kuvaus,
                  tieto_time: datetime,
                  tietoLahettaja: lahettaja,
                  tietoLabel: label,
                })
                .then((response) => {
                  console.log(response);
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
        <div
          className="uusiTietoNappi"
          onClick={() => {
            auki ? setAuki(false) : setAuki(true);
          }}
        >
          Uusi tilannetieto
        </div>
      )}
    </div>
  );
}
