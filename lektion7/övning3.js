let a = 'hej';
let b = 12;
let minArray = [];

minArray.push(a,b);
console.log(minArray); //Vissar arrayens innehåll som är a och b
function swap(){
    return [a,b] = [b,a];
};
swap();
console.log([a,b]); //vissar bytet


