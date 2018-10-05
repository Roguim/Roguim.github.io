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
