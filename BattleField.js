var canv = document.getElementById("Field");
var ctx = canv.getContext("2d");
var coords = [];
var x = 0;
var y = 0;
var xtemp = 0;
var ytemp = 0;
var isSelected = false;
localStorage.clear();

canv.width = 1000;
canv.height = 1000;
net();
/*ctx.fillStyle = '#ffffff';
ctx.strokeStyle = '#000000';
ctx.fillRect(0, 0, 400, 200);
ctx.strokeRect(0, 0, 400, 200);
ctx.fillStyle = 'magenta';
ctx.fillRect(0, 0, 100, 100);*/

function div(a, b) {
    let c = 0;
    while (a > b) {
        a -= b;
        c++;
    }
    return c;
}

function net() {
    ctx.strokeStyle = '#e6e6e6';
    for (i = 0; i < canv.height; i += 10) {
        for (j = 0; j < canv.width; j += 10) {
            ctx.strokeRect(j, i, 10, 10);
        }
    }
}



canv.addEventListener("mousemove", function (e) {

    if (!isSelected) {
        x = (div(e.offsetX, 10)) * 10;
        y = (div(e.offsetY, 10)) * 10;
        net();
        /*if ((ytemp != y) && (xtemp != x))
        {
            strokeStyle = rgba(255, 255, 255, 0.0);
            ctx.strokeRect(xtemp, ytemp, 10, 10);
        }*/
        ctx.strokeStyle = '#666666';
        ctx.strokeRect(x, y, 10, 10);
        //xtemp = x;
        //ytemp = y;
    }
})

canv.addEventListener("mousedown", function (e) {
    x = (div(e.offsetX, 10)) * 10;
    y = (div(e.offsetY, 10)) * 10;
    net();
    /*if ((ytemp != y) && (xtemp != x))
    {
        strokeStyle = rgba(255, 255, 255, 0.0);
        ctx.strokeRect(xtemp, ytemp, 10, 10);
    }*/
    ctx.strokeStyle = '#333333';
    ctx.strokeRect(x, y, 10, 10);
    isSelected = true;
    localStorage.setItem("isSelected", true);
    //xtemp = x;
    //ytemp = y;
})

if (isSelected) {
    localStorage.setItem("isSelected", true);
}

/*ctx.strokeStyle = 'magenta';
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(25, 100);
ctx.lineTo(75, 100);
ctx.closePath();
ctx.stroke();*/