let rektangel = (function(){
    let b = prompt('Hur lång är bredden?');
    let h = prompt('Hur lång är längden?');
    let a = b*h;
    let omk = (b*2)+(h*2);
    return [a,omk];
}());
console.log(rektangel);
alert('Rektangelns area: '+ rektangel[0]+"\nRektangelns omkrets: "+rektangel[1]);
