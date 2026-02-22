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
        rezultat.innerHTML = a * b;
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


    }
});