const rezultat = document.getElementById('rezultat');
document.getElementById('trigger').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;


  if (zadatak === '1')