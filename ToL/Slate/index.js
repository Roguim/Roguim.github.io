var spacer = "|"
var keys = {'b':'BD','c':'Cult','n':'Neutral','u':'Unseen','sp':'Special','so':'Social','su':'Support','of':'Offensive','ki':'Killer','in':'Investigative', 'wi':'Wildcard', 'de':'Defensive'};

var allowedElems = ['img', 'p', 'in', 'drop'];
var blacklisted = ['bgmain', 'ChangeThemes', 'border', 'factiontype','ability','unique','death','convert','occupy','win','disclaimer'];
var multi = {'faction':['BD', 'Unseen', 'Cult', 'Neutral'], 'types':['Investigative','Killer','Offensive','Special','Support','Social', 'Defensive', 'Wildcard'],'borderSm':['BD','Unseen','Cult','Neutral'], 'dropIn':['ability1','ability2','ability3','ability4','ability5','ability6']};
var factioncolours = {'BD':'#4582b4', 'Cult':'#8b0000', 'Unseen':'#800080', 'Neutral':'#5f5f5f'}
var colours = ['descfaction','descfaction2', 'descfaction3', 'descfaction4'];
var names = ['descfaction', 'descfaction3'];
var factions = ['descfaction2','descfaction4'];
var types = ['desctype'];
var openurl = ['classimage', 'classimageSm','abilImg1','abilImg1','abilImg2','abilImg3','abilImg4','abilImg5','abilImg6'];
var aan = ['ana1'];
var vowels = ['a','e','i','o','u'];
var swaps = {'<':'&lt;','>':'&gt;','"':'&#34',"'":'&#39'};
var finalSanitizers = {'<':'&lt;','>':'&gt;','"':'&#34',"'":'&#39',' ':'%20'};
var openingSanitize = {'<':'&lt;','>':'&gt;','"':'&#34',"'":'&#39','%20':' ', '%27': "'"};
var optiontoggles = {'convertable':['smallportrait','convert'],'occupyimmune':'occupy','deathimmune':'death','uniquechk':'unique','additionaldesc':'moreDesc','passive1':'ability1','passive2':'ability2','day1':'ability3','day2':'ability4','night1':'ability5','night2':'ability6'};
for (i = 0; i < allowedElems.length; i++) {
    var elementtype = document.getElementsByTagName(allowedElems[i]);
    for (n = 0; n < elementtype.length; n++) {
        if (blacklisted.indexOf(elementtype[n].id) < 0) {
            var elem = elementtype[n];
            elementtype[n].addEventListener('click', cng);
        }
    }
}

var importkey = document.URL.indexOf('?class=');
if (importkey >= 0) imp(document.URL.slice(importkey+7));

document.getElementById('backer').addEventListener('click', rem);
document.getElementById('close').addEventListener('click', rem);
for (i = 0; i < Object.keys(optiontoggles).length; i++) {
    document.getElementById(Object.keys(optiontoggles)[i]).addEventListener('click', opt);
}
function cng(el) {
    document.getElementById('edit').classList.add('shown');
    document.getElementById('backer').classList.add('shown');
    console.log(el)
    var clicked = el.target;
    if (clicked.tagName == "P" || clicked.tagName == "IN") {
        var input;
        if (clicked.classList.contains('number')) {
            input = document.createElement('input');
            if (clicked.classList.contains('infAllowed')) {
                input.type = "text";
                input.classList.add('number');
                var info = document.createElement('p');
                info.innerHTML = "Enter a number or for infinite, enter `e`";
            } else {
                input.type = "number";
            }
        } else {
            input = document.createElement('textarea');
            input.type = "text";
        }
        input.id = `${clicked.id}In`;
        input.value = clicked.textContent;
        console.log(input);
        document.getElementById('edit').append(input);
        if (info) document.getElementById('edit').append(info);
    } else if (clicked.tagName == "IMG" || clicked.tagName == "DROP") {
        if (clicked.id in multi) {
            var input = document.createElement('select');
            input.id = `${clicked.id}In`;
            document.getElementById('edit').append(input);
            var v = multi[clicked.id]
            if (clicked.id == "dropIn") {
                for (i = 0; i < v.length; i++) {
                    var option = document.createElement('option');
                    option.value=v[i];
                    option.innerHTML=document.getElementById(v[i]).children[1].innerHTML;
                    document.getElementById(`${clicked.id}In`).append(option);
                }
            } else {
                for (i = 0; i < v.length; i++) {
                    var option = document.createElement('option');
                    option.value=v[i];
                    option.innerHTML=v[i];
                    document.getElementById(`${clicked.id}In`).append(option);
                }
            }
            if (clicked.id == "borderSm") {
                var input = document.createElement('input');
                input.id = `${clicked.id}In`;
                input.type = "text";
                input.value = document.getElementById('classimageSm').currentSrc;
                document.getElementById(`edit`).append(input);
            }
        } else {
            var input = document.createElement('input');
            input.id = `${clicked.id}In`;
            input.type = "text";
            input.value = clicked.currentSrc;
            document.getElementById(`edit`).append(input);
        }
        
    }

    
}

function rem() {
    if (document.getElementById('errorBox')) {
        document.getElementById('errorBox').parentElement.removeChild(document.getElementById('errorBox'));
        document.getElementById('backer').classList.remove('shown');
        return "";
    }
    var input = document.getElementById('edit').children[1];
    var id = input.id.slice(0,-2);
    var elem = document.getElementById(id);
    for (i = 0; i < swaps.length; i++) {
        var regex = new RegExp(Object.keys(swaps)[i], "g");
        input.value = input.value.replace(regex, Object.value(swaps)[i]);
    }
    if (elem.tagName == "P" || elem.tagName == "IN") {
        if (input.value == "e" && input.classList.contains("number")) {
            elem.innerHTML = "&infin;"
        } else {
            elem.innerHTML = input.value;
        }
        if (id == "classname") {
            for (i = 0; i < names.length; i++) {
                document.getElementById(names[i]).innerHTML = input.value;
            }
        }
        if (elem.classList.contains('abilityHead')) {
            if (elem.parentNode.classList.contains('active')) {
                document.getElementById('dropIn').innerHTML = elem.innerHTML;
            }
        }
    } else if (elem.tagName == "IMG") {
        if (openurl.indexOf(id) >= 0) {
            elem.src = input.value;
        } else {
            if (elem.id == "borderSm") {
                elem.alt = input.value;
                document.getElementById('classimageSm').src = document.getElementById('edit').children[2].value;
            }
            var subfolder;
            if (id in multi) {
                subfolder = `${elem.id}/`;
            } else {
                subfolder = ""
            }
            elem.src = `assets/${subfolder}${input.value}.png`;
            elem.alt = input.value;
            if (id == "faction") {
                document.getElementById('border').src = `assets/borders/${input.value}.png`;
                for (i = 0; i < colours.length; i++) {
                    document.getElementById(colours[i]).classList.remove('BD');
                    document.getElementById(colours[i]).classList.remove('Neutral');
                    document.getElementById(colours[i]).classList.remove('Unseen');
                    document.getElementById(colours[i]).classList.remove('Cult');
                    document.getElementById(colours[i]).classList.add(input.value);
                }
                var value = input.value;
                if (value == "BD") {
                    value = "Blue Dragon"
                    document.getElementById('discover').innerHTML = "Discover and";
                    document.getElementById('win').classList.toggle('shown', true);
                    document.getElementById('win2').classList.toggle('shown', false);
                } else if (value == "Cult" || value == "Unseen") {
                    document.getElementById('discover').innerHTML = "Covertly";
                    document.getElementById('win').classList.toggle('shown', true);
                    document.getElementById('win2').classList.toggle('shown', false);
                } else {
                    document.getElementById('win').classList.toggle('shown', false);
                    document.getElementById('win2').classList.toggle('shown', true);
                }
                for (i = 0; i < factions.length; i++) {
                    document.getElementById(factions[i]).innerHTML = value;
                }
            }
            if (id == "types") {
                console.log(input.value);
                for (i = 0; i < Object.values('multi')[1]; i++) {
                    document.getElementById('types').classList.remove(Object.values('multi')[1][i]);
                }
                document.getElementById('types').classList.add(input.value.toLowerCase());
                for (i = 0; i < types.length; i++) {
                    document.getElementById(types[i]).innerHTML = input.value;
                }
                if (vowels.indexOf(input.value[0].toLowerCase()) >= 0) {
                    document.getElementById('ana1').innerHTML = "an";
                } else {
                    document.getElementById('ana1').innerHTML = "a";
                }
            }
        }
        
    } else if (elem.tagName == "DROP") {
        document.getElementById(`ability1`).classList.toggle('active', false);
        document.getElementById(`ability2`).classList.toggle('active', false);
        document.getElementById(`ability3`).classList.toggle('active', false);
        document.getElementById(`ability4`).classList.toggle('active', false);
        document.getElementById(`ability5`).classList.toggle('active', false);
        document.getElementById(`ability6`).classList.toggle('active', false);
        document.getElementById(input.value).classList.toggle('active', true);
        document.getElementById('dropIn').innerHTML = document.getElementById(input.value).children[1].innerHTML;
    }
    document.getElementById('edit').classList.remove('shown');
    document.getElementById('backer').classList.remove('shown');
    if (document.getElementById('edit').children.length >= 3) document.getElementById('edit').removeChild(document.getElementById('edit').children[1]);
    document.getElementById('edit').removeChild(document.getElementById('edit').children[1]);
    
}

function opt(option) {
    var target = option.target;
    if (target.id in optiontoggles) {
        if (typeof optiontoggles[target.id] == "object") {
            for (i = 0; i < optiontoggles[target.id].length; i++) {
                var e = Object.values(optiontoggles)[Object.keys(optiontoggles).indexOf(target.id)];
                document.getElementById(e[i]).classList.toggle('shown');
            }
        } else {
            document.getElementById(optiontoggles[target.id]).classList.toggle('shown');
        }
    }
}



function exp() {
    if (document.getElementsByClassName('active').length <= 0) {
        err('No ability chosen','dropIn');
        return false;
    }
    var output = ""
    if(document.getElementById('convertable').checked) {
        output += "C"
    } else {
        output += "n"
    }
    if(document.getElementById('uniquechk').checked) {
        output += "U"
    } else {
        output += "n"
    }
    if(document.getElementById('occupyimmune').checked) {
        output += "O"
    } else {
        output += "n"
    }
    if(document.getElementById('deathimmune').checked) {
        output += "D"
    } else {
        output += "n"
    }
    if(document.getElementById('additionaldesc').checked) {
        output += "M"
    } else {
        output += "n"
    }
    output += document.getElementById('faction').alt[0].toLowerCase();
    output += document.getElementById('types').alt[0].toLowerCase();
    output += document.getElementById('types').alt[1].toLowerCase();
    if(document.getElementById('passive1').checked) {
        output += "P"
    } else {
        output += "e"
    }
    if(document.getElementById('passive2').checked) {
        output += "P"
    } else {
        output += "e"
    }
    if(document.getElementById('day1').checked) {
        output += "D"
    } else {
        output += "e"
    }
    if(document.getElementById('day2').checked) {
        output += "D"
    } else {
        output += "e"
    }
    if(document.getElementById('night1').checked) {
        output += "N"
    } else {
        output += "e"
    }
    if(document.getElementById('night2').checked) {
        output += "N"
    } else {
        output += "e"
    }
    output += spacer;
    output+=document.getElementById('classname').innerHTML;
    output += spacer;
    output += document.getElementById('userin').innerHTML;
    output += spacer;
    output += document.getElementsByClassName('active')[0].id;
    output += spacer;
    if (output[4] == "M") {
        output += document.getElementById('moreDesc').innerHTML;
        output += spacer;
    }
    if (output[5] == "n") {
        output += document.getElementById('win2').innerHTML;
        output += spacer;
    }
    if (output[8] == "P") {
        output += document.getElementById('abilhead1').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc1').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub1').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg1').src;
        output += spacer;
    }
    if (output[9] == "P") {
        output += document.getElementById('abilhead2').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc2').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub2').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg2').src;
        output += spacer;
    }
    if (output[10] == "D") {
        output += document.getElementById('abilhead3').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc3').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub3').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg3').src;
        output += spacer;
        output += document.getElementById('uses3').innerHTML;
        output += spacer;
    }
    if (output[11] == "D") {
        output += document.getElementById('abilhead4').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc4').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub4').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg4').src;
        output += spacer;
        output += document.getElementById('uses4').innerHTML;
        output += spacer;
    }
    if (output[12] == "N") {
        output += document.getElementById('abilhead5').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc5').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub5').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg5').src;
        output += spacer;
        output += document.getElementById('uses5').innerHTML;
        output += spacer;
    }
    if (output[13] == "N") {
        output += document.getElementById('abilhead6').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc6').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub6').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg6').src;
        output += spacer;
        output += document.getElementById('uses6').innerHTML;
        output += spacer;
    }
    output+= document.getElementById('classimage').src;
    output += spacer;
    if (output[0] == "C") {
        output += document.getElementById('classimageSm').src;
        output += spacer;
        output += document.getElementById('borderSm').alt[0];
    }
    for (i = 0; i < Object.keys(finalSanitizers).length; i++) {
        var regex = new RegExp(Object.keys(finalSanitizers)[i], "g");
        output = output.replace(regex, Object.values(finalSanitizers)[i]);
    }
    console.log(output);
    if (document.getElementById('errorBox')) {
        document.getElementById('errorBox').parentNode.removeChild(document.getElementById('errorBox'));
    }
    if (document.URL.indexOf('?class=') >= 0) output = `${document.URL.slice(0,document.URL.indexOf('?class=')+7)}${output}`;
    else output = `${document.URL}?class=${output}`;
    var errorBox = document.createElement('div');
    errorBox.id = "errorBox";
    errorBox.innerHTML = `<p id="urlinfo" class="noselect">CTRL+A CTRL+C to copy this quickly!<br>URL to this class: </p><p>${output}</p><br>`
    document.getElementById('errorContainer').append(errorBox);
    /*var copybutton = document.createElement('button');
    copybutton.innerHTML = "Copy URL";
    copybutton.id = "copybutton";
    copybutton.classList.add('noselect');
    document.getElementById('errorBox').append(copybutton);
    document.getElementById('copybutton').addEventListener('click', errorBoxCopy);*/
    document.getElementById('backer').classList.add('shown');
    setTimeout(function() {
        document.getElementById('errorBox').parentNode.removeChild(document.getElementById('errorBox'));
        document.getElementById('backer').classList.remove('shown');
    }, 5000);
}
function errorBoxCopy() {
    var copyText = document.getElementById("errorBox").children[0];
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
function err(message, highlight) {
    if (document.getElementById('errorBox')) {
        document.getElementById('errorBox').parentNode.removeChild(document.getElementById('errorBox'));
    }
    var errorBox = document.createElement('div');
    errorBox.id = "errorBox";
    errorBox.innerHTML = `<p>Sorry, there was an error.<br>Error message: <b>${message}.</b></p>`
    document.getElementById('errorContainer').append(errorBox);
    document.getElementById('backer').classList.add('shown');
    setTimeout(function() {
        document.getElementById('errorBox').parentNode.removeChild(document.getElementById('errorBox'));
        document.getElementById('backer').classList.remove('shown');
        if (highlight !== undefined) {
            document.getElementById(highlight).classList.add('highlight');
            setTimeout(function(){document.getElementById(highlight).classList.remove('highlight');}, 375);
        }
    }, 2500);
    

}

function tog(id, boolean) {
    document.getElementById(id).classList.toggle('shown', boolean);
}
function chk(id, boolean) {
    document.getElementById(id).checked = boolean;
}

function imp(key) {
    for (i = 0; i < Object.keys(openingSanitize).length; i++) {
        var regex = new RegExp(Object.keys(openingSanitize)[i], "g");
        key = key.replace(regex, Object.values(openingSanitize)[i]);
    }
    if(key[0] == "C") {
        tog('smallportrait', true);
        tog('convert', false);
        chk('convertable',true);
    } else {
        tog('smallportrait', false);
        tog('convert', true);
        chk('convertable',false);
    }
    if(key[1] == "U") {
        tog('unique', true);
        chk('uniquechk',true);
    } else {
        tog('unique', false);
        chk('uniquechk',false);
    }
    if(key[2] == "O") {
        tog('occupy', true);
        chk('occupyimmune',true);
    } else {
        tog('occupy', false);
        chk('occupyimmune',false);
    }
    if(key[3] == "D") {
        tog('death', true);
        chk('deathimmune',true);
    } else {
        tog('death', false);
        chk('deathimmune',false);
    }
    if(key[4] == "M") {
        tog('moreDesc', true);
        chk('additionaldesc',true);
    } else {
        tog('moreDesc', false);
        chk('additionaldesc',false);
    }
    var value = key[5];
    value = keys[value];
    document.getElementById('border').src = `assets/borders/${value}.png`;
    document.getElementById('faction').src = `assets/faction/${value}.png`;
    document.getElementById('faction').alt = `${value}`;
    for (i = 0; i < colours.length; i++) {
        document.getElementById(colours[i]).classList.remove('BD');
        document.getElementById(colours[i]).classList.remove('Neutral');
        document.getElementById(colours[i]).classList.remove('Unseen');
        document.getElementById(colours[i]).classList.remove('Cult');
        document.getElementById(colours[i]).classList.add(value);
    }
    if (value == "BD") {
        value = "Blue Dragon"
        document.getElementById('discover').innerHTML = "Discover and";
        document.getElementById('win').classList.toggle('shown', true);
        document.getElementById('win2').classList.toggle('shown', false);
    } else if (value == "Cult" || value == "Unseen") {
        document.getElementById('discover').innerHTML = "Covertly";
        document.getElementById('win').classList.toggle('shown', true);
        document.getElementById('win2').classList.toggle('shown', false);
    } else {
        document.getElementById('win').classList.toggle('shown', false);
        document.getElementById('win2').classList.toggle('shown', true);
    }
    for (i = 0; i < factions.length; i++) {
        document.getElementById(factions[i]).innerHTML = value;
    }
    var value = `${key[6]}${key[7]}`;
    value = keys[value];
    for (i = 0; i < Object.values('multi')[1]; i++) {
        document.getElementById('types').classList.remove(Object.values('multi')[1][i]);
    }
    document.getElementById('types').classList.add(value.toLowerCase());
    for (i = 0; i < types.length; i++) {
        document.getElementById(types[i]).innerHTML = value;
    }
    if (vowels.indexOf(value[0].toLowerCase()) >= 0) {
        document.getElementById('ana1').innerHTML = "an";
    } else {
        document.getElementById('ana1').innerHTML = "a";
    }
    document.getElementById('types').src = `assets/types/${value}.png`;
    if (key[8] == "P") {
        chk('passive1',true);
        tog('ability1', true);
    } else {
        chk('passive1',false);
        tog('ability1', false);
    }
    if (key[9] == "P") {
        chk('passive2',true);
        tog('ability2', true);
    } else {
        chk('passive2',false);
        tog('ability2', false);
    }
    if (key[10] == "D") {
        chk('day1',true);
        tog('ability3', true);
    } else {
        chk('day1',false);
        tog('ability3', false);
    }
    if (key[11] == "D") {
        chk('day2',true);
        tog('ability4', true);
    } else {
        chk('day2',false);
        tog('ability4', false);
    }
    if (key[12] == "N") {
        chk('night1',true);
        tog('ability5', true);
    } else {
        chk('night1',false);
        tog('ability5', false);
    }
    if (key[13] == "N") {
        chk('night2',true);
        tog('ability6', true);
    } else {
        chk('night2',false);
        tog('ability6', false);
    }
    var start = key[15];
    var end = key.indexOf(spacer, 15);
    var name = "";
    for (i = 15; i < end; i++) {
        name += key[i];
    }
    document.getElementById('classname').innerHTML = name;
    for (i = 0; i < names.length; i++) {
        document.getElementById(names[i]).innerHTML = name;
    }
    var start = end+1;
    var end = key.indexOf(spacer, start);
    var inp = "";
    for (i = start; i < end; i++) {
        inp += key[i];
    }
    document.getElementById('userin').innerHTML = inp;
    var start = end+1;
    var end = key.indexOf(spacer, start);
    var act = "";
    for (i = start; i < end; i++) {
        act += key[i];
    }
    document.getElementById(`ability1`).classList.toggle('active', false);
    document.getElementById(`ability2`).classList.toggle('active', false);
    document.getElementById(`ability3`).classList.toggle('active', false);
    document.getElementById(`ability4`).classList.toggle('active', false);
    document.getElementById(`ability5`).classList.toggle('active', false);
    document.getElementById(`ability6`).classList.toggle('active', false);
    document.getElementById(act).classList.add('active');
    var ability = act;
    const expect = {
        
    'moreDesc':'innerHTML',
    'win2':'innerHTML',
    'abilhead1':'innerHTML',
    'abildesc1':'innerHTML',
    'abilsub1':'innerHTML',
    'abilImg1':'innerHTML',
    'abilhead2':'innerHTML',
    'abildesc2':'innerHTML',
    'abilsub2':'innerHTML',
    'abilImg2':'innerHTML', 
    'abilhead3':'innerHTML',
    'abildesc3':'innerHTML',
    'abilsub3':'innerHTML',
    'abilImg3':'innerHTML',
    'uses3':'innerHTML',
    'abilhead4':'innerHTML',
    'abildesc4':'innerHTML',
    'abilsub4':'innerHTML',
    'abilImg4':'innerHTML',
    'uses4':'innerHTML',
    'abilhead5':'innerHTML',
    'abildesc5':'innerHTML',
    'abilsub5':'innerHTML',
    'abilImg5':'innerHTML',
    'uses5':'innerHTML',
    'abilhead6':'innerHTML',
    'abildesc6':'innerHTML',
    'abilsub6':'innerHTML',
    'abilImg6':'innerHTML',
    'uses6':'innerHTML',
    'classimage':'src',
    'classimageSm':'src',
    'borderSm':'alt'};
    expectcount = 1;
    var moredesc;
    var neut;
    var abi1;
    var abi2;
    var abi3;
    var abi4;
    var abi5;
    var abi6;
    var conv;
    if (key[4] == "M") {
        expectcount += 1;
        moredesc = true;
    } else {
        moredesc = false;
    }
    if (key[5] == "n")  {
        expectcount += 1;
        neut = true;
    } else {
        neut = false;
    }
    if (key[8] == "P") {
        expectcount += 4;
        abi1 = true;
    } else {
        abi1 = false;
    }
    if (key[9] == "P") {
        expectcount += 4;
        abi2 = true;
    } else {
        abi2 = false;
    }
    for (i = 0; i < 2; i++) {
        if (key[10+i] == "D") {
            expectcount += 5;
            if (i == 0) abi3 = true;
            if (i == 1) abi4 = true;
        } else {
            if (i == 0) abi3 = false;
            if (i == 1) abi4 = false;
        }
    }
    for (i = 0; i < 2; i++) {
        if (key[12+i] == "N") {
            expectcount += 5;
            if (i == 0) abi5 = true;
            if (i == 1) abi6 = true;
        } else {
            if (i == 0) abi5 = false;
            if (i == 1) abi6 = false;
        }
    }
    if (key[0] == "C") {
        expectcount += 2;
        conv = true;
    } else {
        conv = false;
    }
    var offset = 2;
    if (key[5] == "n") offset -= 1;
    if (key[4] == "M") offset -= 1;
    for (i = 0; i < expectcount; i++) {
        var localoffset = 0;
        if (i >= 2 && i <= 29) {
            if (i > 25) if(abi6 == 0) localoffset += 5;
            if (i > 20) if(abi5 == 0) localoffset += 5;
            if (i > 15) if(abi4 == 0) localoffset += 5;
            if (i > 10) if(abi3 == 0) localoffset += 5;
            if (i > 6) if(abi2 == 0) localoffset += 4;
            if (i > 2) if(abi1 == 0) localoffset += 4;
        } else {

        }
        start = end+1;
        end = key.indexOf(spacer, start);
        var act = "";
        for (n = start; n < end; n++) {
            act += key[n];
        }
        var tochange = Object.values(expect)[i+offset+localoffset];
        var id =Object.keys(expect)[i+offset+localoffset];
        if (tochange == "innerHTML") document.getElementById(id).innerHTML = act;
        if (tochange == "src") document.getElementById(id).src = act;
        if (tochange == "alt") document.getElementById(id).alt = act;
    }
    if (key[0] == "C") {
        var convertFac = key[key.length-1];
        if (convertFac == "U") convertFac = "Unseen"
        else if (convertFac == "C") convertFac = "Cult"
        else if (convertFac == "B") convertFac = "BD"
        else if (convertFac == "N") convertFac = "Neutral"
        document.getElementById('borderSm').alt = convertFac;
        document.getElementById('borderSm').src = `assets/borderSm/${convertFac}.png`;
    }
    document.getElementById('dropIn').innerHTML = document.getElementById(ability).children[1].innerHTML;
    /*
    output += spacer;
    if (output[4] == "M") {
        output += document.getElementById('moreDesc').innerHTML;
        output += spacer;
    }
    if (output[5] == "n") {
        output += document.getElementById('win2').innerHTML;
        output += spacer;
    }
    if (output[8] == "P") {
        output += document.getElementById('abilhead1').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc1').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub1').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg1').src;
        output += spacer;
    }
    if (output[9] == "P") {
        output += document.getElementById('abilhead2').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc2').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub2').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg2').src;
        output += spacer;
    }
    if (output[10] == "D") {
        output += document.getElementById('abilhead3').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc3').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub3').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg3').src;
        output += spacer;
        output += document.getElementById('uses3').innerHTML;
        output += spacer;
    }
    if (output[11] == "D") {
        output += document.getElementById('abilhead4').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc4').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub4').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg4').src;
        output += spacer;
        output += document.getElementById('uses4').innerHTML;
        output += spacer;
    }
    if (output[12] == "N") {
        output += document.getElementById('abilhead5').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc5').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub5').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg5').src;
        output += spacer;
        output += document.getElementById('uses5').innerHTML;
        output += spacer;
    }
    if (output[13] == "N") {
        output += document.getElementById('abilhead6').innerHTML;
        output += spacer;
        output += document.getElementById('abildesc6').innerHTML;
        output += spacer;
        output += document.getElementById('abilsub6').innerHTML;
        output += spacer;
        output += document.getElementById('abilImg6').src;
        output += spacer;
        output += document.getElementById('uses6').innerHTML;
        output += spacer;
    }
    output+= document.getElementById('classimage').src;
    output += spacer;
    if (output[0] == "C") {
        output += document.getElementById('classimageSm').src;
        output += spacer;
        output += document.getElementById('borderSm').alt[0];
    }
    for (i = 0; i < Object.keys(finalSanitizers).length; i++) {
        var regex = new RegExp(Object.keys(finalSanitizers)[i], "g");
        output = output.replace(regex, Object.values(finalSanitizers)[i]);
    }
    console.log(output);*/
}
function newClass() {
    window.location.href = document.URL.slice(0,document.URL.indexOf('?class='));
}
