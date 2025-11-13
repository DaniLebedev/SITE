let burger = document.querySelector("#burger");
let nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");
const star = document.querySelector('.star');

star.addEventListener('click', () => {
  star.classList.add('fly');
});

star.addEventListener('animationend', () => {
  star.classList.remove('fly');
});

burger.addEventListener("click", () => {
  BTN();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

function BTN() {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
}
