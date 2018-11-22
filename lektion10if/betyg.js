let poäng = +prompt('Hur många poäng fick eleven?');
function betygen(poäng){
    let betyg = ['A','B','C','D','E','F'];
    if(poäng>=45){
        alert('Eleven fick '+betyg[0]);
    }
    else if(poäng>=40){
        alert('Eleven fick '+betyg[1]);
    }
    else if(poäng>=35){
        alert('Eleven fick '+betyg[2]);
    }
    else if(poäng>=30){
        alert('Eleven fick '+betyg[3]);
    }
    else if(poäng>=25){
        alert('Eleven fick '+betyg[4]);
    }
    else{
        alert('Eleven fick '+betyg[5]);
    }

}
betygen(poäng);


//Lösning med en switch.
/*
switch(true){
    case (poang>=45): betyg = 'A'   break;
    case (poang>=40): betyg = 'B'   break;
    case (poang>=35): betyg = 'C'   break;
    case (poang>=30): betyg = 'D'   break;
    case (poang>=25): betyg = 'E'   break;
    case (poang< 25): betyg = 'F'   break;
}

*/