import axios from "axios";

export default async function getLabels(getURL) {
  const labels = await axios.get(getURL).catch((error) => console.error(error));
  return labels;
}
