export default function populateTime() {
  const today = new Date();
  const date = today.getDate() + "." + (today.getMonth() + 1);
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = date + " " + time;
  return dateTime;
}
