const hamburger = document.querySelector(".hamburger");
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



// var str = "Hey Bram,~Ah~Laidback~Druk nog een keer op die playback~Nou nog een laagje gekkigheid erover heen Enzo~Een klein sausje~En dan gaan we terug~(Ey)~In de derde versnelling~Therapie, Ah Ah~Goed slapen, gezond eten, lekker bewegen~(Ik weet het)~Dat zijn dingen die we weten~Maar ook weer snel vergeten in spiralen naar beneden~Al die slecht nieuws verhalen maken het leven niet beter~Ik weet het, want je leeft die shit~En nu staat alles in de ijskast door deze shit?~Je hebt geen begrip en ik begrijp je~Het lijkt of alle ondernemers moeten wijken~Dit zijn de tijden bovendien dat als je jong bent~Je moet ontdekken het is oke als je eens dom bent~Daarvan leer je~Het bouwt karakter~(Het is oke)~Maar nu woon je in je scherm en erachter?~(Niet oke)~Het is wel spannend~En er zijn zombies~Die gemuilkorfd lopen niet als ons G~(Nah ah)~Het is iets anders dan de mooie rap wedstrijd~Ik zit in een spoedcursus hoe je het verzet leidt~Als je soms door de bomen heen het bos niet meer ziet~Therapie, Therapie, Therapie~Tony Soprano was niets minder dan een G~(En jij ook niet)~Therapie, Therapie, Therapie~Ik ben het type MC die moet beschrijven wat die voelt en ziet~(Oehoehoe)~Therapie, Therapie, Therapie~Mijn telefoon staat uit ik ben er een uurtje niet~(Ik ben er niet)~Therapie, Therapie, Therapie~Een open boek dat is een dope look~Je komt vanzelf op bezoek als je wat dopers zoekt~Ik zet mijn verses op de dopeste looks~Sinds Timberlands op een te grote broek~Ik werkte, voor niets op Youtube en werd ontslagen~(He he he he)~Dat is precies hoe ze een monster van mij maken~Ze proberen me te raken~Op vele vlakken~maar de families klagen~Al die motherfuckers~Ze gaan me framen als een gek maar het klopt niet~Ik ben te vloeibaar en te groot voor je hop G~Ik ben aan het trainen met renee nu en ik stop niet~(Ik stop niet)~Een rechte rug is de enige optie~Ik bouw mijn eigen platform~(Want?)~Want soms ben ik te hard en te plat voor ze~(Zeggen ze)~Veel mensen willen dat horen~Dus liever overbetaald dan onderschat worden~Als je soms door de bomen heen het bos niet meer ziet~Therapie, Therapie, Therapie~Tony Soprano was niets minder dan een G~(En jij ook niet)~Therapie, Therapie, Therapie~Ik ben het type MC die moet beschrijven wat die voelt en ziet~(Oehoehoe)~Therapie, Therapie, Therapie~Mijn telefoon staat uit ik ben er een uurtje niet~Therapie, Therapie, Therapie~(Na jaren hoor je die krekels en ineens dacht ik, Shit)~Ik hoor ik wordt gedissed";
// var res = str.split("~");

// let i = 0;
// setInterval(function(){
//     alert(res[i % res.length]);
//     i++;
// }, 6000)