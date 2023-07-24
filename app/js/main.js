let nav = document.querySelector('#nav');
let navToggle = document.querySelector('#navToggle');

navToggle.onclick = function () {
  nav.classList.toggle('show');
  navToggle.classList.toggle('open');
};