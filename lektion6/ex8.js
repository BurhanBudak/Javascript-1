//Arbeta med IIFE Immediatly  function expression
(function {
    console.log('Jag är en IIFE--1 ');
)();

let result = (function msg{
    return 'Jag är en IIFE--2');
)();

console.log(result);

let result2 = function(){
    return 'Jag är en IFEE __3'
}
console.log(result2);