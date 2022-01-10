import { DateTime } from '../node_modules/luxon/src/luxon.js';



function actualTime() {
  
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const time = document.querySelector('#date');
  time.innerHTML = now;
}
//actualTime();

setInterval(actualTime, [1000]);
