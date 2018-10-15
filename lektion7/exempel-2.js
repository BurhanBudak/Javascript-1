//Arbeta med objekt i JS

//Objektliteral (Objekt Literal)
//Skapa objekt med hjälp av { }

let car = {};
let kalle = {};

let mahmud = {
    //egenskap
    name : 'Mahmud Al Hakim',
    age  : 45,
    weight  : 89.5,
    isMarried  : true,
    children : [],
    //Metoder
    printInfo:function(){
        console.log(this.name + ' är '+ this.age + ' år gammal!');
    },
    //this. är för den specifika objektet
    returnInfo:function(){
        return(this.name + ' är ' + this.age + 'år gammal!');
    }
    //nyckel : värde
};
console.log(mahmud); //Skriver ut hela objektet
console.log(mahmud.name);
console.log(mahmud.age);
console.log(mahmud.weight);

//obs! Metoden returnInfo returnerar en strängt
console.log(mahmud.returnInfo());
//Metoden printInfo skriver ut en sträng
mahmud.printInfo();

//Ändra egenskaper
mahmud.name = "Kalle Anka";

mahmud.age++; //Öka med ett
mahmud.age += 1;
mahmud.age = mahmud.age + 1;

mahmud.age--;//MInska med ett
mahmud.age -= 1;
mahmud.age = mahmud.age - 1;

//TA bort egenskaper
delete mahmud.weight;
console.log(mahmud.weight); // undefined
console.log(mahmud); // weight saknas!!!

//Lägg till egenskaper
mahmud.height = 170;
console.log(mahmud);

//TA BORT OBJEKTET MED NULL

mahmud = null;

let mehdi = {
    //Egenskaper
    name : 'Mehdi Al Hakim',
    age : 24,
    weight : 85,
    isMarried: false,
    children : []

};
