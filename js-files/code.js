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

const clickableDivs = document.querySelectorAll('.cast-content__container__item');
const additionalDivs = document.querySelectorAll('.TOMTEST');
const closeBtns = document.querySelectorAll('.close-btn');

let currentAdditional = null;

for (let i = 0; i < clickableDivs.length; i++) {
  const clickable = clickableDivs[i];
  const additional = additionalDivs[i];
  const closeBtn = closeBtns[i];

  clickable.addEventListener('click', function() {
    if (currentAdditional !== null) {
      currentAdditional.classList.remove('show');
      currentAdditional.classList.add('hide');
      document.querySelectorAll('.is-open').forEach(function(clickable) {
        clickable.classList.remove('is-open');
      });
      currentAdditional.addEventListener('animationend', function() {
        currentAdditional.classList.remove('hide');
        currentAdditional.classList.remove('active');
      }, {once: true});
    }
    additional.classList.add('show', 'active');
    currentAdditional = additional;
    document.querySelectorAll('.cast-content__container__item:not(.show)').forEach(function(clickable) {
      clickable.classList.add('is-open');
    });
  });

  closeBtn.addEventListener('click', function() {
    additional.classList.add('hide');

    document.querySelectorAll('.is-open').forEach(function(clickable) {
      clickable.classList.remove('is-open');
    });
    additional.addEventListener('animationend', function() {
      additional.classList.remove('show');
      additional.classList.remove('hide');
      additional.classList.remove('active');
    }, {once: true});
    currentAdditional = null;
  });
}