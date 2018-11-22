let tal = [1,45,-1,100,23,2345678];

function maxArray(...tal) {
    return ('Max is '+Math.max(...tal)+'.Min is '+Math.min(...tal));
}
console.log(maxArray(...tal));