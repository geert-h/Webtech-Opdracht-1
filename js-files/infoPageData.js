const directorDiv = document.createElement("div");
directorDiv.classList.add("directorDiv");
const writerDiv = document.createElement("div");
writerDiv.classList.add("writerDiv");
const actorDiv = document.createElement("div");
actorDiv.classList.add("actorDiv");
const naviman = document.getElementsByTagName("nav")[0];

naviman.after(directorDiv);
directorDiv.after(writerDiv);
writerDiv.after(actorDiv);

function MakeToolTip(hovertext, arr, text) {
	const toolTipSpan = document.createElement("span");
	toolTipSpan.classList.add("tooltip_text");
	hovertext.appendChild(toolTipSpan);
	const arrUl = document.createElement("ul");
	const textH1 = document.createElement("h1");
	textH1.innerText = text;
	toolTipSpan.appendChild(textH1);
	toolTipSpan.appendChild(arrUl);
	arr.forEach(item => {
		const arrLi = document.createElement("li");
		arrLi.innerText = item;
		arrUl.appendChild(arrLi);
	});
	hovertext.onmouseover = function (e) {
		var x = e.clientX,
			y = e.clientY;
			height = toolTipSpan.getBoundingClientRect().height;
		toolTipSpan.style.left = (x) + 'px';
		toolTipSpan.style.top = (y - height - 40) + 'px';
	}
}

class Movie {
	constructor(){
    }
}
class Artist {
	constructor(name, birthDate, opsommer) {
		this.name = name;
		this.birthDate = birthDate;
	}
}
class Director extends Artist {
	constructor(name, birthDate, movies) {
		super(name, birthDate)
		this.movies = movies;
		
		const directorH1 = document.createElement("div");
		directorH1.innerText = name + ": "+ birthDate;
		directorH1.style.fontSize = "100px";
		directorH1.style.color = "yellow";
		directorH1.classList.add("tooltip");
		directorDiv.appendChild(directorH1);
		MakeToolTip(directorH1, movies, "Directed movies:");
	}
}
class Writer extends Artist {
	constructor(name, birthDate, books) {
		super(name,birthDate)
		this.books = books;
		const writerH1 = document.createElement("div");
		writerH1.innerText = name + birthDate;
		writerH1.style.fontSize = "100px";
		writerH1.style.color = "green";
		writerH1.classList.add("tooltip");
		writerDiv.appendChild(writerH1);
		MakeToolTip(writerH1, books, "Books:");
	}
}
class Actor extends Artist {
	constructor(name, birthDate, movies, photo) {
		super(name, birthDate)
		this.movies = movies;
		this.photo = photo; //ref to actors headshots?
		const actorH1 = document.createElement("div");
		actorH1.innerText = name + ": "+ birthDate;
		actorH1.style.fontSize = "100px";
		actorH1.style.color = "blue";
		actorH1.classList.add("tooltip");
		actorDiv.appendChild(actorH1);
		const actorImg = document.createElement("img");
		actorImg.src = photo;
		actorImg.alt = name + " headshot";
		actorDiv.appendChild(actorImg);
		MakeToolTip(actorH1, movies, "Previous movies:");
	}
}

const Dir = new Director("Joseph Kosinski", "1974-05-3", ["Top Gun: Maverick, Oblivion", "Tron: Legacy", "Spiderhead", "Only the Brave"]);

const writers = [
	new Writer("Writerman", "geboorte", ["boek1", "boek2", "boek3"]),
	new Writer("Writerman", "geboorte", ["boek4", "boek5", "boek6"]),
	new Writer("Writerman", "geboorte", ["boek7", "boek8", "boek9"])
];

const actors = [
	new Actor("Tom Cruise", "July 3, 1962", ["Top Gun (1986)", "Mission: Impossible (1996)", "Mission: Impossible - Fallout (2018)", "The Mummy (2017)", "Jack Reacher (2012)"], "./resources/actors/tom-cruise.png"),
	new Actor("Jennifer Connelly", "December 12, 1970", ["Career Opportunities (1991)", "Labyrinth (1986)", "Requiem for a Dream (2000)", "A Beautiful Mind (2001)", "Hulk (2003)"], "./resources/actors/jennifer-connelly.png"),
	new Actor("Miles Teller", "February 20, 1987", ["Whiplash (2014)", "War Dogs (2016)", "Fantastic Four (2015)", "Footloose (2011)", "The Spectacular Now (2013)"], "./resources/actors/miles-teller.png")
];

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