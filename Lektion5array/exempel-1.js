//Arbeta med array

//Skapa en tom array
let = cars1 = []

//Skapa en array som innehåller data
let cars2 = ["Volvo","Saab","Koenigsegg"]
//Detta är en array-literal

//Skapa en array med en konstruktor
let cars3 = new Array(1,2,3)
let cars4 = new Array() //Tom array

//Att komma åt data
console.log(cars2[0])
console.log(cars2[1])
console.log(cars2[2])
console.log(cars2)
console.log(cars2[3]) //Undefined

let bil1 = cars2[0]
console.log(bil1)

//Ändra ett element
cars2[0] = "Mazda"
console.log(cars2)
console.log(bil1)

//En array kan innehålla olika typer
let person = ["Burhan","BUdak", 26,true];

//Du kan skapa 4 olika variabler istället för en array
let firstName = "Burhan"
let lastName = "Budak"
let age = 26;
let cool = true;

//Hitta antal element med egenskapen .lenght
let antal = person.length;
console.log(antal);

//Sotera en array
console.log(cars2);
cars2.sort()
console.log(cars2);

//Arbeta med en "stack"

console.log("----------------------");

// Abeta med en "stack"
let stack = [];             // Skapa en tom array
stack.push("JavaScript 1"); // Lägg till sist i arrayen
console.log(stack);
stack.push("HTML och CSS");
console.log(stack);
stack.push("JavaScript 2");
console.log(stack);

let currentLength = stack.push("Bla bla bla");
console.log(stack);
console.log("Aktuell längd: ");
console.log(currentLength);

stack.push();
stack.push();
stack.push();
stack.push();
console.log(stack.length);

// Ta bort ett element
stack.pop(); // OBS! tar bort sista elementet
console.log(stack);

// Spara sista elementet innan borttagning
let kurs = stack.pop(); 
console.log(stack);
console.log(kurs);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
console.log("-----------------");

// Mer om array-konstruktorn
let test1 = new Array(1973,2008,2018); 
console.log(test1);
console.log(test1.length);
// Vad gör denna sats?
let test2 = new Array(1973);
test2.push(2008);
test2.push(2018);
console.log(test2);
console.log(test2.length);
let test3 = [10];
console.log(test3);
console.log(test3.length);
// Vad gör denna sats?
let test4 = new Array('10'); 
console.log(test4);
console.log(test4.length);

//Test cars

let cars = new Array(2);
cars[cars.length] = "Volvo";
console.log(cars);