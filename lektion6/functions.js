//Deklarera en funktion

hej(); //ok

function hej(){
    alert("Hej från filen function.js");
}

hej2(); //FEL!!! vi får inte anropa anonyma funktioner före uttrycket

//Anonym funktion (saknar namn)
let hej2= function(){     //OBS! Vi måste ha parenteser
    alert("hEJ FRÅN EN anonym funktion");
}
//Detta kallas att ska ett uttryck med hjälp av en funktion
//Function Expression