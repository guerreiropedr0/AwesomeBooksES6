function actualTime() {
  const time = document.querySelector('#date');
  Date.now();

  time.innerHTML = (new Date()).toLocaleString('en-US');
}
actualTime();
