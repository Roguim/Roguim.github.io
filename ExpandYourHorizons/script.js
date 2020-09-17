function scrollerer() {
    if (window.innerWidth <= 900) return "small window, effects have been cut.";
    var sized = 0.029*scrollY;
    console.log(sized);
    document.getElementById('povertyheader').style.backgroundPosition = `0vmax -${sized}vmax`;
}