
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

// Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);

  const x = Number(a);  // mogu dobiti NaN
  if(!x){
    rezultat.innerHTML='A nije broj';
    return;
  }

  const y = Number(b)
  if(!y){
    rezultat.innerHTML='B nije broj'
    return;
  }

  // ovdje sam siguran kako imam brojeve u varijablama x i y

  if(x>y){
    rezultat.innerHTML=x
  }else if(y>x) {
    rezultat.innerHTML=y
  }else{
    rezultat.innerHTML='A i B su isti';
  }
    
  // ovo smo imali prije x i y 

  /*if(a>b){
    rezultat.innerHTML=a;
  }else{
    rezultat.innerHTML=b;
  }
  */
  
  return; // short curcuiting prekida izvođenje cijele fukcije ()=>{}
  }
  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  


  
  if(zadatak==='2'){
  
  const x = Number(a);  
  if(!x){
    rezultat.innerHTML='A nije broj';
    return
  }
  const y = Number(b);  
  if(!y){
    rezultat.innerHTML='B nije broj';
    return
  }
  const z = Number(c);  
  if(!z){
    rezultat.innerHTML='C nije broj';
    return
  }
  if(x<y&&x<z){
    rezultat.innerHTML=x
  }else if(y<x&&y<z){
    rezultat.innerHTML=y
  }else{
    rezultat.innerHTML=z
  }
  return
  
  }


    
  if(zadatak === '3'){
    const x = Number(a)
    const y = Number(b)
    const z = Number(c)
    const q = Number(d)

    if(isNaN(x)) {
      rezultat.innerHTML='A nije broj'
      return
    }
    if(isNaN(y)) {
      rezultat.innerHTML='B nije broj'
      return
    }
    if(isNaN(z)) {
      rezultat.innerHTML='C nije broj'
      return
    }
    if(isNaN(q)) {
      rezultat.innerHTML='D nije broj'
      return
    }

    rezultat.innerHTML=x+y+z+q
    //rezultat.innerHTML=a+b+c+d  spaja stringove

    return
  }
  

  if(zadatak==='4'){
    const godinaRodenja=Number(a)       //const trenutnaGodina = new Date().getFullYear();
    const y=2026                        //const dob = trenutnaGodina - godinaRodenja;



    if(isNaN(godinaRodenja)) {
      rezultat.innerHTML='A nije broj'
      return
    }

    if(y-godinaRodenja >=18){
      rezultat.innerHTML='Osoba je punoljetna'
    } else{
      rezultat.innerHTML='Osoba nije punoljetna'
    }
      return
  }


  //  Provjera punoljetnosti: 
  //  Korisnik unosi godinu rođenja u polje A. 
  //  Izračunaj njegovu dob u odnosu na tekuću godinu i ispiši je li punoljetan ili nije.


  /*
  [ZADATAK 5]
 Pozitivan, negativan ili nula: 
 Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.*/

if(zadatak==='5'){

  const x=Number(a)
  if(isNaN(x)) {
      rezultat.innerHTML='A nije broj'
      return
    }
  if(x>0){
    rezultat.innerHTML='Broj je pozitivan'
  }else if(x<0){
    rezultat.innerHTML='Broj je negativan'
  }else{
    rezultat.innerHTML='Broj je nula'
  }
  return
}

 
 /*[ZADATAK 6]
 Parnost broja: 
 Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%). */

if(zadatak==='6'){

  let x=Number(a)
  if(isNaN(x)) {
    rezultat.innerHTML='A nije broj'
    return
  }

    rezultat.innerHTML=(x%2===0) ? 'Broj je paran' : 'Broj je neparan'
    return
}



/* 
 [ZADATAK 7]
 Ocjenjivanje: 
 Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
 90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.
*/
 
if(zadatak==='7'){
  let x=Number(a)
  if(isNaN(x)){
    rezultat.innerHTML='A nije broj'
  return
}
  if(x<0 || x>100) {
    rezultat.innerHTML='Unesi broj od 0 do 100'
    return
  }
  
  if(x>=90&&x<=100){
    rezultat.innerHTML='Ocjena: odličan'
  }else if(x>=80&&x<=89){
      rezultat.innerHTML='Ocjena: vrlo dobar'
    }else if(x>=70&&x<=79) {
      rezultat.innerHTML='Ocjena: dobar'
    }else if(x>=60&&x<=69) {
      rezultat.innerHTML='Ocjena: dovoljan'
    }else {
      rezultat.innerHTML='Ocjena: nedovoljan'
    }return
  }


  



/*
 [ZADATAK 8]
 Djeljivost: 
 Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
 Ispiši "Djeljiv je" ili "Nije djeljiv".  
  */

 if(zadatak==='8'){

  let x=Number(a)
  let y=Number(b)
  if(isNaN(x)) {
    rezultat.innerHTML='A nije broj'
    return
  }

  if(isNaN(y)) {
    rezultat.innerHTML='B nije broj'
    return
  }  
 
  if(y===0){
    rezultat.innerHTML='S nulom ne možemo dijeliti'
    return
  }
  
  rezultat.innerHTML=(x%y===0) ? 'Djeljiv je' : 'Nije djeljiv'
  return
 }

 //Zadatak 9 revisited
 //Zbroj većih brojeva (a i b)+(c i d)

 if(zadatak==='9'){
  console.log('Riješavam zadatak 9')
  
  
}
else if(zadatak==='9'){
  const x = Number(a)
  const y = Number(b)
  const z = Number(c)
  const q = Number(d)

  if(!x || !y || !z || !q){
    rezultat.innerHTML='Jedno od unosnih polja nije broj'
    return
  }
  if (x === 0 && y === 0 && z === 0 && q === 0) {
    rezultat.innerHTML = 'Rezultat je nula'
    return
  }
  if(x > y && z > q){
    rezultat.innerHTML= x + z
  }else if(x < y && z < q){
    rezultat.innerHTML= y + q
  }else if(x > y && z < q){
    rezultat.innerHTML= x + q
  }else if(x < y && z < q){
    rezultat.innerHTML= y + q
  }
  return
}

// Zadatak 10
//  Za upisani broj u polju D ispiši 10x veći broj

if(zadatak === '10'){


const x = Number(d)
if(!x || x===0){
  rezultat.innerHTML='Vrijednost u polju d nije broj ili je 0'
  return
}
  rezultat.innerHTML= x*10 
  return
}
  

// Zadatak 11
// Za uneseno ime grada u polju B ispiši je li sjedište Edunova ili ne

if(zadatak==='11'){

  
 if(!b){
  rezultat.innerHTML='Obavezan unos grada u polje b'
  return
 } 

 //.toLowerCase()  ignorira velika mala slova

 if(b.toLowerCase() === 'osijek'){
  rezultat.innerHTML= `${b} je sjedište Edunova`
 }
 else {
  rezultat.innerHTML= `${b} nije sjedište Edunova`
 }

  return  
}

// Zadatak 12
// Za upisane pojmove u polju a i b ispiši ih jedno pokraj drugog

if(zadatak==='12'){

rezultat.innerHTML= `${a} ${b}`
return

}

// Zadatak 13
// Ispiši umnožak broja a i d

if(zadatak==='13'){

const x=Number(a)
const y=Number(d)

if(!x || x===0){
  rezultat.innerHTML='Greška'
}

if(!y || y===0){
  rezultat.innerHTML='Greška'
}

/*if(isNaN(x)||(y)){
  rezultat.innerHTML='a ili d je nije broj'
*/

rezultat.innerHTML=x*y
return
}
}

rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;

});