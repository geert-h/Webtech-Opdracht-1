const colorPicker = document.getElementById("color_picker");
console.log(colorPicker);
colorPicker.addEventListener("change", watchColorPicker, false);


function watchColorPicker(event) {
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = event.target.value;
  });
  document.querySelectorAll("h1").forEach((h1) => {
    h1.style.color = event.target.value;
  });
}

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


class Movie {
	constructor(){
    }
}
class Artist {
	constructor(name, birthDate) {
		this.name = name;
		this.birthDate = birthDate;
	}
}
class Director extends Artist {
	constructor(name, birthDate, movies) {
		super(name, birthDate)
		this.movies = movies;
	}
}
class Writer extends Artist {
	constructor(name, birthDate, books) {
		super(name,birthDate)
		this.books = books;
	}
}
class Actor extends Artist {
	constructor(name, birthDate, movies, photo) {
		super(name, birthDate)
		this.movies = movies;
		this.photo = photo; //ref to actors headshots?
	}
}

const Dir = new Director("Joseph Kosinski", "1974-05-3", "Top Gun: Maverick, Oblivion, Tron: Legacy, Spiderhead, Only the Brave");


const writers = [new Writer("Writerman", "geboorte", "boekenboeken"), new Writer("Writerman", "geboorte", "boekenboeken"), new Writer("Writerman", "geboorte", "boekenboeken")];
const actors = [new Actor("Acteurman", "geboorte", "moviemoviemovie", "plaatje"), new Actor("Acteurman", "geboorte", "moviemoviemovie", "plaatje"), new Actor("Acteurman", "geboorte", "moviemoviemovie", "plaatje")];

class infoPageData {

	static title = "Top Gun: Maverick";
	static genre = "Action/Drama";
	static year = 2022;
	static director = "Joseph Kosinski"; // most likely not needed
	
	// stars 
	static poster = "Resources/Poster.png";
	static trailer = "Resources/trailer.mp4"; //youtube link more logical: https://www.youtube.com/watch?v=giXco2jaZ_4&ab_channel=ParamountPictures
	plot = " "

}
