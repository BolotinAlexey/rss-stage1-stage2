const SECOND_IN_MINUTE = 60;

export default function timeCounter() {
  const timePlace = document.querySelector(".table__unused-th");
  const time = incrementTime(timePlace.innerText);
  timePlace.innerText = time;
}

function incrementTime(strTime) {
  let [min, sec] = strTime.split(":");

  min = +min + Math.floor(++sec / SECOND_IN_MINUTE);
  return min + ":" + String(sec % SECOND_IN_MINUTE).padStart(2, "0");
}
