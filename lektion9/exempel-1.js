//Arbeta med inbyggda globala JS-Objekt

//Objekt String

let firstName = 'Mahmud';
console.log(typeof firstName); //typen av string

let antal = firstName.length;

console.log(antal); //6

//Konvertera till gemener
firstName.toLowerCase(); //Lagrar inte resultatet
console.log(firstName); //innmutable för att = inte finns
//Vi måste lagra resultatet
firstName = firstName.toLowerCase();
console.log(firstName);

firstName = firstName.toUpperCase();
console.log(firstName);

//Konkatenering
let lastName = 'Al Hakim';
let fullName = firstName.concat(' ',lastName);
//let fullName = firstName + ' '+lastName;
console.log(fullName);

//Substring
console.log(fullName.substring(0,6));
console.log(fullName.substring(7));
//Leta fter första mellanslaget
let space = fullName.indexOf('');
console.log(space);
console.log(fullName.substring(space+1));

//substr()
//Orginal string 'Mahmud Al Hakim'
console.log(fullName.substr(7,2)); //Al start,antal tecken

//Stränger i JS indexeras som samma sätt som arrayer
console.log(fullName[0]); //M
//Skriv ut sista tecknet
console.log(fullName[fullName.length-1]);

//Skriv ut sista elementet i arrayen
let arrTest = [1,2,3];
console.log(arrTest.length);
console.log(arrTest[arrTest.length-1]);

//Skriv ut index på första mellanslaget
console.log(fullName.lastIndexOf(''));

let newName = 'Kalle Anka';
console.log(newName.indexOf(' ')); //5
console.log(newName.lastIndexOf(' ')); //10

console.log(fullName);
console.log(fullName.charAt(1));

//Split() skapar en array av en string
let nameArray = fullName.split();
console.log(nameArray); // ['Mahmud Al Hakim']?????
nameArray = fullName.split(''); //OBS en tom sträng
console.log(nameArray);  //[ 'M', 'A', 'H', 'M', 'U', 'D', ' ', 'A', 'l', ' ', 'H', 'a', 'k', 'i', 'm' ]
nameArray = fullName.split(' ');
console.log(nameArray);
fullName = "Mahmud;Al;Hakim";
nameArray = fullName.split(';'); // [ 'MAHMUD', 'Al', 'Hakim' ]
fullName = "Mahmud|Al|Hakim";
nameArray = fullName.split('|'); // [ 'MAHMUD', 'Al', 'Hakim' ]
fullName = "   Mahmud   Al  Hakim";
fullName = fullName.trim();
nameArray = fullName.split(' ');
//Chaining. En sats istället för två föregående satser
nameArray = fullName.trim().split(' ');
console.log(nameArray);

//Rensa alla mellanslag men behåll ett
nameArray = fullName.replace(/ +/g , ' ').trim();//RegExp överkurs
console.log(nameArray);

fullName = "Mahmud;Al;Hakim";
//byt ut ; mot mellanslag
fullName = fullName.replace(';',' ');
console.log(fullName); // Mahmud Al;Hakim men bara enbart första ; byts ut

//byt ut alla ; mot mallanslag
fullName = fullName.replace(/;+/g,' '); //Regex (överkurs men bra att veta)
console.log(fullName);

//escape-tecken
// \n new line
// \"för att visa" i en sträng
// \'för att visa' i en sträng
console.log('Hej\nVälkommen till JS.\n\nIdag har vi jobbat med string\n\n');
console.log('Hej och välkommen til \'JS\'');
console.log('Name\tEpost');
console.log('Mahmud\tmahmud@alhakim.se');
console.log('Vissa backlash med dubbla\\');

