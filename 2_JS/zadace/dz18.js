const rezultat = document.getElementById('rezultat');
document.getElementById('trigger').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

/*
function oznaciRijeseno(zadatakValue) {
    const opcija = document.querySelector(
    `#zadatak option[value="${zadatakValue}"]`
    );
    
    if (opcija) {
        opcija.classList.add('rijeseno');
    }
}
*/ 

    if (zadatak === '1') {

        rezultat.innerHTML = [a, '🤤', '🍕', b];
        //oznaciRijeseno('1');
        return;
    }











    if (zadatak === '3') {
        
        rezultat.innerHTML = `${b}, ${a}`;
        //oznaciRijeseno('3');
        return;
    }
   
    if (zadatak === '4') {

        if(a.length <= 3){
            rezultat.innerHTML= a + 'X' + b;
        } else {
            rezultat.innerHTML= 'Y' + a + b;
        }   //oznaciRijeseno('4');
        return;
    }


    if (zadatak === '5') {
        
        const broj = Number(a)
        
        if(!isNaN(broj)) {
        rezultat.innerHTML = 'A je broj';
        } 
        else {
            rezultat.innerHTML='A je string';
        }   //oznaciRijeseno('5');
        return;
        
    }








    if (zadatak === '7') {

        let x = [a, 2];
        let y = [b, 4];

        rezultat.innerHTML = [...x, ...y];
        //oznaciRijeseno('7');
        return;
    }
        

    








    if (zadatak === '9') {

        const [prvi, drugi, ...ostalo] = [a, b, 7, 6, 5];
        console.log(prvi);         
        console.log(drugi);
        console.log(...ostalo);
        //oznaciRijeseno('9');
        return;
        
    }
    

    


  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

});