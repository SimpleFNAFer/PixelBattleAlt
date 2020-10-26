var field = document.getElementById('BattleField')
var canv = field.contentWindow.document.getElementById('Field')
var ctx = canv.getContext('2d');
var res = document.getElementById('Reselect');

if (canv.innerHTML == "isSelected") {
    res.style.visibility = "visible";
}