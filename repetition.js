//Javascript

//Array
//En första Array (metod 1)
//Exempel 1
var weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

//Hämta ur Array..
console.log("Exempel 1. Första veckodagen " + weekdays[0]);

var month = [];
month[0] = "Januari";
month[1] = "Februari";
month[2] = "Mars";
month[3] = "April";
month[4] = "Maj";
month[5] = "Juni";
month[6] = "Juli";
month[7] = "Augusti";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "December";

console.log("Månad" + month[1]);
console.log("Jag är född i " + month[1]);

//Hur loopar man igenom en array? Kolla efter for-loop, for-in-loop och for-of-loop

//Skapa ett objekt i JavaScript(metod 1)
var car = {color: "ful", hasAWheel: true, numberOfSeats: 100000};
//Ett objekt består av egenskaper - attribut(key) och ett värde(value)
//color är attribut
//"ful" är värdet

//Ex 2
var computer = {color: "gray", brand: "Mac"};

//Ex 3
var student = new Object();
student.name = "Anton";
student.favoriteTeam = "AIK";

var anotherStudent = {};
anotherStudent["name"] = "oscar";
anotherStudent["favoriteTeam"] = "HIF";


//Hämta från objekt
console.log("Den första studenten heter " + student.name);
console.log("Den andra heter " + anotherStudent["name"]);

//Objekt i arrayer
var students = [student, anotherStudent];
//Hämta namnet på första studenten i arrayen
console.log("Första studenten i array: " + students[0].name);
console.log("Första andra i array: " + students[1].name);

//Array i array
var favoriteGames = [["super Mario Bros 1", "Något här"], ["Röv", "WOW"]];
console.log("Andra spelet i första listan " + favoriteGames[0][1])

var superMario64 = {title: "Super Mario 64", countries: ["Sverige", "USA"], characters: ["Mario", "Toad", "Peach"]};
//Hämta karaktären
console.log("Första karaktären är " + superMario64.characters[0]);
console.log("Andra landet är " + superMario64["countries"][1]);

//Objekt i objekt
var club = {name: "PSG", playedInChampionsLeague: true, founded: 1951};

var soccerPlayer = {name: "Zlatan", originalClub: {name: "Malmö FF", playedInChampionsLeauge: true, founded: 1901}};
console.log("Året då Zlatans originalklubb startades " + soccerPlayer.originalClub.founded);
console.log(" Zlatans originalklubb heter " + soccerPlayer["originalClub"]["founded"]);









