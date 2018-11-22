//Arbeta med konstruktorer

//Skapa ett nytt objekt med hjälp av en konstruktor
let mahmud = new Object();

//Egenskaper
mahmud.name = 'Mahmud Al Hakim';
mahmud.age = 45;

// En Metod som skriver ut info i console
mahmud.print = function(){
    console.log(this.name + 'år ' +this.age + ' år gammal');
}

//En metod so returnerar en sträng
mahmud.info = function(){
    return this.name + ' är '+ this.age + 'år gammal';
    //return `${this.name} är ${this.age} år gammal.`;
}

console.log('_____// Använd objektets egenskaper____')
console.log(mahmud.name);

console.log('____ANvänd objektets metoder_____')
mahmud.print();
let i = mahmud.info();
console.log(i);
console.log(mahmud.info());

console.log('____Repetition objektliteral____')
let burhan = {
    name : 'Burhan Budak',
    age : 26,
    city : 'Stockholm',
    study : 'JavaScript',
    print : function(){
        console.log(this.name + 'år ' +this.age + ' år gammal');
    },
    info:function(){
        return this.name + ' är ' + this.age + ' år gammal';
    }
}

console.log('_____Lägg till flera egenskaper och metoder____')
burhan.mobile = '07093453434';
burhan.run=function(){
    console.log(this.name + ' is running...');
}
console.log(burhan.info());
console.log(burhan.mobile);
console.log(burhan.run());
console.log(burhan);   //Vissar hela objektet

// Två olika sätt att skapa en array i JS
// 1. Arrayliteral (Array Literal)
let persons = ['Mahmud','Burhan']; 
// 2. Arraykonstruktor (Array Constructor)
let cars = new Array();  

cars[0] = 'Volvo';
cars[1] = 'Mazda';
// Samma som ovan... men som en literal istället
cars = ['Volvo', 'Mazda'];

// Sammanfattning - Olika sätt att skapa objekt i JS
// 1. Literal Notation
let vadSomHelst = {};

// 2. Constructor Notation
let ettAnnatObjekt = new Object();

// En primitiv sträng
let str1 = '';  
console.log(typeof str1); // String
// Ett objekt av typen string
let str2 = new String();  // Object
console.log(typeof str2);