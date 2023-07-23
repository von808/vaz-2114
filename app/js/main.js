$(function () {
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
    navToggle.toggleClass("open");
  });
})