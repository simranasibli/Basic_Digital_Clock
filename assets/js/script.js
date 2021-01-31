var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

setInterval(function () {

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second++;

    if (Number(document.getElementById("second").innerHTML == 59)) {

        minute++;
        second = 0;

    } else if (Number(document.getElementById("minute").innerHTML > 59)) {

        hour++;
        minute = 0;

    } else if (Number(document.getElementById("hour").innerHTML > 23)) {

        hour = 0;
        minute = 0;
    }

}, 1000);