let namn = prompt('Hej vad heter du?');
function hej(namn) {
    let el = document.getElementById('demo');
    return el.innerHTML = "Hej "+namn;
}
hej(namn);

