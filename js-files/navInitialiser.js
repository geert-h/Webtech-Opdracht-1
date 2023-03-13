// CREATING NAV MOMENT
const nav = document.getElementsByTagName("nav")[0];
nav.classList.add("nav-content");
const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("nav-content__hamburger");
nav.appendChild(hamburgerDiv);
for(let i = 0; i < 3; i++){
	const spanItem = document.createElement("span");
	spanItem.classList.add("nav-content__hamburger--bar");
	hamburgerDiv.appendChild(spanItem);
}
const logoImg = document.createElement("img");
logoImg.classList.add("nav-content__logo-link--image");
logoImg.src = "./resources/logo-white.png";
logoImg.alt = "top gun logo";
const logoA = document.createElement("a");
logoA.classList.add("nav-content__logo-link");
logoA.href = "./index.html";
logoA.appendChild(logoImg);
nav.appendChild(logoA);

const navUl = document.createElement("ul");
navUl.classList.add("nav-content__unordered-list");
nav.appendChild(navUl);
for(let i = 0; i < 5; i++){
	const liA = document.createElement("a");
	liA.classList.add("nav-content__item--ref");
	const liItem = document.createElement("li");
	liItem.classList.add("nav-content__item");
	liItem.appendChild(liA);
	navUl.appendChild(liItem);
}
document.querySelectorAll(".nav-content__item--ref")[0].href = "./plot.html";
document.querySelectorAll(".nav-content__item--ref")[0].textContent = "PLOT";
document.querySelectorAll(".nav-content__item--ref")[1].href = "./cast.html";
document.querySelectorAll(".nav-content__item--ref")[1].textContent = "CAST";
document.querySelectorAll(".nav-content__item--ref")[2].href = "./trivia.html";
document.querySelectorAll(".nav-content__item--ref")[2].textContent = "TRIVIA";
document.querySelectorAll(".nav-content__item--ref")[3].href = "./reviews.html";
document.querySelectorAll(".nav-content__item--ref")[3].textContent = "REVIEWS";
document.querySelectorAll(".nav-content__item--ref")[4].href = "./info.html";
document.querySelectorAll(".nav-content__item--ref")[4].textContent = "INFO";