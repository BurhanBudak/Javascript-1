//Arbeta med Objekt datum och tid i JS

//Man måste skapa en instans av datumet
let today = new Date();
console.log(today);
console.log(today.getFullYear()); // 2018
console.log(today.getMonth()); //9 = oktober
console.log(today.getDate());
console.log(today.getDay()); // 3 = Onsdag (0:Sun 1:Mon, osv)

console.log("Kloclan ");
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());