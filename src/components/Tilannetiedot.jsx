import React, { useEffect, useState } from "react";
import env from "../env.json";
import deleteTilannetieto from "../services/deleteTilannetieto";
import getTilannetiedot from "../services/getTilannetiedot";

export default function Tilannetiedot() {
  const [tilannetiedot, setTilannetiedot] = useState([]);

  useEffect(() => {
    getTilannetiedot(env.variables.baseURL.concat("/tilanne/tilannetiedot"))
      .then((tiedot) => setTilannetiedot(tiedot.data))
      .catch((error) => console.error(error));

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
              <p className={tieto.label}>{tieto.label}</p>
              <p className="datetime-label">{tieto.tieto_time}</p>
              <button
                className="delete-button"
                onClick={() => {
                  const deleteURL = env.variables.baseURL.concat(
                    `/tilanne/tilannetiedot/${tieto.tieto_id}`
                  );
                  deleteTilannetieto(deleteURL).catch((error) => {
                    console.error(error);
                  });
                }}
              >
                Poista
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
