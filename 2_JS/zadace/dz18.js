const rezultat = document.getElementById('rezultat');
document.getElementById('trigger').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;


    if (zadatak === '1') {

        rezultat.innerHTML = [a, '🤤', '🍕', b];
        return;
    }











    if (zadatak === '3') {
        
        rezultat.innerHTML = `${b}, ${a}`;
        return;
    }
   
    if (zadatak === '4') {

        if(a.length <= 3){
            rezultat.innerHTML= a + 'X' + b;
        } else {
            rezultat.innerHTML= 'Y' + a + b;
            
        }
        return;
    }


    if (zadatak === '5') {
        
        const broj = Number(a)
        
        if(!isNaN(broj)) {
        rezultat.innerHTML = 'A je broj';
        } 
        else {
            rezultat.innerHTML='A je string';
        }
        return;
        
    }








    if (zadatak === '7') {

        let x = [a, 2];
        let y = [b, 4];

        rezultat.innerHTML = [...x, ...y];
        return;
    }
        

    








    if (zadatak === '9') {

        const [prvi, drugi, ...ostalo] = [a, b, 7, 6, 5];
        console.log(prvi);         
        console.log(drugi);
        console.log(...ostalo);
        return;
        
    }
    return

    


  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

});