//while-satsen

let i = 1;

while (i<=10){
    console.log(i+ ' x 5 = '+ i*5);
    i++;
}
//Gör samma sak
for(let i = 1; i<=10; i++){
    console.log(i+ ' x 5 = '+ i*5);
}

//Break-satsen

while(true){
    let name = prompt('Vad heter du?');
    if(name ===null){ break;
    //Break-sats för att gå ut ur
    }
    if(name===''){
        continue;
    }
    alert('Hej '+ name);
    
}//Hit kommer vi vid break
console.log('hej då!');