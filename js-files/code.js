// document.getElementById("testp").textContent = "TESTING";
// document.getElementById("testp").innerHTML = "Hello World";

// var myLink = document.createElement('a');
// var myText = document.createTextNode('Click');
// myLink.setAttribute('href', 'http://example.org');
// myLink.appendChild(myText);
// var p = document.getElementById('testp');
// p.appendChild( myLink );

const hamburger = document.querySelector(".nav-content__hamburger");
const navMenu = document.querySelector(".nav-content__unordered-list");
const html = document.querySelector("html");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	html.classList.toggle("active");
	body.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		html.classList.remove("active");
		body.classList.remove("active");
	})
);

window.addEventListener("resize", function (event) {
	var width =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	if (width >= 1023) {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		html.classList.remove("active");
		body.classList.remove("active");
	}
});

// var cursor = document.querySelector('.cursor');
// var cursorinner = document.querySelector('.cursor2');
// var a = document.querySelectorAll('a');

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });

// document.addEventListener('mousemove', function(e){
//   var x = e.clientX;
//   var y = e.clientY;
//   cursorinner.style.left = x + 'px';
//   cursorinner.style.top = y + 'px';
// });

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
//   cursor.style.animation = 'toRight 1.5s forwards';
// //   alert(document.getElementById("sergayimg").src);
// //   document.getElementById("sergayimg").src = "./sergay2.png";
// //   cursor.firstChild.src = "./sos.png";
//   cursorinner.classList.add('cursorinnerhover');
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click');
//   cursor.style.animation = '';
// //   document.getElementById("sergayimg").src = "./sergay.png";
//   cursorinner.classList.remove('cursorinnerhover')
// });

// a.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     cursor.classList.add('hover');
//   });
//   item.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hover');
//   });
// })

const clickablePreview = document.querySelectorAll(".actor-preview");
clickablePreview.forEach((button) => {
	// alert(button);
});
// alert(clickablePreview.values);
const clickableDivs = document.querySelectorAll(".actor-container");
const additionalDivs = document.querySelectorAll(".cast-popup");
const closeBtns = document.querySelectorAll(".cast-popup__close-btn");

let currentAdditional = null;

for (let i = 0; i < clickableDivs.length; i++) {
	const clickable = clickableDivs[i];
	const additional = additionalDivs[i];
	const closeBtn = closeBtns[i];

	clickable.addEventListener("click", function () {
		if (currentAdditional !== null) {
			currentAdditional.classList.remove("show");
			currentAdditional.classList.add("hide");
			document.querySelectorAll(".is-open").forEach(function (clickable) {
				clickable.classList.remove("is-open");
			});
			currentAdditional.addEventListener(
				"animationend",
				function () {
					currentAdditional.classList.remove("hide");
					currentAdditional.classList.remove("active");
				},
				{ once: true }
			);
		}
		additional.classList.add("show", "active");
		currentAdditional = additional;
		document
			.querySelectorAll(".cast-content__container__item:not(.show)")
			.forEach(function (clickable) {
				clickable.classList.add("is-open");
			});
	});

	closeBtn.addEventListener("click", function () {
		additional.classList.add("hide");

		document.querySelectorAll(".is-open").forEach(function (clickable) {
			clickable.classList.remove("is-open");
		});
		additional.addEventListener(
			"animationend",
			function () {
				additional.classList.remove("show");
				additional.classList.remove("hide");
				additional.classList.remove("active");
			},
			{ once: true }
		);
		currentAdditional = null;
	});
}

for (let i = 0; i < clickablePreview.length; i++) {
	const clickable = clickablePreview[i];
	const additional = additionalDivs[i];
	const closeBtn = closeBtns[i];

	clickable.addEventListener("click", function () {
		alert(boem);
		if (currentAdditional !== null) {
			currentAdditional.classList.remove("show");
			currentAdditional.classList.add("hide");
			document.querySelectorAll(".is-open").forEach(function (clickable) {
				clickable.classList.remove("is-open");
			});
			currentAdditional.addEventListener(
				"animationend",
				function () {
					currentAdditional.classList.remove("hide");
					currentAdditional.classList.remove("active");
				},
				{ once: true }
			);
		}
		additional.classList.add("show", "active");
		currentAdditional = additional;
		document
			.querySelectorAll(".cast-content__container__item:not(.show)")
			.forEach(function (clickable) {
				clickable.classList.add("is-open");
			});
	});

	closeBtn.addEventListener("click", function () {
		additional.classList.add("hide");

		document.querySelectorAll(".is-open").forEach(function (clickable) {
			clickable.classList.remove("is-open");
		});
		additional.addEventListener(
			"animationend",
			function () {
				additional.classList.remove("show");
				additional.classList.remove("hide");
				additional.classList.remove("active");
			},
			{ once: true }
		);
		currentAdditional = null;
	});
}

