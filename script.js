const mobileNavBtn = document.querySelector(".btn-mobile");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnClose = document.querySelector(".btn-close");

function mobileNavShow() {
  mobileNav.classList += " mobile-nav-show";
  mobileNavBtn.classList.add("toggle");
}

function mobileNavCLose() {
  mobileNav.classList = "mobile-nav";
  mobileNavBtn.classList.remove("toggle");
}

mobileNavBtn.addEventListener("click", mobileNavShow);
mobileNavBtnClose.addEventListener("click", mobileNavCLose);
