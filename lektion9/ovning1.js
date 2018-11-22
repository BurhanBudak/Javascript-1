let str = 'hej och välkommen';
function capitalize(str){
    //Den första bokstaven
    let firstChar = str.charAt(0); //fel...indexOf(0)
    //Omvandla första teckenet till versal
    firstChar = firstChar.toUpperCase();
    //Hämta resten. Från tecken 2 (index 1) till slutet
    let resten = str.slice(1);//eller substring(1)
    //Skapa en ny sträng
    return result = firstChar + resten;
}
console.log(capitalize(str));

function capitalize_v2(str){
    return str.charAt(0)
}