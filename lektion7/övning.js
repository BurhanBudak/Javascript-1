let car = {
    //egenskaper (properties)
    name : 'Fiat',
    model : '500',
    weight : '850kg',
    color : 'white',
    manuall : true,

    //Metoder (methods)
    start:function(){
        console.log("start...");
        //return "the car";
    },
    drive:function(){
        console.log('Drive...');
    },
    brake:function(){
        console.log('Brake...');
    },
    stop:function(){
        console.log('Stop...');
    }
};

console.log(car.name);
console.log(car.start());
car.start();
