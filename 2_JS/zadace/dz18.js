const rezultat = document.getElementById('rezultat');
document.getElementById('trigger').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;


    if (zadatak === '1') {


        return
    }











    if (zadatak === '3') {
        
        rezultat.innerHTML = `${b}, ${a}`;
        return
    }
   

    if (zadatak === '5') {
        
        const broj = Number(a)
        
        if(!isNaN(broj)) {
        rezultat.innerHTML = 'A je broj';
        } 
        else {
            rezultat.innerHTML='A je string'
        }
        return
        
    }

  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

});