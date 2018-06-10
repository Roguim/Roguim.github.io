var litres = 0;
var value = 2;
var litreadd = 0.5;
var bottleadd = 1;
var bottlesize = 236;
var bottles = 0;
var tosell = 0;
var cash = 0;
function water() {
	litres = litres + litreadd;
	document.getElementById("litrelabel").innerHTML = litres;
}
function plastic() {
	bottles = bottles + bottleadd;
	document.getElementById("bottlelabel").innerHTML = bottles;
}
function bottle() {
	if ((litres * 1000) > bottlesize) {
		if (bottles > 0) {
			litres = litres - (bottlesize / 1000);
			bottles = bottles - 1;
			tosell = tosell + 1;
			document.getElementById("bottlelabel").innerHTML = bottles;
			document.getElementById("litrelabel").innerHTML = litres;
			document.getElementById("selllabel").innerHTML = tosell;
		}
	}
}
function sell() {
	if (tosell > 1) {
		cash = cash + value;
		tosell = tosell - 1;
	}
}