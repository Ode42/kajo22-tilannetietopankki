import axios from "axios";

export default function deleteTilannetieto(deleteURL) {
  return axios.delete(deleteURL);
}
