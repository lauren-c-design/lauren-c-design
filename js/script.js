const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

if (localStorage.getItem("data-theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  var themeIcon = document.querySelector("#theme-picture");
  themeIcon.setAttribute("src", "assets/sun.svg");
  toggleSwitch.checked = true;
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    var themeIcon = document.querySelector("#theme-picture");
    themeIcon.setAttribute("src", "assets/sun.svg");
    localStorage.setItem("data-theme", "dark");

  } else {
    document.documentElement.setAttribute("data-theme", "light");
    var themeIcon = document.querySelector("#theme-picture");
    themeIcon.setAttribute("src", "assets/moon.svg");
    localStorage.setItem("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
