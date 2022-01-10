import { DateTime } from '/node_modules/luxon/src/luxon.js';
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
let time = document.querySelector('#date');
time.innerHTML = now;

function actualTime() {
  time.innerHTML = now;
}
setInterval(actualTime, [1000]);
