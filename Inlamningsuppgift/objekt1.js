

let hiss = {
    //Egenskaper
    plan : 0,    //Aktuell våning
    //Metoder
    goTo : function(floor){
            this.plan = floor;   //Värdet 5 skickas till egenskapen plan
            console.log('Nu åker hissen till plan: '+ this.plan);
    },
    where : function(){

        console.log('Hissen är just nu på plan: ' + this.plan);
    },
}
console.log(hiss.plan); //Vissar våning 0
hiss.goTo(5);     //Anrop till metoden hiss.goTO(); med argumentet 5
console.log(hiss.plan); 
hiss.where();   //Vissar den nya våningen