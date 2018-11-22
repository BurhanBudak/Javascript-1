let antal = +prompt('Hur många kaffekoppar dricker du per månad?');

function kaffe(antal) {
    let total = antal * 12;
    if(total>=1000){
        alert('Du har rätt till 10% rabatt.');
    }
    else{
        let kvar = (1000-total)/12;
        alert('Du måste köpa '+Math.floor(kvar)+' styken koppar kaffe för rabatt');
    }
    
}
kaffe(antal);


