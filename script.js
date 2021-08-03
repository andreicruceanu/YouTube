const menu = document.querySelector("#menu");
const sideBar = document.querySelector(".side-bar");
const container = document.querySelector(".container");
console.log(container);

function closeMenu() {
  sideBar.classList.toggle("small-bar");
  container.classList.toggle("big-container");
}
