var appealURL = "https://discordapp.com/api/webhooks/746490689491173427/6_UTIWTS8qV9u2XKHiDaqmlTskimXk_f5ZfXKbRcCdg4f7RhK6a0ifnPxKLVdix4ZfoD";
var http = new XMLHttpRequest;
http.open("POST", appealURL);
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

//http.send(content);
var d = document;



function blockAppeal() {
    var name = d.getElementById('wikiName').value;
    var breason = d.getElementById('reason').value;
    var unreason = d.getElementById('unbreason').value;
    var addons = d.getElementById('additionals').value;
    var additionalcontent;
    if (d.getElementById('correct').checked != true) {
        return;
    }
    if (name == "" || breason == "" || unreason == "") {
        return;
    }
    if (addons != "") {
        additionalcontent = `**Additional Content: ${addons}**`;
    } else {
        additionalcontent = "";
    }
    var content = JSON.stringify({"content":`Wikia Username: **${name}**\nWhy were you blocked?: **${breason}**\nWhy should we unblock you?: **${unreason}**\n${additionalcontent}`});
    http.send(content);
    d.body.innerHTML = "";
    var success = d.createElement("div");
    success.id = "successful";
    success.innerHTML = "<p>Submitted.</p>";
    d.body.appendChild(success);
    var successKill = d.createElement("button");
    successKill.id = "successKiller";
    successKill.onclick = function(){window.close();};
    successKill.innerHTML = "OK";
    successKill.title = "Kill the page";
    d.getElementById('successful').appendChild(successKill);
    d.body.classList.add('submitted');
}
