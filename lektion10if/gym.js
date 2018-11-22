let gym = prompt("Ange årspris,\n enkel pris och\nantal gånger du besöker gymmet!\nVar vänlig och skriv , mellan talen tack\n ÅRSPRIS,ENKELPRIS,BESÖK!");
let svarArray = gym.split(',');
if(svarArray,length < 3){
    alert("FELAKTIG INMATNING!")
}
console.log(svarArray);
let summa = svarArray[1]*svarArray[2];
if(svarArray[0]<summa){
    alert('Det är billigare att köpa års kort för att du sparar '+ Number(summa-svarArray[0])+ 'kr');
}
else{
    alert('Du hehöver inte köpa års kort, du kan spara '+ Number(svarArray[0]-summa)+' kr med enkel biljett');
}