
let tal1 = prompt("Ange tal 1");
let tal2 = prompt("Ange tal 2");
matte();
function matte(tal1,tal2){
    let product = tal1*tal2;
    let kvot = tal1/tal2;
    return svar = [product,kvot];
};
alert("Produkten är "+ matte(tal1,tal2)[0]);
alert('Kvoten är '+ matte(tal1,tal2)[1]);
