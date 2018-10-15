// scope (räckvid)

console.log('--------Lokal----------------');
{
    let x = 10;    //Skapas i kodblocken. Kan ej användas utanför kodblocken
    console.log('x = ' + x);
}

// console.log(x); //ReferenceError: x is not defined för att x är en lokal

{
    var y = 10;  //Variabeler skapas med nyckelordet var gör att den kan användas utanför blocket.
    console.log('y = ' + y);
}

console.log('y =' + y);//OK => 1

console.log('_______LOkAL__________');
//Variabler inne i funktioner är alltid lokala
function demo(){
    var local_1 = 1;
    let local_2 = 2;
    console.log(local_1);
    console.log(local_2);
}
demo();
//Att skriva  ut 
//console.log(a); //ReferenceError: a is not defined
//console.log(b); //ReferenceError: b is not defined

console.log('__________Global_________');

//Variabler utanför funktioner, globala variabler (The Global scope)

var global_1 = 10;
let global_2 = 20;
const global_3 = 30;
console.log(global_1);
console.log(global_2);
console.log(global_3);

console.log('---------Globala och lokala variabler');
var global_4 = 'En Global variabel';

function demo2(){
    let local_3 = "En lokal variabel";
    console.log(local_3);
}
demo2();
console.log(global_4);
//console.log(local_3); // ReferenceError

