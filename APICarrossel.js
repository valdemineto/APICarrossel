let cont = 1;
let click = 0;
document.getElementById("radio1").checked = true;
let interval = 3000;
function resetCont(reset) {
    cont = reset;
}
function rein() {
    if (click == 0) {
        setInterval(navigatorAuto, interval);
    }
};
let inter = setInterval(navigatorAuto, interval);
function navigatorAuto() {
    cont++
    if (cont > 4) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
    click = 1;
}

function anterior() {
    if (cont != 1) {
        clearInterval(inter)
        cont--
        document.getElementById('radio' + cont).checked = true;
        click = 1;
    }
}
function proximo() {
    if (cont != 4) {
        clearInterval(inter)
        cont++
        document.getElementById('radio' + cont).checked = true;
    }
}

