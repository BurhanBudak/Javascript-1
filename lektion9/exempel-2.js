//Objekt numbers

let PI = 3.14159;
console.log(typeof PI);
// Avrunda till två decimaler
console.log(PI.toFixed(2)); //3.14
console.log(PI.toPrecision(2)); 3.1

//Visa MAx - värdet på ett nummrt i JS
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(-Number.MAX_VALUE);

//isNaN
let x;
console.log(x); //undefined
x = x+2; //NaN
console.log(x);
//Statiska metoder
console.log(Number.isNaN()); //false
console.log(Number.isNaN(x)); //true

//Math.
PI = Math.PI;
console.log(PI);

console.log(Math.E);

console.log(Math.abs(-8769)); //8769
console.log(Math.pow(2,2)); //4
console.log(Math.pow(2,4)); //2*2*2*2= 16
console.log(Math.sqrt(25)); //Rotten av 5

//Avrunda till närmaste heltal
let pris = 10.40;
console.log(Math.round(pris)); //10
pris = 10.50;
console.log(Math.round(pris));
console.log(pris.toFixed()); //11

//Ceil and floor
let tal = 10.10;
console.log(Math.ceil(tal)); //11
tal = 10.99;
console-log(Math.floor(tal));

//Max och min
console.log(Math.max(1,4,143,76,2));

//Slumptal
console.log(Math.random()); // mellan 0 och 1
//Mellan 1 0ch 10
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);