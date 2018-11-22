let a = 1;
let b = 2;

function swap(a,b) {
    let minArr = [];
    minArr.push(a,b);
    return [a,b] = [b,a];
}
console.log(a,b);
console.log(swap(a,b));