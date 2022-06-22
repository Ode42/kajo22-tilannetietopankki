import axios from "axios";

export default function postTilannetieto(postURL, requestBody) {
  return axios.post(postURL, {
    tietoKuvaus: requestBody.kuvaus,
    tieto_time: requestBody.datetime,
    tietoLahettaja: requestBody.lahettaja,
    tietoLabel: requestBody.label,
  });
}
