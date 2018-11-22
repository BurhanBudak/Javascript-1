function promptAge(){
let age = prompt("Hur gammal är du?");
let voteable = '';
    console.log(age);
    if(age === null || age === '' || isNaN(age)){
        alert('Felaktig inmatning')
        return;
    }

    //console.log(typeof age); //string
    //console.log(age<18); //'17'<18
    else if(age<18){
        voteable = 'Du får inte rösta';
    }
    else{
        voteable = ' Du får rösta';
    }
    //Omvandla logiken ovanför till ternary istället
    // ? :
    //voteable = (age < 18) ? 'Du får inte rösta!' : 'Du får rösta!';
    //      Villkor  ? Gör detta om sant     : 'Gör detta om falskt'
    alert(voteable);
}
promptAge();