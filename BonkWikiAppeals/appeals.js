var appealURL = "https://discordapp.com/api/webhooks/659916912368549890/0suRKNcc6tv2c5jdO3iTxhLYw_rIGrxoMPhB1oNPqzKrhgu6smSUHu3ztWSkcEtnrkdd";
var http = new XMLHttpRequest;
http.open("POST", appealURL);
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

//http.send(content);
var d = document;



function blockAppeal() {
    var name = d.getElementById('wikiName').value;
    var breason = d.getElementById('reason').value;
    var unreason = d.getElementById('unbreason').value;
    if (d.getElementById('correct').checked != true) {
        return;
    }
    if (name == "" || breason == "" || unreason == "") {
        return;
    }
    var content = JSON.stringify({"content":`Wikia Username: **${name}**\nWhy were you blocked?: **${breason}**\nWhy should we unblock you?: **${unreason}**`});
    http.send(content);
    d.body.innerHTML = "";
    var success = d.createElement("div");
    success.id = "successful";
    success.innerHTML = "<p>Submitted.</p>";
    d.body.appendChild(success);
    var successKill = d.createElement("button");
    successKill.id = "successKiller";
    successKill.onclick = function(){window.open('','_self').close()};
    successKill.innerHTML = "OK";
    successKill.title = "Kill the page";
    d.getElementById('successful').appendChild(successKill);
    d.body.classList.add('submitted');
}
