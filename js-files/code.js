const hamburger = document.querySelector(".nav-content__hamburger");
const navMenu = document.querySelector(".nav-content__unordered-list");
const html = document.querySelector("html");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  html.classList.toggle("active");
  body.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
   hamburger.classList.remove("active")
   navMenu.classList.remove("active")
   html.classList.remove("active");
   body.classList.remove("active");
}))

window.addEventListener('resize', function(event){
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if (width >= 1023){
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        html.classList.remove("active");
        body.classList.remove("active");
    }
});