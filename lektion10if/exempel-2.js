let minuter = prompt("Antal minuter per månad? ");
console.log(minuter+' minuter');
let pris = prompt('Ange pris per minut? ');
console.log(pris+' kr');

function rabatt(minuter,pris){
    let total = minuter*pris;
    if(total>=1000){

        return alert('Du får 10% rabatt :D  och totalt så kostar det '+ total*0.9+' kr');
    }
    else{
        return alert('Ingen rabatt :(' );
    }
}
rabatt(minuter,pris);