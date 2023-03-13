const actorDiv = document.createElement("div");
actorDiv.classList.add("actorDiv");
const writerDiv = document.createElement("div");
writerDiv.classList.add("writerDiv");
const naviman = document.getElementsByTagName("nav")[0];
naviman.after(actorDiv);
actorDiv.after(writerDiv);



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
		const writerH1 = document.createElement("h1");
		writerH1.innerText = name + birthDate;
		writerH1.style.fontSize = "100px";
		writerH1.style.color = "green";
		writerDiv.appendChild(writerH1);
	}
}
class Actor extends Artist {
	constructor(name, birthDate, movies, photo) {
		super(name, birthDate)
		this.movies = movies;
		this.photo = photo; //ref to actors headshots?
		const actorH1 = document.createElement("h1");
		actorH1.innerText = name + birthDate;
		actorH1.style.fontSize = "100px";
		actorH1.style.color = "blue";
		actorDiv.appendChild(actorH1);
		const actorImg = document.createElement("img");
		actorImg.src = photo;
		actorDiv.appendChild(actorImg);
	}
}

const actors = [
	new Actor("Tom Cruise", "July 3, 1962", "moviemoviemovie", "./resources/actors/tom-cruise.png"), 
	new Actor("Jennifer Connelly", "December 12, 1970", "moviemoviemovie", "plaatje"),
	new Actor("Miles Teller", "February 20, 1987", "moviemoviemovie", "plaatje")
];

const Dir = new Director("Joseph Kosinski", "1974-05-3", "Top Gun: Maverick, Oblivion, Tron: Legacy, Spiderhead, Only the Brave");


const writers = [
	new Writer("Writerman", "geboorte", "boekenboeken"),
	new Writer("Writerman", "geboorte", "boekenboeken"),
	new Writer("Writerman", "geboorte", "boekenboeken")
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