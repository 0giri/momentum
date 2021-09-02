const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleMouseLeave: function () {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleRightClick: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[4];
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
