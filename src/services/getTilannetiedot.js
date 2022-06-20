import axios from "axios";
import env from "../env.json";

export default async function getTilannetiedot() {
  try {
    const baseURL = env.variables.baseURL;
    const tilannetiedotURL = baseURL.concat("/tilanne/tilannetiedot");
    const tilannetiedot = await axios.get(tilannetiedotURL);
    return tilannetiedot.data;
  } catch (error) {
    console.error(error);
  }
}
