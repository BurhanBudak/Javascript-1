// function transform() {
//     let min = +prompt('Ange minuter!',minuter);
//     if(min<60){
//         alert('Ange 60 eller mer');
//     }
//     else{
//     let timmar = Math.floor(min/60);
//     let minuter = min%60;
//     return alert(min+' är '+ timmar+' h och '+minuter+' minuter');
//     }
// }
// transform();


while (true) {
    let min = +prompt('Ange minuter!','minuter');
    if(min<60){
        alert('Ange 60 eller mer!');
        continue;
    }
        let timmar = Math.floor(min/60);
        let minuter = min%60;
        alert(min+' är '+ timmar+' h och '+minuter+' minuter');
        break;
}
