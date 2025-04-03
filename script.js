const menuIcon = document.querySelector(".menu-icon");
const navigationListMobil = document.querySelector(".navigation-list-mobil");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navigationListMobil.classList.toggle("active");
});
