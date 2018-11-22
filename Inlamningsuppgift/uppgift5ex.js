let dice = [0,0,0,0,0,0];
document.body.innerHTML+= "Resultat:<br>";
for (let n = 0; n < 1000; n++)
    {
        let kast = Math.floor(Math.random() * dice.length) + 1; //1-6 tärning
        dice[kast - 1]++;
    }
for(rad=0;rad<6;rad++) //Rad X: procenttal
{
    document.body.innerHTML += "Rad "+(rad+1)+": " + //rad uträckning, för att array[0] ska synas vid rad 1 så plusar man 0+1
        ""+dice[rad]+'<br>';   //100+"%<br>";
}