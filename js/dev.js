var money = 120;
var rights = 0;
var speedrights = 1;
var games = 0;
var speedgames = 0.03;
var sps = 0;

var second = setInterval(secondly, 1000);
var pointofsec = setInterval(pointfive, 50);

function pointfive() {
	document.getElementById("cash").innerHTML = money;
	condense()
}
function secondly() {
	money = money + sps * 3;
}

function condense() {
	var condensedcash = money;
	var measurement = "";
	var timescondensed = 0;
	var measurementlist = { 1:'K', 2:'M', 3:'B', 4:'T', 5:'Qu', 6:'Qi', 7:'Sx', 8:'Sp', 9:'Oc', 10:'No', 11:'Dc', 12:'UDc', 13:'DDc', 14:'TDc', 15:'QuDc', 16:'QiDc', 17:'SxDc', 18:'SpDc', 19:'OcDc', 20:'NoDc', 21:'Vi' }
	while (condensedcash > 999) {
		condensedcash = condensedcash / 1000;
		timescondensed = timescondensed + 1;
		measurement = measurementlist[timescondensed];
		if (timescondensed >= 22) {
			var postvi = timescondensed - 21;
			measurement = "Vi+"+postvi;
		}
	}
	document.getElementById("cash").innerHTML = condensedcash+" "+measurement;
}

function grights() {
	if (rights < 1) {
		rights = rights + speedrights / 10;
		money = money - 3;
		console.log(rights);
		if (rights == 0.9999999999999999) {
			rights = 1;
		}
		if (rights == 0.7999999999999999) {
			rights = 0.8;
		}
		if (rights == 0.30000000000000004) {
			rights = 0.3;
		}
		document.getElementById("rperecent").innerHTML = rights * 100;
	} else {
		document.getElementById("programming").style.display = "block";
	}
}

function prgrm() {
	money = money - 1;
	games = games + speedgames;
	document.getElementById("ppercent").innerHTML = games * 100;
	var displaygames = Math.floor(games);
	document.getElementById("gamecount").innerHTML = displaygames;
	if (games > .9900000000000007) {
		document.getElementById("gcountunlock").style.display = "block";
		document.getElementById("sellingzone").style.display = "block";
	}
}

function sell() {
	sps = sps + 1;
}