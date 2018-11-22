// Truthy & Falsy
//Följande värden är alltid falska i JS
//0
//null
//NaN
//false
//''
//""
//undefined

if(false || 0 || null || NaN || undefined || '' || "" ){
    console.log("Vi kommer aldrig hit");
}

let x = '';
if(x === ''){ //true
    console.log(' x är en tom sträng');
}

if(1){
    console.log('Vi har en etta');
}
let mahmud = 'Mahmud Al Hakim';
if(mahmud){
    console.log('Välkommen Mahmud');
}
if([]){
    console.log('Vi har en array');
}

if({}){
    console.log('Vi har ett objekt');
}

if('0'){
    console.log('Vi har en nolla');
}
if('false'){
    console.log("Vi har strängen false");
}
if(!NaN){
    console.log("Test av !NaN");
}