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

let plusbtn = document.querySelector('.btn-plus');
let minusbtn = document.querySelector('.btn-minus');
let svgs = document.querySelector('.icons');
document.getElementsByClassName
let massivsvg = [
  `<svg class="icon heart" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <title>Сердце</title> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="draw" d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12" /> </svg>`,
  `<svg class="icon gear" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <title>Шестеренка</title> <g fill="none" class="draw" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path class="draw" d="M13 2v4l-2 1l-3-3l-4 4l3 3l-1 2H2v6h4l1 2l-3 3l4 4l3-3l2 1v4h6v-4l2-1l3 3l4-4l-3-3l1-2h4v-6h-4l-1-2l3-3l-4-4l-3 3l-2-1V2Z" /> <circle cx="16" cy="16" r="4" /> </g> </svg>`,
  `<svg class="icon star" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <title>Звезда</title> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="draw" d="m16 2l4 10h10l-8 7l3 11l-9-7l-9 7l3-11l-8-7h10Z" /> </svg>`,
  `<svg class="icon sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <title>Солнце</title> <g fill="none" stroke="currentColor"> <path  class="draw" d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4Z" /> <path stroke-linecap="round" class="draw" d="M12 3.5v2m8.5 6.5h-2m-13 0h-2m8.5 6.5v2m4.5-13L18 6M6 18l1.5-1.5M6 6l1.5 1.5m9 9L18 18" /> </g> </svg>`,
  `<svg class="icon moon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <title>Луна</title> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="draw" d="M14 2C9 2 3 7 3 15s6 14 14 14s13-6 13-11C19 25 7 13 14 2" /> </svg>`,
  `<svg class="icon my-icon" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <title>Крест в круге</title> <circle class="my-circle" cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="5"/> <line class="my-line" x1="50" y1="10" x2="50" y2="90" stroke="currentColor" stroke-width="5" stroke-linecap="round"/> <line class="my-line" x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="5" stroke-linecap="round"/> </svg>
`];
plusbtn.addEventListener('click', () => {
  svgs.innerHTML += massivsvg[Math.floor(Math.random() * massivsvg.length)];
});
minusbtn.addEventListener('click', () => {
  if (svgs.children.length > 0) {
    svgs.removeChild(svgs.lastElementChild);
}});