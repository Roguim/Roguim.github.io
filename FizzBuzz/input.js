var to = 0;
var e = setInterval(load, 50);
var seconds = 0;
var numbers = { 1:3, 2:5 };
var words = { 1:'Fizz', 2:'Buzz' };

Object.objsize = function(Myobj) {
    objlen = Object.keys(Myobj).length;
	return objlen;
};

function configure() {
	var cd = document.getElementById("items").value;
	for (var c = 1; c <= cd; c++) {
		var inputted1 = prompt("What number would you like something to trigger on?\nCaution: This will break this one if you input something other than a number or have one bit of text inside, excluding numbers.", "3");
		if (inputted1 == null || inputted1 == "") {
			console.log('User cancelled Input 1.');
			return;
		} else {
			var po = parseInt(inputted1, 10);
			if (Number.isInteger(po) == true) {
				console.log(po);
				numbers[c] = po;
			} else {
				console.log(typeof inputted1);
				console.log('User input something other than an integer.');
				return;
			}
		}
		var inputted2 = prompt("What word would you like this to say?", "Fizz");
		if (inputted2 == null || inputted1 == "") {
			console.log('User cancelled Input 2.');
			return;
		} else if (typeof inputted2 === 'string') {
			words[c] = inputted2;
		} else {
			console.log('User input something other than a string.');
			return;
		}
	}
}

function second() {
	seconds = seconds + 1;
}

function load() {
	to = document.getElementById("goto").value;
	console.log(to);
}

function startfizz() {
	document.getElementById("generating").style.display = "block";
	var d = setInterval(second, 100);
	setTimeout(function() {
		fizzbuzz();
	}, 1);
}

function fizzbuzz() {
	document.getElementById("generating").style.display = "none";
	var mobileoutput = "";
	var ed = Object.objsize(numbers);
	var es = Object.objsize(words);
	for (var i = 1; i <= to; i++) {
		var output = "";
		for (var e = 1; e <= ed; e++) {
			if (i % numbers[e] == 0) { output += words[e]; }
		}
		/*if (i % 3 == 0) { output += "Fizz"; }
		if (i % 5 == 0) { output += "Buzz"; }*/
		if (output == "") { output += i; }
		console.log(output);
		mobileoutput += output+"<br>";
		document.getElementById("out").innerHTML = mobileoutput;
		console.log(seconds/10);
	}
}
