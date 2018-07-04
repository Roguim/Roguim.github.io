var litres = 0;
var value = 1;
var litreadd = 0.5;
var bottleadd = 1;
var bottlesize = 236;
var bottles = 0;
var tosell = 0;
var cash = 0;
var watercap = 100;

var autoupdate = setInterval(checkstats, 15000);

/* STRUCTURE STUFF */
var pcost = 100;
var lcost = 100;
var bcost = 100;
var scost = 100;

var plaps = 0;
var litps = 0;
var botps = 0;
var selps = 0;
var pps = 0;
var lps = 0;
var bps = 0;
var sps = 0;

var tick = setInterval(doStuff, 1000);


/* UPGRADE STUFF */
var pbucost = 100;
var sbucost = 200;
var sizemaxed = 0;


/* STATS */
var totwater = 0;
var totbottles = 0;
var totfilled = 0;
var totsold = 0;
var totmoney = 0;
var totupgrades = 0;
var totspent = 0;

function save() {
	
}

function checkstats() {
	document.getElementById("stat-water").innerHTML = totwater;
	document.getElementById("stat-bottles").innerHTML = totbottles;
	document.getElementById("stat-filled").innerHTML = totfilled;
	document.getElementById("stat-sold").innerHTML = totsold;
	document.getElementById("stat-money").innerHTML = totmoney;
	document.getElementById("stat-spent").innerHTML = totspent;
	document.getElementById("stat-upgrades").innerHTML = totupgrades;
}

function water() {
	if (litres != watercap || litres > watercap) {
		crit = Math.floor((Math.random() * 100) + 1);
		if (crit == 63) {
			litres = litres + (litreadd * 3);
			totwater = totwater + (litreadd * 3);
			document.getElementById("litrelabel").innerHTML = litres;
		}
		else {
			litres = litres + litreadd;
			totwater = totwater + litreadd;
			document.getElementById("litrelabel").innerHTML = litres;
		}
	}
}
function plastic() {
	crit = Math.floor((Math.random() * 100) + 1);
	if (crit == 63) {
		bottles = bottles + (bottleadd * 3);
		totbottles = totbottles + (bottleadd * 3);
		document.getElementById("bottlelabel").innerHTML = bottles;
	}
	else {
		bottles = bottles + bottleadd;
		totbottles = totbottles + bottleadd;
		document.getElementById("bottlelabel").innerHTML = bottles;
	}
}
function bottle() {
	if ((litres * 1000) > bottlesize) {
		if (bottles > 0) {
			litres = litres - (bottlesize / 1000);
			bottles = bottles - 1;
			tosell = tosell + 1;
			totfilled = totfilled + 1;
			document.getElementById("bottlelabel").innerHTML = bottles;
			document.getElementById("litrelabel").innerHTML = litres;
			document.getElementById("selllabel").innerHTML = tosell;
		}
	}
}
function sell() {
	if (tosell > 0) {
		cash = cash + value;
		tosell = tosell - 1;
		totsold = totsold + 1;
		totmoney = totmoney + value;
		document.getElementById("money").innerHTML = cash;
        document.getElementById("selllabel").innerHTML = tosell;
	}
}
function pbup() {
	if (cash > pbucost) {
		cash = cash - pbucost;
		totspent = totspent + pbucost;
		bottleadd = ( bottleadd * 2 ) + 1;
		pbucost = ( pbucost * 2 ) + 150;
		totupgrades = totupgrades + 1;
		document.getElementById("money").innerHTML = cash;
		document.getElementById("pbupcost").innerHTML = pbucost;
	}
}
function sbup() {
	if (cash > sbucost - 1) {
		if (sizemaxed != 1) {
			if (bottlesize = 236) { /*Upgrade cost 200*/
				cash = cash - sbucost;
				bottlesize = 355;
				totspent = totspent + sbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 10;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 355) { /*Upgrade cost 800*/
				cash = cash - sbucost;
				bottlesize = 500;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 40;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 500) { /*Upgrade cost 2,600*/
				cash = cash - sbucost;
				bottlesize = 590;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 80;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 590) { /*Upgrade cost 8,000*/
				cash = cash - sbucost;
				bottlesize = 710;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 200;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 710) { /*Upgrade cost 72,800*/
				cash = cash - sbucost;
				bottlesize = 1000;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 300;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 1000) { /*Upgrade cost 218,600*/
				cash = cash - sbucost;
				bottlesize = 1250;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 500;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 1250) { /*Upgrade cost 1,968,200*/
				cash = cash - sbucost;
				bottlesize = 1500;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 600;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 1500) { /*Upgrade cost 5,904,800*/
				cash = cash - sbucost;
				bottlesize = 1750;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 700;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 1750) { /*Upgrade cost 17,714,600*/
				cash = cash - sbucost;
				bottlesize = 2000;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 800;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 2000) { /*Upgrade cost 53,144,000*/
				cash = cash - sbucost;
				bottlesize = 2200;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 950;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 2200) { /*Upgrade cost 159,432,200*/
				cash = cash - sbucost;
				bottlesize = 2500;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 1100;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 2500) { /*Upgrade cost 478,296,800*/
				cash = cash - sbucost;
				bottlesize = 5000;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 1400;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 5000) { /*Upgrade cost 1,434,890,600*/
				cash = cash - sbucost;
				bottlesize = 7500;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = (sbucost * 3) + 200;
				value = 18000;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = sbucost;
			} else if (bottlesize = 7500) { /*Upgrade cost 4,304,672,000*/
				cash = cash - sbucost;
				bottlesize = 10000;
				totspent = totspent + pbucost;
				totupgrades = totupgrades + 1;
				sbucost = 0;
				sizemaxed = 1;
				value = 250000;
				document.getElementById("worth").innerHTML = value;
				document.getElementById("money").innerHTML = cash;
				document.getElementById("bttl-size").innerHTML = bottlesize;
				document.getElementById("bttl-size-label").innerHTML = "L";
				document.getElementById("bttl-size2").innerHTML = bottlesize;
				document.getElementById("bttl-size-label2").innerHTML = "L";
				document.getElementById("sbupcost").innerHTML = "Maximum Reached";
			}
		}
	}
}
function mill() {
	if (cash > lcost - 1) {
		totspent = totspent + lcost;
		cash = cash - lcost;
		lcost = lcost * 1.27;
		litps = litps + 1;
		document.getElementById("lscost").innerHTML = lcost;
		document.getElementById("money").innerHTML = cash;
	}
}
function fact() {
	if (cash > pcost - 1) {
		totspent = totspent + pcost;
		cash = cash - pcost;
		pcost = pcost * 1.27;
		plaps = plaps + 1;
		document.getElementById("pscost").innerHTML = pcost;
		document.getElementById("money").innerHTML = cash;
	}
}
function btlr() {
	if (cash > bcost - 1) {
		totspent = totspent + bcost;
		cash = cash - bcost;
		bcost = bcost * 1.27;
		botps = botps + 1;
		document.getElementById("bscost").innerHTML = bcost;
		document.getElementById("money").innerHTML = cash;
	}
}
function mrch() {
	if (cash > scost - 1) {
		totspent = totspent + scost;
		cash = cash - scost;
		scost = scost * 1.36;
		selps = selps + 1;
		document.getElementById("sscost").innerHTML = scost;
		document.getElementById("money").innerHTML = cash;
	}
}
function doStuff() {
	pps = 0;
	lps = 0;
	bps = 0;
	sps = 0;
	if (plaps != 0) {
		while (pps != plaps) {
			plastic();
			pps = pps + 1;
		}
	}
	if (litps != 0) {
		while (lps != litps) {
			water();
			lps = lps + 1;
		}
	}
	if (botps != 0) {
		while (bps != botps) {
			bottle();
			bps = bps + 1;
		}
	}
	if (selps != 0) {
		while (sps != selps) {
			sell();
			sps = sps + 1;
		}
	}
}
/*function sh-click() {
	document.getElementById("click").classList.add("show");
	document.getElementById("ups").classList.remove("show");
}
function sh-ups() {
	document.getElementById("click").classList.remove("show");
	document.getElementById("ups").classList.add("show");
}*/