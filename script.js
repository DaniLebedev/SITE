let burger = document.querySelector("#burger");
let nav = document.querySelector(".nav");
const links = document.querySelectorAll('.nav a');

burger.addEventListener("click", () => {BTN()})

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

function BTN()
{
        nav.classList.toggle("active");
        burger.classList.toggle("active");
}

