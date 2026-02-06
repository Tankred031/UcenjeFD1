
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak
      const command = "start"

      switch(command){
      case "start":
        rezultat.innerHTML="Pokretanje programa"
      }
        break

      case "stop":
        rezultat.innerHTML="Zaustavljanje"
        break
      
      case "pauza":
        rezultat.innerHTML="Pauza programa"
        
           
        default:
        rezultat.innerHTML="Nepoznata naredba"
      }  
        // kraj rješavanje 1. zadatak
    break;
  
  
    case '2':
      // rješavanje 2. zadatak

      

      switch (letter){

      case "A" :
      case "B" :
      case "C" :  
        rezultat.innerHTML="Položio"
        break
      
      case "D" :
      case "F" :
        rezultat.innerHTML="Nije položio"
        break
      

      default:
        rezultat.innerHTML="Nije dobar unos"
      }


      // kraj rješavanje 2. zadatak
    break;


    case '3':
      // rješavanje 3. zadatak

      // kraj rješavanje 3. zadatak
    break;


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

