const card = document.querySelectorAll(".card-animation");
const logo = document.querySelector(".logo");
const nav_item = document.querySelectorAll(".main-nav-item");

function card_animation(child_number) {
  card[child_number].classList.add("card-animation-class");

  setTimeout(() => {
    card[child_number].classList.remove("card-animation-class");
  }, 5000);
}

function logo_animation() {
  logo.classList.add("logo-animation");

  setTimeout(() => {
    logo.classList.remove("logo-animation");
  }, 900);
}

logo_animation();

function active_button(child_number) {
  console.log(child_number);
  nav_item[0].classList.remove("active-navbar");
  nav_item[1].classList.remove("active-navbar");
  nav_item[2].classList.remove("active-navbar");
  nav_item[3].classList.remove("active-navbar");
  nav_item[4].classList.remove("active-navbar");
  nav_item[child_number].classList.add("active-navbar");
}
