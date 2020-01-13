document.body.onload = function(){
    updateTheme();
}
function updateTheme() {
    if (localStorage.getItem("theme") == "dark") {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}
function themeChange() {
    var theme = localStorage.getItem("theme");
    if (theme == "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    updateTheme();
}