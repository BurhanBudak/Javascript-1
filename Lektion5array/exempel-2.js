//Arametiska operatorer i JS

let y = 5;
let x;

x =  y + 2;
x =y -2;
x = x + 2;
x = x -2;
x = y*2;
x = x*2;
x = y/2;
//Modulus-operator
x = y%2;
x = 10%3;
x = 7%5;
x = 5%7;

//Inkrement - ökningsoperator
x=10;
x++; //ökar alltid med ett
x++; //x = x + 1
x+=2; //Lägg till 2
x += 5; // Lägg till 5 

//Minskningsoperator
x = 10;
x--;//9 -MInskar med ett
//Minska med två
x = x-2;//7

//Eller
x -= 2;//5

//
x = "Text";
x = x/2; //NaN
x = 2/x; //NaN
x = x/x; // NaN

let x2;
console.log(x2/2);
console.log(2/x2);

console.log(x);

// KOnkatenering
let firstName = 'Burhan';
let lastName = 'Burhan';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

x = "1" + 2; //3 eller NaN eller....
x = 1+ '2';//12
x = 1 + '2'; //12
x = '1' + 2 +3; //12
x = 1 + 2 +'3';
console.log(x);

