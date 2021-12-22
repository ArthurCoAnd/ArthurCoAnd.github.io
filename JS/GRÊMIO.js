console.log("GRÊMIO.js")

var end = new Date('12/09/2021 11:30 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = now - end;
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('tempo').innerHTML = days + 'd ';
    document.getElementById('tempo').innerHTML += hours + 'h ';
    document.getElementById('tempo').innerHTML += minutes + 'm ';
    document.getElementById('tempo').innerHTML += seconds + 's';
}

timer = setInterval(showRemaining, 1000);