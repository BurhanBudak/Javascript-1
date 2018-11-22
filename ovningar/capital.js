let helloMsg = 'hej och välkommen.';

function capitalize(helloMsg) {
    return helloMsg.charAt(0).toUpperCase() + helloMsg.slice(1);
}
console.log(capitalize(helloMsg));