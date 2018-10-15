// Några användbara metoder i objektet Window

//1. Prompt (inmatningsfält) och alert (popup-ruta)
let person = prompt('Vad heter du?');
//alert('hej '+person);

//2.setTimeout
setTimeout(helloPopup,5000)   //Gör anrop till funktionen och alert startar efter 5 sekunder

//3.setIntervall. Kör en funktion flera gånger,
//efter ett visst antal sekunder
setInterval(helloConsole ,5000);


function helloConsole(){
    console.log(person);
}

function helloPopup(){
        alert('hej ' + person);
    }