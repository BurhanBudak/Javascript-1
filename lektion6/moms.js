//Ovning 4

let priceFull = prompt("Pris med moms");
let tax = prompt("Moms%");

function momsfri(priceFull,tax){
    let utanmoms = priceFull/((tax/100)+1);
    let krmoms = priceFull - priceFull/((tax/100)+1);
    return [utanmoms,krmoms];
}
//alert(Om varans pris är "+priceFull+" så blir momsfritt "+ ${utanmoms+ " kr och \n moms blir "+ krmoms +" kr!");
alert(`Òm varans pris är ${priceFull} så blir momsen ${momsfri(priceFull,tax)[1]}\n och priset utan moms blir ${momsfri(priceFull,tax)[0]}`);


console.log(utanmoms);
console.log(krmoms);






