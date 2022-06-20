import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../env.json";

export default function Tilannetiedot() {
  const [tilannetiedot, setTilannetiedot] = useState([]);

  async function getTilannetiedot() {
    try {
      const baseURL = env.variables.baseURL;
      const tilannetiedotURL = baseURL.concat("/tilanne/tilannetiedot");
      const haetutTiedot = await axios.get(tilannetiedotURL);
      setTilannetiedot(haetutTiedot.data);
      console.log("haettu");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTilannetiedot();

    const interval = setInterval(() => {
      getTilannetiedot();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tilannetiedot">
      {tilannetiedot.map((tieto) => {
        return (
          <div className="tilannetieto" key={tieto.tieto_id}>
            <p>{tieto.kuvaus}</p>
            <div className="tieto-meta">
              <i>{tieto.lahettaja}</i>
              <p className="tieto-label">{tieto.label}</p>
              <p>date</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
