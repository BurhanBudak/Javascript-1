let summa = 0;
while(true){
let n = prompt('Ange ett valfritt tal!');
if(n === null){
    break;
}
else if(Number.isInteger(Number(n)) === true){
    for (let i = 1; i<=n; i++){
        summa +=i; //Lägg till
    }break;
}
else{alert('Felaktig inmatning!\nSkriv ett heltal');}

}
alert('Summan är '+summa);