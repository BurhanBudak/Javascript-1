//Skapa egna konstruktorer (Constructors)

//Skapa en blueprint (ritning) på en helt ny grej t.ex. personer, bilar osv.

//Exempel - Skapa en konstruktor som beskriver en person
//Person blir en ny typ (prototyp)
function Person(name,age){
    this.name = name;
    this.age = age;
    this.children = [];
    this.email = [];
    this.cars = [];
}

//Skapa en konstruktor som beskriver en bil
function Car(regnr, fabrikat){
    this.regnr = regnr;
    this.fabrikat = fabrikat;
}
// Skapa en instans av Car = skapa ett objekt
let  c1 = new Car('ABC123', 'Volvo');
let c2 = new Car('XZY123','Mazda');
console.log(c1.regnr);
//Skapa flera objekt av Person() = skapa nya instanser
let mahmud = new Person('Mahmud',45); //Vi kan inte använda {}
let kalle = new Person('Kalle', 10);

//Mahmud och kalle blir tvp nya referenser till två olika objekt


//Ändra mahmuds egenskaper med punktnotation(dot notation)
mahmud.name = 'Al Hakim';
mahmud.age++;

//Lägg till egenskaper
mahmud.weight =90;


//Skapa en array av ett antal objekt (objekt referenser i en array)
let persons = [mahmud,kalle];
console.log(persons);
//Visa info om det första objektet
console.log(persons[0].name);
//Ändra namnet
persons[0].name = 'Mahmud';
console.log(persons[0].name);

//Objekt kan innehålla arrayer
//mahmud.children 0 = [];

kalle.name = 'Mehdi';
mahmud.children.push(kalle);

console.log(mahmud);
