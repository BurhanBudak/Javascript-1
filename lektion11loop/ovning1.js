let dag = 1;
let lon =1
for (lon = 1; lon <= 10000000; lon*=2) {
    console.log(dag +' '+lon);
    dag++;
}
console.log('Du måste jobba '+dag+' dagar för att tjäna '+lon+'!');