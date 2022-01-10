var DateTime = luxon.DateTime;
const now = DateTime.now();
let time = document.querySelector('#date');
time.innerHTML = now;

function actualTime() {
  time.innerHTML = now;
}

setInterval(actualTime, [1000]);
