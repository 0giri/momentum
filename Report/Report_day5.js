const body = document.querySelector("body");

function handleBackColor() {
  const width = window.innerWidth;
  if (0 <= width && width < 1000) {
    body.classList.add("small");
  } else if (1000 <= width && width < 1500) {
    body.classList.add("medium");
  } else if (1500 <= width && width < 2000) {
    body.classList.add("big");
  }
}

window.addEventListener("resize", handleBackColor);
