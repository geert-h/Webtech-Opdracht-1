const infoScreenDiv = document.createElement("div");
infoScreenDiv.classList.add("info-screen");
const contentDiv = document.createElement("div");
contentDiv.classList.add("content");
infoScreenDiv.appendChild(contentDiv);


// GENERATING INFO CONTAINERS
const titleContainer = document.createElement("div");
titleContainer.classList.add("content__header");
contentDiv.appendChild(titleContainer);
const genreContainer = document.createElement("div");
genreContainer.classList.add("genreContainer");
genreContainer.classList.add("artist-container");
contentDiv.appendChild(genreContainer);
const yearContainer = document.createElement("div");
yearContainer.classList.add("yearContainer");
yearContainer.classList.add("artist-container");
contentDiv.appendChild(yearContainer);
const posterContainer = document.createElement("div");
posterContainer.classList.add("posterContainer");
posterContainer.classList.add("artist-container");
contentDiv.appendChild(posterContainer);
const trailerContainer = document.createElement("div");
trailerContainer.classList.add("trailerContainer");
trailerContainer.classList.add("artist-container");
contentDiv.appendChild(trailerContainer);
const plotContainer = document.createElement("div");
plotContainer.classList.add("plotContainer");
plotContainer.classList.add("artist-container");
const plotH1 = document.createElement("h1");
plotH1.innerText = "Plot:"
plotContainer.appendChild(plotH1)
contentDiv.appendChild(plotContainer);


// GENERATING ARTISTS CONTAINERS
const directorContainer = document.createElement("div");
directorContainer.classList.add("artist-container");
contentDiv.appendChild(directorContainer);
const directorH1 = document.createElement("h1");
directorH1.innerText = "Director:"
directorContainer.append(directorH1);
const writerContainer = document.createElement("div");
writerContainer.classList.add("artist-container");
contentDiv.appendChild(writerContainer);
const writerH1 = document.createElement("h1");
writerH1.innerText = "Writers:"
writerContainer.append(writerH1);
const writerUl = document.createElement("ul");
writerContainer.append(writerUl);
const actorContainer = document.createElement("div");
actorContainer.classList.add("artist-container");
contentDiv.appendChild(actorContainer);
const actorH1 = document.createElement("h1");
actorH1.innerText = "Actors:"
actorContainer.append(actorH1);
const actorUl = document.createElement("ul");
actorContainer.append(actorUl);

const navElement = document.getElementsByTagName("nav")[0];
navElement.after(infoScreenDiv);

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
	GenerateInfo(){
		const titleH1 = document.createElement("h1");
		titleH1.innerText = "Top Gun Maverick";
		titleContainer.appendChild(titleH1);
		const genreH1 = document.createElement("h1");
		genreH1.innerText = "Genre: Action/Drama";
		genreContainer.appendChild(genreH1);
		const yearH1 = document.createElement("h1");
		yearH1.innerText = "Year: " + 2022;
		yearContainer.appendChild(yearH1);
		const posterImg = document.createElement("img");
		posterImg.src = "./resources/Poster.png";
		posterImg.alt = "Top Gun: Maverick Poster";
		posterContainer.appendChild(posterImg);
		const trailerVid = document.createElement("video");
		const trailerSrc = document.createElement("source");
		trailerSrc.src = "./resources/trailer.mp4";
		trailerSrc.type = "video/mp4";
		trailerVid.appendChild(trailerSrc);
		trailerVid.autoplay = true;
		trailerVid.controls = true;
		trailerVid.muted = true;
		trailerVid.play();
		// document.getElementById('vid').play();
		// trailerVid.alt = "Top Gun: Maverick Video";
		trailerContainer.appendChild(trailerVid);
		const plotParagraph = document.createElement("p");
		plotParagraph.innerText = "Mitchell is a test pilot for the U.S. Navy. Despite Maverick's abundance of achievements, his persistent insubordination has kept him from being granted the flag rank. The commander of the Pacific Fleet, former Top Gun rival and good friend Admiral Tom 'Iceman' Kazansky, often has Maverick's back. Maverick is a test pilot for the hypersonic 'Darkstar' scramjet program which is planned to be scrapped due to a favor of funding drones, by Rear Admiral Chester 'Hammer' Cain. To fulfill the scramjet program's contract the goal of flying Mach 10 must be achieved. Therefore, Maverick decides to go beyond the day's test speed, which is Mach 9, and try to achieve a speed of Mach 10. This caused the scramjet to be destroyed while flying due to the high speed. However, his career is saved by Iceman by assigning him to the Top Gun school at NAS North Island. Cain insists on telling Maverick that the era of crewed fighter aircrafts is soon to fall.";
		plotContainer.appendChild(plotParagraph);
	}
	GenerateArtists(){
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
		
		const directorDiv = document.createElement("div");
		directorDiv.innerText = name + ": " + birthDate;
		directorDiv.classList.add("tooltip");
		directorContainer.appendChild(directorDiv);
		MakeToolTip(directorDiv, movies, "Directed movies:");
	}
}
class Writer extends Artist {
	constructor(name, birthDate, books) {
		super(name,birthDate)
		this.books = books;
		const writerLi = document.createElement("li");
		writerUl.appendChild(writerLi);
		const writerDiv = document.createElement("div");
		writerDiv.innerText = name + ": " + birthDate;
		writerDiv.classList.add("tooltip");
		writerLi.appendChild(writerDiv);
		MakeToolTip(writerDiv, books, "Books:");
	}
}
class Actor extends Artist {
	constructor(name, birthDate, movies, photo) {
		super(name, birthDate)
		this.movies = movies;
		this.photo = photo;
		const actorLi = document.createElement("li");
		actorUl.appendChild(actorLi);
		const actorDiv = document.createElement("div");
		actorDiv.innerText = name + ": "+ birthDate;
		actorDiv.classList.add("tooltip");
		actorLi.appendChild(actorDiv);
		const actorImg = document.createElement("img");
		actorImg.src = photo;
		actorImg.alt = name + " headshot";
		actorContainer.appendChild(actorImg);
		MakeToolTip(actorDiv, movies, "Previous movies:");
	}
}

const topGun = new Movie();
topGun.GenerateInfo();
topGun.GenerateArtists();