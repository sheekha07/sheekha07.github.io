function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
   var ampm = "AM";
   if(h == 0){
         h = 12;
        }
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    document.getElementById("ClockDisplay").innerText = time;

    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();