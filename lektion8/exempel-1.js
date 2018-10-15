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

//Använder objektets egenskaper
mahmud.print();
let i = mahmud.info();
console.log(i);
console.log(mahmud.name);

//Använd objektets metoder
mahmud.info();
console.log(mahmud.info());


//Repetition objektliteral
let Burhan = {
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

//Två olika sätt att skapa




//Skapa en egen konstruktor med function

function Person(){
    ;
    ;
}