let d = new Date()
console.log(d);
let n = d.toLocaleDateString();
console.log(n);
let date = n.slice(2,4) + n.slice(5,7) + n.slice(8,10);
console.log(date);
let t = d.toTimeString().slice(0,8);
console.log(t);

let dag = d.getDay();
let månad = d.getMonth();
let datum = d.getDate();
let år = d.getFullYear();

let veckod = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let månader = ['Januari','Febuari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
console.log(veckod[dag]+' den '+datum+' '+månader[månad]+' '+år);

