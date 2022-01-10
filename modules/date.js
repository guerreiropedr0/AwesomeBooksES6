var DateTime = luxon.DateTime;


function actualTime() {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const time = document.querySelector('#date');
  time.innerHTML = now;
}
actualTime();

setInterval(actualTime, [1000]);
