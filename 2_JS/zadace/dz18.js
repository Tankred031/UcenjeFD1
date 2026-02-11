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

    if(zadatak === '2') {
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }

        const niz2 = ["a", a, "c"];
        let index;

        if(!isNaN(b)) {
            index = Number(b);
        } else {
            index = b.length;
        }

        if(index >= niz2.length || index < 0) {
            console.log("Indeks prevelik");
            return;
        }

        console.log(niz2[index]);
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

    if(zadatak === '6'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz5 = [a, b, "KRAJ"];
        console.log(niz5);
        
        niz5.length = niz5.length - 1;

        console.log(niz5);
        
        return;
    }



    if (zadatak === '7') {

        let x = [a, 2];
        let y = [b, 4];

        rezultat.innerHTML = [...x, ...y];
        //oznaciRijeseno('7');
        return;
    }
       
    

    if(zadatak === '8'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz8 = [];
        niz8[0] = a;
        niz8[2] = b;
        console.log(niz8);
        console.log(1 in niz8);
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
    

    if(zadatak === '10'){
        let x = Number(a);
        if (isNaN(x)){ 
            x = a;
        }
        let y = Number(b);
        if (isNaN(y)){
            y = b;
        }
        let niz10 = [];

        switch(true){
            case a === '' || b === '':
                niz10 = [];
                break;
            case x === y:
                niz10 = [x];
                break;
            case typeof y === 'number' && y === 2:
                niz10 = [x, y];
                break;
            default:
                niz10 = [x, y, "x"];
        }

        console.log(niz10);
        return;
    }
    


  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

});