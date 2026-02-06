
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {

    case '1': {
      // rješavanje 1. zadatak
      const command = "start"

      switch(command){
      case "start":
        rezultat.innerHTML="Pokretanje programa"
        break;

      case "stop":
        rezultat.innerHTML="Zaustavljanje"
        break;
      
      case "pause":
        rezultat.innerHTML="Pauza programa"
        break;  
           
        default:
        rezultat.innerHTML="Nepoznata naredba"
        
        // kraj rješavanje 1. zadatak
      }
    break;
    }    
    



    case '2': {
      // rješavanje 2. zadatak

      const ocjena = a.toUpperCase();
      
      switch (ocjena) {

      case "A" :
      case "B" :
      case "C" :  
        rezultat.innerHTML="Položio"
        break;
      
      case "D" :
      case "F" :
        rezultat.innerHTML="Nije položio"
        break;
      
      default:
        rezultat.innerHTML="Nije dobar unos"
      }  

      // kraj rješavanje 2. zadatak
      break;
    }    
    


      
    case '3': {
      // rješavanje 3. zadatak
      
    const x=Number(a);

    switch(true){

  case x<0 || x>100 :
    rezultat.innerHTML='Unesi broj od 0 do 100'
    break
  
  
  case x>=90 && x<=100 :
    rezultat.innerHTML='Izvrstan'
    break
  case x>=80 :
    rezultat.innerHTML='Vrlo dobar'
    break
  case x>=70 :
    rezultat.innerHTML='Dobar'
    break
  case x>=60 :
    rezultat.innerHTML='Dovoljan'
    break
  default:
    rezultat.innerHTML='Nedovoljan'
    }  
  
  

      // kraj rješavanje 3. zadatak
    break;
  }

  // Za uneseni decimalni broj ispiši samo decimalni dio
  // ulaz 3.14 izlaz 14

  case '4': {

  const x = parseFloat(a)
  if(!x){
    rezultat.innerHTML='Niste unijeli dobru vrijednost'
    return
  }
  const cijeliBroj = parseInt(a)
  rezultat.innerHTML = parseInt((x-cijeliBroj)*100)  

    
   break;
  }

//Za uneseni broj ispiši da li je paran ili nije

  case '5': {
  
    const x=Number(a)
    if(!x){                              
    rezultat.innerHTML='Niste unijeli broj'
    return
  }

    if(x%2===0){
      rezultat.innerHTML= 'Broj je paran'
    }
    else {
      rezultat.innerHTML='Broj je neparan'
    }
    break

  }

  case '6': {
  // Za uneseno ime namirnice ispiši da li je voće

  switch(a.toLowerCase()){
      case 'jabuka':
      case 'kruška':
      case 'banana':
      case 'grožđe':
        rezultat.innerHTML='voće je'
      break

      default:
        rezultat.innerHTML='nisam siguran da li je voće'
  }

  case '':

  rezultat.innerHTML=a.length

  break
  }

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});




// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).
