
while (true) {
    let min = +prompt('Hur många minuter pratar du?');
    let pris = +prompt('Hur mycket kostar det per minut?');
    let totalt = total(min,pris);
    if (isNaN(totalt)) {
        alert('Prova igen med tal!');
        continue;
    } else if(totalt===0){
        alert('Du glömde ange tal!');
        continue;
    }
    else{
        alert('Det kostar totalt '+totalt+' kr per månad');
        break;
    }
}

function total(min,pris) {
    return min*pris
}
