function summa() {
    let tal1 = +prompt('Ange 1');
    let tal2 = +prompt('Ange 2');
    let tal3 = +prompt('Ange 3');
    let summaAv2 = tal1+tal2;
    let summaAv3 = tal1+tal2+tal3;
    let medelv2 = summaAv2/2;
    let medelv3 = summaAv3/3;
    console.log('Summan är '+summaAv2+' och '+summaAv3
    +', medelvärdet är '+medelv2+' och '+medelv3);
}
summa();