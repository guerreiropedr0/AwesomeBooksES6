const staticTime=()=> {
  const time = document.querySelector('#date');

  time.textContent = (new Date()).toLocaleString('en-US');
}
staticTime();
