
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak

      const a1 = Number(a);   

      if (!a) {
      rezultat.innerHTML = ('Uneseni podatak nije broj')
      return;
      }
      //console.log(a1);

      if (a1<2 || a1>10000000) {
      rezultat.innerHTML = ('Uneseni broj mora biti između 2 i 10.000.000')
        return
      }
      
      /*
      5 % 2 = 1
      5 % 3 = 2
      5 % 4 = 1
      // 5 je prim broj

      6 % 2 = 0
      6 % 3 = 0
      6 % 4 = 2
      6 % 5 = 1
      // 6 nije prim broj
      */

      let prim = true;
      let brojac = 1;
    //let cjelobrojDjeljiv = 0
      for (let i=2; i<a1; i++) {
        if(brojac++ % 1000 === 0){ // svaki tisućiti ispiši
        console.log(brojac, a1, '%',  i, '=',  a1 % i); 
        }  
        
        if(a1 % i === 0) {
      //console.log('Nije prosti broj', a1);
        prim = false;
        break;               // prekida petlju jer nije potrebno sve ispitati
        }
      }

      if (prim) {
        rezultat.innerHTML= 'prim'      // `${a1} je PRIM broj`
      } else {
        rezultat.innerHTML= 'nije prim' // `(${brojac}) {a1} nije PRIm jer je cjelobrojno djeljiv s ${cjelobrojDjeljiv}`
      }

      // kraj rješavanje 1. zadatak
    break;






    case '2':
      // rješavanje 2. zadatak

      // 6 je savršen broj ZAŠTO?
      // 6 % 1 = 0, stoga UVIJEK uzimam 1 , svaki broj je djeljiv sa 1
      // 6 % 2 = 0, uzimam 2
      // 6 % 3 = 0, uzimam 3
      // 6 % 4 = 2, NE uzimam 4
      // 6 % 5 = 1, NE uzimam 5

      // Zbrojim sve one koje uzimam (1+2+3) = 6
      // ako je ulaz (6) jednako zbroj (6) radi se o savršenom broju

      // 7 nije savršeni broj
      //       1
      // (7%2)=1
      // (7%3)=1
      // (7%4)=3
      // (7%5)=2
      // (7%6)=6
      // ima samo 1  1!== 7 i stoga nije savršeni broj

      // 28
      // 1          +1
      // 28%2=0     +2
      // 28%3=0     +3 
      // 28%4=0     +4
      // 28%5=3
      // 28%6=4
      // 28%7=0     +7
      // 28%8=4
      // 28%9=1
      // 28%10=8
      // 28%11=6
      // 28%12=4
      // 28%13=2
      // 28%14=0    +14
      // 28%15=13   _____
      // 28%16=12   =28
      // ... itd
 
      // 1+2+4+7+14 = 28, 28 = 28, 28 je savršeni broj
      

      const b1 = Number(b);   

      if (!b) {
      rezultat.innerHTML = ('Uneseni podatak nije broj')
      return;
      }
      
      if (b1<2 || b1>1000) {
      rezultat.innerHTML = ('Uneseni broj mora biti između 2 i 1.000')
        return
      }

      // ovo je srž, gore su idiotske kontrole...
      let suma = 0;
      for (i=1; i<b1; i++){
        if(b1%i === 0){
          suma += i;          
        }

      }
      if (suma === b1){
        rezultat.innerHTML = `${b1} je savršeni broj`
      } else {
        rezultat.innerHTML = `${b1} nije savršeni broj`
      }


      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak


      const q = Number(b);

      if (isNaN(q)) {
        rezultat.innerHTML = ('Uneseni podatak nije broj');
        return
      }

      if (q<2 || q>1000) {
        rezultat.innerHTML = ('Uneseni broj mora biti između 2 i 1000');
        return
      }

      let zbroj = 0;
      const duzina = b.length;

      for (let i=0; i<duzina; i++) {
        zbroj += Number(b[i]) ** duzina;
      }

      if (zbroj === q) {
        rezultat.innerHTML = ("Ovo JE armstrongov broj 🙃");
      } else {
        rezultat.innerHTML = ("Ovo nije armstrongov broj");
      }




      // kraj rješavanje 3. zadatak
    break;
    case '4':
      // rješavanje 4. zadatak

      
      const palindrom = a;
      const obrnuto = a.split("").reverse().join("");

      if (obrnuto === palindrom) {
        rezultat.innerHTML = ("Riječ je palindrom"); 
      } else {
        rezultat.innerHTML = ("Riječ nije palindrom")
      }
      
      /*
      // palindrom --> ružanedoodenažur
      

      
        */


      
      // kraj rješavanje 4. zadatak
    break;
    case '5':
      // rješavanje 5. zadatak


    const rijec = b;
    const stopRijeci = [
    'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 
    'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 
    'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad', 
    'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao', 
    'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja', 
    'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 
    'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko', 
    'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad', 
    'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen', 
    'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 
    'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one', 
    'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje', 
    'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije', 
    'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe', 
    'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 
    'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to', 
    'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 
    'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the', 
    'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
    'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until', 
    'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
    'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 
    'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
    'further', 'then', 'once'
    ];

    let pronadenaRijec = false;

    for (let i = 0; i < stopRijeci.length; i++ ) {
      if (rijec === stopRijeci[i]) {
        pronadenaRijec = true;
        break;
      }
    }

      if (pronadenaRijec) {
        rezultat.innerHTML = ("Upisana riječ postoji u nizu 👍🏻");
      } else {
        rezultat.innerHTML = ("Riječ ne postoji u nizu 👎🏻");
      }
    
    

      // kraj rješavanje 5. zadatak
    break;
    
    case '6':
      // rješavanje 6. zadatak


      const unos = a.toLowerCase();
      const samoglasnik = ["a", "e", "i", "o", "u"];

      if (unos === "") {
      rezultat.innerHTML = "Unesi riječ";
      return;
      }

      let brojSamoglasnika = 0;
      let brojSuglasnika = 0;

      for (let i = 0; i < unos.length; i++) {
        if(samoglasnik.includes (unos[i])) {
          brojSamoglasnika++
        } else if (unos [i] >= "a" && unos[i] <= "z") {
          brojSuglasnika++
        }
      }  
        rezultat.innerHTML =
        "Broj samoglasnika: " + brojSamoglasnika +
        "<br>Broj suglasnika: " + brojSuglasnika
      
    




      // kraj rješavanje 6. zadatak
    break;

  
    case '7':
      // rješavanje 7. zadatak


    const p = Number(a);
    const r = Number(b);

    if (isNaN(p) || isNaN(r)) {
        rezultat.innerHTML = ('Uneseni podatak nije broj');
        return
      }

    if (p < r) {
      for (let i = p; i < r; i++) {
        ispis += i + "\t";
      }                 
    } else if (p > r) {
        for (let i = p; i > r; i--) {
        ispis += i + "\t";
      }
    } else if (p === r) {
        rezultat.innerHTML = "a i b su jednaki"
        return;
      }

        rezultat.innerHTML= (ispis); 
      




      // kraj rješavanje 7. zadatak
    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

    
});


const poveznica = document.getElementById('poveznica');
poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
   switch (event.target.value) {
    case '1':
      poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
    break;
    case '2':
      poveznica.href='https://www.enciklopedija.hr/clanak/savrseni-broj';
    break;
    case '3':
      poveznica.href='https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
    break;
    case '4':
      poveznica.href='https://www.enciklopedija.hr/clanak/palindrom';
    break;
    case '5':
      poveznica.href='https://www.coursera.org/articles/what-are-stop-words';
    break;
    case '6':
      poveznica.href='https://enciklopedija.hr/clanak/samoglasnik';
    break;
    case '7':
      poveznica.href='https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
    break;
    default:
      poveznica.href='#';
  }
});



