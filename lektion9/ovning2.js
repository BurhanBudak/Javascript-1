function maxArray(arr){
    return Math.max(...arr); //Tips:...är en operator
}
console.log(maxArray([1,6,3,4])); //6

function aktuellt(){
    let datumsv = new Date();
    let a = datumsv.getFullYear();
    let b =datumsv.getMonth()+1;
    let c = datumsv.getDate();
    return [a,b,c];
}
aktuellt();
console.log('Aktuell daturm är: '+aktuellt()[0]+'-'+aktuellt()[1]+'-'+aktuellt()[2]);

let datum = new Date();
console.log('Klockan är: '+datum.toTimeString().substring(0,8));

let day = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let month = ['Januari','Febuari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December']
console.log(day[datum.getDay()]+' den '+datum.getDate()+' '+month[datum.getMonth()]+' '+datum.getFullYear());