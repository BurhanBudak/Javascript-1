
let d = function(){
    let str = prompt('Ange fyra positioner med , mellan: ');
    let res = str.split(',');
    
    
    
    return Math.sqrt((Math.pow((res[2]-res[0]),2))+ (Math.pow((res[3]-res[1]),2)))
}
alert(d().toFixed(2));