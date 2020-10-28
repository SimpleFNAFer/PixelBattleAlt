var res = document.getElementById('Reselect');

document.addEventListener('mousemove', function () {
    if (localStorage.getItem("isSelected")) {
        res.style.visibility = "visible";
    }
})

