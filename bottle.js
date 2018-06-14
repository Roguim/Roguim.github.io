var litres = 0;
var value = 1;
var litreadd = 0.5;
var bottleadd = 1;
var bottlesize = 236;
var bottles = 0;
var tosell = 0;
var cash = 0;
var watercap = 100;
var sizemaxed = 0;

/* UPGRADE PRICES */
var pbucost = 100;
var sbucost = 200;

/* STATS */
var totwater = 0;
var totbottles = 0;
var totfilled = 0;
var totsold = 0;
var totmoney = 0;
var totupgrades = 0;
var totspent = 0;


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
		litres = litres + litreadd;
		totwater = totwater + litreadd;
		document.getElementById("litrelabel").innerHTML = litres;
	}
}
function plastic() {
	bottles = bottles + bottleadd;
	totbottles = totbottles + bottleadd;
	document.getElementById("bottlelabel").innerHTML = bottles;
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
				document.getElementById("sbupcost").innerHTML = "Maximum Reached";
			}
		}
	}
}