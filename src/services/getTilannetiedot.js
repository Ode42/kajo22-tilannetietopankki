import axios from "axios";

export default async function getTilannetiedot(getURL) {
  const tilannetiedot = await axios
    .get(getURL)
    .catch((error) => console.error(error));
  return tilannetiedot.data;
}
