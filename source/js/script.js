let pageHeader = document.querySelector(".page-header");
let toggleButton = document.querySelector(".main-nav__toggle");
let mainNav = document.querySelector(".main-nav");

pageHeader.classList.add("page-header__menu-closed");
pageHeader.classList.add("page-header__menu-js");
mainNav.classList.add("main-nav__closed");

toggleButton.addEventListener("click", () => {
  pageHeader.classList.toggle("page-header__menu-closed");
  mainNav.classList.toggle("main-nav__closed");
})
