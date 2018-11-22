let x = document.getElementsByTagName('button')[0]; 
let p = document.getElementById('demo');
x.addEventListener('click',random);  //Anrop till functionen



function random() {
    let characters = '';
    let antal = (Math.floor(Math.random()*3)+10);
    console.log(antal);
    for (let i = 0; i <= antal; i++){
        let char = Math.floor(Math.random()*126)+33; //Random decimal tal av ett UTF-8 tecken
        characters += String.fromCharCode(char); //String metod med index char. Allt läggs in i characters tills loopen är över.
        }
        
    return p.textContent = characters;
}