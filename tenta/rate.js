


while (true) {
    let money = prompt('Hur mycket pengar vill du sätta in?');
    if(isNaN(money)){ //Kollar om money är NaN
        alert('Ange kronor i tal!');
        continue;
    }
    let years = prompt('Hur många år ska pengarna stå inne?');
    if(isNaN(years)){ //KOllar om years är NaN
        alert('Ange  år i tal!');
        continue;
    }
    if(money === null || years === null){ 
        break; //Om man avbryter eller trycker esc så stängs prompten
    }
    else{afterRate(money,years);
        break; //Om allt är rätt så anropas funktionen}

}







function afterRate(money,years) {
    const rate = 1.035; //Konstant ränta
    let svar = []; //Alla tal lagras i arrayen
    let allt = ""; //Svaret med radbryting lagras här
    for (let i = 1; i <= years; i++) {
        money = (money*rate).toFixed(2); //Pengar per år 
        svar.push(money);
        }
        for (let i = 1; i <= svar.length; i++) {
            allt += i+' '+svar[i-1]+'\n';
        }
        return alert('År    Belopp\n'+allt);
}
}