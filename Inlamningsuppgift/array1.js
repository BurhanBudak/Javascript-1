let fordon = ["cykel", "bil", "flygplan", "tåg"];
document.getElementById("demo").innerHTML = fordon;
function minarray(){
let delAvFordon = fordon.slice(1,4);
document.getElementById("demo").innerHTML = delAvFordon;
console.log(fordon.slice(1,4));
}

//let abcarray = Array.from("ABC");
//function minarray(){
 //document.getElementById("demo").innerHTML = fordon.fill("B\u00e6t",1,4

 let text = "Tjena";
 let svar = text.valueOf();