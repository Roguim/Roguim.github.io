const alphabet = "⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒬⒲⒠⒭⒯⒴⒰⒤⒪⒫⒜⒮⒟⒡⒢⒣⒥⒦⒧⒵⒳⒞⒱⒝⒩⒨０１２⇚✘  ";
const alphabetkey = ['1','2','3','4','5','6','7','8','9','10','50','100','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','.','!','?', 'back', 'clear', 'SPACE', ' '];

const breaks = [12, 22, 31, 42];
const numbers = [9,10,11, 41,42,43];
const numberchar = {9:',',10:':',11:';',41:'⇚',42:'✘',43:' '};

var inputbox = document.getElementById('in');
for (i = 0; i < alphabet.length; i++) {
    if (breaks.indexOf(i) >= 0) {
        var brk = document.createElement('br');
        document.getElementById('keyboard').appendChild(brk);
    }
    
    var betton = document.createElement('button');
    betton.id = `button${alphabetkey[i]}`;
    betton.onclick = function() {
        var self = this;
        self.classList.add('clicked');
        setTimeout(function() {
            self.classList.remove('clicked');
        }, 300)
        if (self.value == 'back') {
            inputbox.value = document.getElementById('in').value.slice(0,-1);
        } else if (self.value == 'clear') {
            inputbox.value = "";
        } else if (self.value == 'SPACE') {
            inputbox.value += " ";
        } else {
            inputbox.value += self.value;
        }
        
    };
    if (i == 44) {
        betton.classList = "invisible";
    }
    betton.value = alphabetkey[i];
    betton.innerHTML = alphabetkey[i];
    betton.setAttribute('data-character', alphabetkey[i]);
    /*if (self.value == 'SPACE') {
        betton.removeAttribute('data-character');
        betton.setAttribute('data-character', ' ');
    }*/
    if (numbers.indexOf(i) >= 0) {
        betton.innerHTML = numberchar[i];
    }
    document.getElementById('keyboard').appendChild(betton);
}


function convo() {
    document.getElementById('out').value = "";
    document.getElementById('outVisual').value = "";
    document.getElementById('outVisual').classList.toggle('invisible', false);
    for (i = 0; i < document.getElementById('in').value.length; i++) {
        if (inputbox.value[i] === "0") { /* 1 Layer deep (10/50) */
            var zerocount = 1;
            if (inputbox.value[i+1] == "0") { /* 2 Layers deep (100) */
                zerocount = 2;
            }
            if (inputbox.value[i-1] == "1" || inputbox.value[i-1] == "5") {
                var num = inputbox.value[i-1];
                if (num == "5" || num == "1") { /* Case 10/50 */
                    document.getElementById('out').value = document.getElementById('out').value.slice(0,-1);
                }
                if (num == 5) { /* Case 50 */
                    document.getElementById('out').value += alphabet[10];
                    document.getElementById('outVisual').value += alphabetkey[char];
                } else if (num == 1) {
                    if (zerocount == 1) { /* Case 10 */
                        document.getElementById('out').value += alphabet[9];
                        document.getElementById('outVisual').value += alphabetkey[char];
                    } else { /* Case 100 */
                        document.getElementById('out').value += alphabet[11];
                        document.getElementById('outVisual').value += alphabetkey[char];
                    }
                    
                }
                
            }
        } else{ /* OUTPUT AS IS */
            var char = alphabetkey.indexOf(inputbox.value[i].toLowerCase());
            document.getElementById('out').value += alphabet[char];
            document.getElementById('outVisual').value += alphabetkey[char];
        }
    }
}

function copythat() {
    var copying = document.getElementById('out');
    copying.select();
    copying.setSelectionRange(0,999999);
    document.execCommand("copy");
    document.execCommand("copy");
    document.execCommand("copy");
    var copied = document.createElement('div');
    copied.classList = "hasBeenCopied"
    copied.innerHTML = "<span id='hasCopy'>&nbsp;</span><p>We've copied the output for you!</p><span id='xButton' onclick='deleteCopy()'>X</span>";
    document.getElementById('ticker').appendChild(copied);
    setTimeout(function() {
        document.getElementsByClassName('hasBeenCopied')[0].remove();
    }, 5000)
}
function deleteCopy() {
    document.getElementsByClassName("hasBeenCopied")[0].remove();
}