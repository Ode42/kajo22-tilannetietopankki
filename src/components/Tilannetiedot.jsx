import React, { useEffect, useState } from "react";
import getTilannetiedot from "../services/getTilannetiedot";

export default function Tilannetiedot() {
  const [tilannetiedot, setTilannetiedot] = useState([]);

  useEffect(() => {
    getTilannetiedot();
  }, []);

  return <div className="tilannetiedot">Tilannetiedot</div>;
}
