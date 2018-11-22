let klo = document.getElementById('active_clock');
function time(){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    klo.innerHTML = h+':'+m;//+':'+s;
}
setInterval(time,1000);