
let d = function(){
    let str = prompt('Ange fyra positioner med , mellan: ')
    let res = str.split(',');
    console.log(res);
    // let x1 = prompt('Punkt x1');
    // let x2 = prompt('Punkt x2');
    // let y1 = prompt('Punkt y1');
    // let y2 = prompt('Punkt y2');
    //return Math.sqrt((Math.pow((x2-x1),2))+ (Math.pow((y2-y1),2)))
    return Math.sqrt((Math.pow((res[2]-res[0]),2))+ (Math.pow((res[3]-res[1]),2)))
}
alert(d().toFixed(2));