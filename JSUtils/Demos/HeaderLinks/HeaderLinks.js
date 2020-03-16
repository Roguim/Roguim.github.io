//
//
// HEADER LINKS by otorhinolaryngologically/Roguim. Demo available at https://roguim.github.io/JSUtils/Demos/HeaderLinks/index.html
//
//
var headernumber = 0;
function MakeHeader(element) {
    if (element.classList.contains('invisible')) {
        return;
    } else {
        if (element.id == "") {
            headernumber += 1;
            element.id = `${headernumber}`;
        }
        name = element.innerHTML;
        link = document.createElement('a');
        link.innerHTML = name;
        link.classList.add(element.nodeName);
        link.href = document.URL+`#${element.id}`;
        document.getElementsByTagName('header')[0].append(link);
    }
}
for (n = 1; n <= 6; n++) {
    for (i = 0; i < document.getElementsByTagName(`h${n}`).length; i++) {
        document.getElementsByTagName(`h${n}`)[i].classList.add('HeaderLinks-Heading');
    }
}
for (i = 0; i < document.getElementsByClassName('HeaderLinks-Heading').length; i++) {
    MakeHeader(document.getElementsByClassName('HeaderLinks-Heading')[i]);
}
