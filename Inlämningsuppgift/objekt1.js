

let hiss = {
    //Egenskaper
    plan : 0,
    //Metoder
    goTo : function(floor){
            this.plan = floor;
            console.log('Nu åker hissen till plan: '+ this.plan);
    },
    where : function(){

        console.log('Hissen är just nu på plan: ' + this.plan);
    },
}
console.log(hiss.plan);
hiss.goTo(5);
console.log(hiss.plan);
hiss.where();