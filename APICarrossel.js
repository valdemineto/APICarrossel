let cont = 1;
document.getElementById("radio1").checked = true;
let interval = 3000;
let inter = setInterval(navigatorAuto, interval);
function resetCont(reset) {
    cont = reset;
}
function navigatorAuto() {
    cont++
    if (cont > 4) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}
function anterior() {
    if (cont != 1) {
        clearInterval(inter)
        cont--
        document.getElementById('radio' + cont).checked = true;
    }
}
function proximo() {
    if (cont != 4) {
        clearInterval(inter)
        cont++
        document.getElementById('radio' + cont).checked = true;
    }
}

