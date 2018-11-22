function Dator(tillverkare,processor,RAM, OS) {
    this.Tillverkare = tillverkare;
    this.Processor = processor;
    this.RAM = RAM;
    this.OS = OS
}

function Bil(name,model,weight,color) {
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
    this.start = function () {};
    this.brake = function(){};
    this.drive = function () {};
    this.stop = function(){}
}
function Car(registreringsnummer,fabrikat,växellåda,miltal,tillverkningsår,bränsle) {
    this.registreringsnummer = registreringsnummer;
    this.fabrikat = fabrikat;
    this.växellåda = växellåda;
    this.miltal = miltal;
    this.tillverkningsår = tillverkningsår;
    this.bränsle = bränsle;
}
function Dog(breed,size,age,color) {
    this.Breed = breed;
    this.Size = size;
    this.Age = age;
    this.Color = color;
    this.Eat = function () {};
    this.Sleep = function () {};
    this.Sit = function () {};
    this.Run = function () {};
}
let dator = new Dator('Samsung','Intel i3',4+'GB','Windows 7');
const bil = new Bil('Fiat',500,500+'kg','vit');
const polo = new Car('ABC'+123,'Tyskland','Manuell',10000+'mil',1999,'bensin');
const mini = new Car('XYZ'+123,'England','Automat',5000+'mil',2005,'diesel');
const hund_1 = new Dog('Neopolitan Mastiff','Large',5+'years','Black');
const hund_2 = new Dog('Maltese','Small',2+'years','White');
const hund_3 = new Dog('Chow Chow','Medium',3+'years','brown');
console.log(dator);
console.log(bil);
console.log(polo);
console.log(mini);
console.log(hund_1);
console.log(hund_2);
console.log(hund_3);