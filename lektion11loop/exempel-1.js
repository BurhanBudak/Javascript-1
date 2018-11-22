/*Loopar,dowhile*/
//Arbeta med iterationer

//For-satsen
//Exempel 1
//for(let i = 1; i<=10;i++){  //i++ eller i=i+1. let istället var och det rekommenderas att man använder deklaration
  //console.log(i);}
//Exempel 2
//for(let i = 1; i<=10;i++){  //alla tal som är delbara med 3
    //if(i%3===0)  console.log(i + ' är delbart med 3');}
 //exempel 3 Skriver ut följande tal mellan 1 och 10
 //let str = '';
 //for(let i = 1; i<=10; i=i+2){ 
    //str += i ;
    //if(i<10 )str += i + ' , '; //Vissa inte sista koma.

 //exempel 4
 for(let i = 1; i<=100; i++){
     //Skriv ut enbart tal som är jämnt delbart med 3
     if(i%5 === 0){ //ingen rest vid division med 3
        console.log(i);
     }
 }