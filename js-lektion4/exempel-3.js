//Arbeta med typer (datatyper)

//1. string
let firstName = "Burhan";
let lastName = 'BUdak';
console.log(firstName,lastName);
console.log("Its very nice");
console.log('I love U JS!'); //ES Template strings,obs! Backticksn

// 2.NUmbers
let age = 45;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

//3.boolean(antigen true eller false)
let again = false; // eller 0
if(again)
    console.log("Inne i if satsen")
again = true;
if(again)
    console.log("Inne again i for-satsen!")

// 4. Uudefined (OBS! Detta är en typ i JS

let name; // <--Inte än string eller värde
console.log(name);

console.log(mobile); //OK eftersom mobile har deklarerats med var
var mobile;
mobile = "073-XXXXXXX";

//console.log(adress) FEL, ska inte vara innan
let adress;
adress= "Ymergatan 1";

//5. NULL

let nothing = "something";
nothing = null;


//6. typeof
console.log("_________________");
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof again);
console.log(typeof name);
console.log(typeof nothing);