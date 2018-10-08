//Funktioner med return

function fullName_v1 (firstName,lastName){
    let name;
    name = firstName + ' ' + lastName;
    return name;
}
function fullName_v2 (firstName,lastName){
    
    return firstName + ' ' + lastName;
    
}

let name1 = fullName_v1("Burhan","Budak");
console.log("HEJ "+ name1);
// eller skriv ut direkt
console.log('Hej ' + fullName_v2("Budak","Burhan"));