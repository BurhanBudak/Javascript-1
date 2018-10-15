let name = prompt("Hej,vad heter du?"); //frågar om namnet

function hello (){
    let message = 'Hej och välkommen till våran webbshop '+ name +"."; //Lägger till stringen i variabeln
     return document.getElementById("demo").innerHTML = message; //Värdet kopplas till id demo
};
hello(name); //anrop till funktion med argument name