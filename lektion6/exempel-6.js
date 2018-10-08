//Deklarera en funktion med en parameter
function hello(message = "Welcome to my site!"){

    console.log(message);

}

//Anropa funktion
hello("Här kommer meddelande nr 1!");
hello("Här kommer meddelande nr 2!");
hello("Här kommer meddelande nr 3!");
//Data som skickas vid anropet kallas argument!

hello(12345);
hello(true);
hello(); //undefined löser vi med hjälp av 
// en förvald parameter(default parameter)

console.log('__________________________________________________')

//skapa en funktion som beräknar summan av två tal

function sum (a = 0,b = 0){
        console.log(a+b);
}

sum(7,9);
sum();
sum(123,456,789);
sum("text");

    console.log('_____________________________');

    function multiply(a=0,b=0){
        console.log("**********   Multiply *********");
        console.log(a*b);
        console.log('***********MUltiply**************');
    
    }
    multiply(10,5); //50
    multiply();     //är noll pga förvalda parametrar
    multiply(100); //NaN
    multiply('Text', 50); //NaN


//Egen console.log

function log(text){
    console.log('**********************');
    console.log('* ' + text);
    console.log('**********************');
}
log('Hej BUrhan');

// En funktion som anropar en annan funktion

    function hello3(name){
        log('Hello '+ name);
    }
    hello3();
    hello3();
    hello();

//Funktion,tre parametrar

function age(firstName,lastName,age = 'alldeles'){
        log(firstName + 'är '+ age + 'år gammal!');
        log(` ${firstName}är ${age} år gammal`)  //Templetes string
}
console.log("************$************");

//En funktion med ett godtyckligt antal parametrsr
function manyThings(...things){
    console.log(things);
}
manyThings(1);
manyThings(1,2);
manyThings(1,2,3);
manyThings("Burre", "Budak", "Blue");
manyThings("Yunus", "Feyza",45);
manyThings();
