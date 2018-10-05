var myVar = setInterval(myTimer, 1000);
var secs = 0;
var totsecs = 0;
function myTimer() {
    secs = secs + 1;
	totsecs = totsecs + 1;
	setCookie(totalseconds, totsecs);
    document.getElementById("seconds").innerHTML = secs;
}
function setCookie(cname, cvalue) {
	document.cookie = cname + "=" + cvalue + ";";
}
function readCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
