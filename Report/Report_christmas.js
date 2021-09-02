const time = document.getElementById("time");

function getUntilChristmas() {
  const christmasDate = new Date("2021-12-25T00:00:00");
  const nowDate = new Date();
  const untilTime = new Date(christmasDate - nowDate);

  const day = String(Math.floor(untilTime / (1000 * 60 * 60 * 24)));
  const hour = String(Math.floor((untilTime / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minute = String(Math.floor((untilTime / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const second = String(Math.floor((untilTime / 1000) % 60)).padStart(2, "0");

  time.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

getUntilChristmas();
setInterval(getUntilChristmas, 1000);
