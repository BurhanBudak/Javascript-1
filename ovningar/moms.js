while (true) {
    let eklm = +prompt('Pris innan moms?');
    let sats = +prompt('Moms?');
    
    if (isNaN(eklm)|| isNaN(sats)) {
        alert('NaN, Prova igen!');
        continue;
    } else if(eklm===0 && sats===0){
        alert('Du glömde ange talen!');
        continue;
    }
    else {
        let totalt = total(eklm,sats);
        alert('Priset inkl moms är '+totalt[0]+' kr och momsen är '+totalt[1]+' kr.');
        break;
    }
}

function total(eklm,sats) {
    let m = (sats/100)+1;
    let pris = eklm*m;
    let moms = pris-eklm;
    return [pris,moms];
}
