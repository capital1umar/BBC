const mobileNav = document.getElementById("mobileNav");
const openNav = document.querySelector("#openNav");

// function openNavigation() {
//   const openNav = document.querySelector("#openNav");
//   openNav.style.display = "flex";
//   mobileNav.style.display = "none";
// }

function openNavigation() {
  const openNav = document.querySelector("#openNav");
  const mobileNav = document.querySelector("#mobileNav");
  openNav.style.display = "flex";
  openNav.style.opacity = "1";
  openNav.style.pointerEvents = "auto";
  openNav.style.visibility = "visible";

  mobileNav.style.display = "none";
}

function closeNavigation() {
  openNav.style.display = "none";
  mobileNav.style.display = "block";
}
