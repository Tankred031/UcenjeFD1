 //  petlje, iteracije, ponavljanje koraka (loops)

 // klasična: for petlja

 // for(inicijalni uvjet ; uvijet prekida petlje ; uvećanje/umanjenje tj promjena varijable)
 // for petlja mora imati jednu varijablu
 // ta varijabla će morati mijenjati svoju vrijednost, definiramo ju s -let-

 // 10. puta jedno ispod drugog ispišite u konzoli Edunova

 const tekst = "Edunova"
 

 console.log(tekst)*10;
 console.log(tekst); 
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 console.log(tekst);
 
console.log('===============================');

for(let i=0;i<10;i++){
    console.log('Edunova');
}



for(let i=0;i<10;i++) console.log('Edunova');

console.log('===============================');

for(let i=0;i<10;i++){
    console.log(`Vrijednost i je ${i}`);
    
} 


console.log('===============================');


let suma = 0;
for(let i=0;i<10;i++){
    console.log(`${suma} + ${i+1} = `);    
    suma += i+1;
    console.log(suma);
    //debugger;
}
console.log('suma', suma);


// petlja se može preskočiti i nasilno prekinuti
console.log('===============================');

for(let i=0;i<10;i++){
    if(i===3){
        continue;  // preskoči console.log
    }
   if (i===7){
        break;     // nasilno prekini petlju bez obzira na vrijednost i
    }
    console.log(i);
} 

console.log('===============================');

 // petlja u petlji 

 for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){        
        console.log( (i+1) * (j+1) );
    }
 }

console.log('===============================');


 // for s nizom []

 const niz = [2,3,4,5,6,7]

 for(let i=0; i<niz.length-1; i++){
    console.log(niz[i]);
 }

 console.log('===============================');


 // pojednostavljena sintaksa ali samo za prolazak
 for(const broj of niz){
    console.log(broj);
    
 }
    
console.log('===============================');

// string je niz (neformalno ali jest)

const ime = 'Marko';    // string
for(let i=0; i<ime.length; i++){
    console.log(ime[i]);
    
}

console.log('===============================');