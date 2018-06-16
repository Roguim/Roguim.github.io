var myVar = setInterval(myTimer, 1000);
var secs = 0;
function myTimer() {
    secs = secs + 1;
    document.getElementById("seconds").innerHTML = secs;
}
