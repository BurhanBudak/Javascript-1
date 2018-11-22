/* HTML Event Attributes
Events hanteras inne i HTML-koden med hjälp av olika a9ribut
som kopplas direkt <ll HTML-element.
(OBS! Rekommenderas inte. Följer ej SoC-principen, se nästa bild)*/

function demo1() {
    let p = document.getElementsByTagName('p')[0];
    p.innerHTML = "Exempel på HTML Event Attribut";
}
function demo2() {
    //Hämta ett specifikt element med hjälp av id
    let demo1 = document.getElementById('demo1');
    demo1.innerHTML = "Exempel på HTML Event Attribut."
}
/*2.Standard DOM Events
Events hanteras inne i JavaScript-koden med hjälp av olika
egenskaper som finns i DOM.
OBS! Vi får bara koppla en enda funk<on <ll varje event.
h9ps://www.w3schools.com/jsref/dom_obj_event.asp*/

let btn1 = document.getElementById('btn1');
btn1.onclick = demo3;       //OBS inga paranteser
//btn1.onclick = demo4;     //Funkar inte pga btn1 är redan upptagen för demo3


function demo3() {
    let p = document.getElementById('demo3');
    p.innerHTML = "Exempel på Standard DOM Standard"
}

/*
3. DOM EventListener
Events hanteras med hjälp av metoden addEventListener()
Du kan koppla flera olika funktioner till varje event.
Du kan också ta bort events med hjälp av metoden
removeEventListener()
h9ps://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/

let btn2 = document.getElementById('btn2');
//console.dir(btn2);
btn2.addEventListener('click' , demo4);
btn2.addEventListener('click' , demo5);
//Är mer flexibelt för att man kan koppla flera functioner till event

function demo4() {
    let p = document.getElementById('demo4');
    p.innerHTML = "Exempel på DOM EventLIstener.";
}
function demo5() {
    let p = document.getElementById('demo4');
    p.innerHTML = "Exempel på DOM EventLIstener.";
}