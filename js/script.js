const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function showMenu() {
  menu.classList.toggle("show-menu");
});

// dropBtn

const dropBtn = document.querySelector("#dropBtn");
const hiddenSection = document.querySelector(".hidden-section");


dropBtn.addEventListener("click", function () {
    hiddenSection.classList.toggle('show-section');
});

// closeBtn

const closeBtn = document.querySelector('#closeBtn');

closeBtn.addEventListener('click', function () {
  hiddenSection.classList.toggle('show-section');
})