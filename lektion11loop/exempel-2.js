//Iteration över oser

let operativsystem = ['Windows','MacOS','Linux','Unix','Android','iOS'];

for (let i = 0; i < operativsystem.length; i++) {
    console.log(operativsystem[i]);
    
}

let data = [
    {name: 'Mahmud' , email:'mahmud@email.com'},
    {name: 'Yasmin' , email:'yasmin@email.com'},
    {name: 'Mehdi' , email:'Mehdi@email.com'},
    {name: 'Dania' , email:'dania@email.com'},
    {name: 'Mariam' , email:'Mariam@email.com'},
];

//Skriv ut allt med console.log(data)

for (let i = 0; i < data.length; i++) {
    //console.log(data[i]); Den här satsen skriver ut alla objekt
    console.log(data[i].email);
}

//For-in-sats
console.log('-----For In-------');
for(let i in data){
    console.log(i + ':'+ data[i].name ); 
}
console.log('-----For-of-------');

for(let obj of data){
    console.log(obj.email);
}

data = [
    {
        name: '',email: '',
        adress:{
            street: '',
            zip: '',
        }
    },
    {
        name: '',email: '',
        adress:{
            street: '',
            zip: '',
        }
    },
    {
        name: '',email: '',
        adress:{
            street: '',
            zip: '',
        }
    },
]