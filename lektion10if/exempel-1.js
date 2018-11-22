/*
let score = Math.round(Math.random()*11)+45;
//if satsen
if(score >= 50){
    congratulate();
}
//if-else satsen
else {
    lose();
}

function congratulate(){
    console.log('Congratulations you got '+score);
}
function lose(){
    console.log('Try again, you got '+ score);
}
// if...else-if-satsen

//let today = new Date();
//let hour = today.getHours();
let hour = new Date().getHours();
let greeting = '';
if(hour<12){
    greeting = 'God morgon!';
}
// För att hour är både under 12 och 17 så blir god morgon först ut
//om man tar bort else_if så tar God dag över värdet.
else if(hour < 19){
    greeting = 'God dag!';
}
else{
    greeting = 'Gokväll';
}
console.log(greeting);


//== eller ===

let x = '5'; // // eller "5"
console.log(typeof x); //string

let y = 5;
console.log(typeof y); //number

if(x==5){ //Farligt
    console.log(x+5); //55 konkatenering
}
if(y==5){
    console.log(y+10); //Ok men....
}
if(x===5){
    console.log(x+4); //Ingenting
}
*/

// Ternary - operator ? :
//Vilkor ? Om sant : Om falskt
function getFee(isMember){
    return (isMember ? '20kr' : '100kr');
}
//exakt samma funktion med if else istället för ternary
function getFeeVersion2(isMember){
    if(isMember){
        return '20kr';
    }else{
        return '100kr';
    }
}
//samma men utan klamrar
function getFeeVersion3(isMember){
    if(isMember) return '20kr';

    else return '100kr';
}
console.log(getFree(true));
console.log(getFree(false));

