let celsius = (function(){
    let fahrenheit = prompt('Hur många grader fahrenheit är det?');
    return document.getElementById("demo").innerHTML = fahrenheit+' ° fahrenheit blir '+ ((5/9)*(fahrenheit-32)).toFixed()+'° Celsius';
}());
console.log(celsius);