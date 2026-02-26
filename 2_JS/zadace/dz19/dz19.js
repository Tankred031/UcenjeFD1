const rezultat = document.getElementById('rezultati');
document.getElementById('izvedi').addEventListener('click', function() {

    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const zadaci = document.getElementById('zadaci').value;

    switch (zadaci) {
        case "1":

        if(isNaN(a) || isNaN(b)) {
            rezultat.innerHTML = "Uneseni podatak nije broj"
        } else {
        rezultat.innerHTML = (a * b) + " cm<sup>2</sup>";
        }
        break;






        case "2":

        if (b !== "") {
            rezultat.innerHTML = "Unesi broj u polje a";
        } else if(isNaN(a)) {
                 rezultat.innerHTML = "Uneseni podatak nije broj"
        } else if(a>0){
            rezultat.innerHTML = "Broj je pozitivan";
        } else if(a<0){
            rezultat.innerHTML = "Broj je negativan";
        } else {
            rezultat.innerHTML = "Broj je 0";
        }
        break;






        case "3":

        let niz = a.split(",");
        let zbroj = 0;

        for (let i = 0; i < niz.length; i++) {
            if (!isNaN(niz[i])) {
            zbroj += Number(niz[i]);
            }
        }   
        
        rezultat.innerHTML = ("Zbroj niza brojeva je: " + zbroj)

        break;





        case "4":

        let brojOcjena = prompt("Koliko ocjena želiš unijeti?");
        let suma = 0;

        for (let i = 0; i < brojOcjena; i++) {
            let ocjena = Number(prompt("Unesi ocjenu:"));
                suma += ocjena;
            }

            let prosjek = suma / brojOcjena;

             rezultat.innerHTML = ("Prosjek ocjena je: " + prosjek);

        break;





        case "6":
            
        
        let rijec = a.toLowerCase();

        rijec = rijec.split("").reverse().join("");        
        rezultat.innerHTML = rijec;
     
        break;





        case "7":

        let izraz = a.toLowerCase().split("");
        let samoglasnici = ["a", "e", "i", "o", "u"];
        let brojac = 0;
        
        for(let i=0; i<izraz.length; i++)            
            if(samoglasnici.includes(izraz[i])){
                brojac++     
        }
        
           rezultat.innerHTML = "Ima ukupno: " + brojac + " samoglasnika";
            
        break;





        case "8":

        if(a !== "") {
            let tempC = Number(a);
        
        
            if (isNaN(tempC)) {
                rezultat.innerHTML = "Uneseni podatak nije broj";
                return;
            } 
        
            let rezultatC = (tempC * 9 / 5) + 32;
            rezultat.innerHTML = "Temperatura iznosi: " + rezultatC + " °F";

        } 
        
        else if(b !== "") {
            let tempF = Number(b);
        
        
            if(isNaN(tempF)) {
                rezultat.innerHTML = "Uneseni podatak nije broj"
                return;
            }
        
            let rezultatF = (tempF - 32) * 5 / 9;
            rezultat.innerHTML = "Temperatura iznosi: " + rezultatF + " °C";            
        
        } 
        
        else {
            rezultat.innerHTML = "Nije uneseno ni jedno polje";              
        }
        
        break;
       




        case "9": 

        let brojevi = []

        for(let i=0; i<brojevi.length; i++) {
            let j=0; j<brojevi.length; j++ -1 
        } if(brojevi[j])<(j<brojevi[j-1]) {

        } 




        break;

        
        
        
        
        
        case "10":



        break; 










    }
});