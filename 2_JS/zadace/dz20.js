let ime1 = prompt("Unesi prvo ime");
let ime2 = prompt("Unesi drugo ime");

console.log(ime1);
console.log(ime2);

//let rezultatIme1 = "";
//let rezultatIme2 = "";


//SPAJANJE STRINGOVA

let spojenoIme = (ime1+ime2).toLocaleLowerCase()
let rezultat = "";





//BROJANJE SLOVA IMENA

for (let i = 0; i < spojenoIme.length; i++) {
    let brojac = 0;
    for (let j = 0; j < spojenoIme.length; j++) {
        if (spojenoIme[i] === spojenoIme[j]) {
            brojac++;
        }
    }
    rezultat += brojac;
}


//BROJANJE SLOVA IME 2
/*
for (let i = 0; i < ime2.length; i++) {
    let brojac2 = 0;
    for (let j = 0; j < ime2.length; j++) {
        if (ime2[i].toLowerCase() === ime2[j].toLowerCase()) {
            brojac2++;
        }
    }
    rezultatIme2 += brojac2;
}

console.log("Rezultat ime1:", rezultatIme1);
console.log("Rezultat ime2:", rezultatIme2);
*/
/*

// KRIŽNO ZBRAJANJE

let noviNiz = "";
let maxDuljina = Math.max(rezultatIme1.length, rezultatIme2.length);
for (let i = 0; i < maxDuljina; i++) {
    let broj1 = 0;
    let broj2 = 0;
  
    if (i < rezultatIme1.length) {
        broj1 = parseInt(rezultatIme1[i]);
    }
    
    if (i < rezultatIme2.length) {
        broj2 = parseInt(rezultatIme2[rezultatIme2.length - 1 - i]);
    }
    noviNiz += (broj1 + broj2);
}
console.log("Prvi spojeni niz:", noviNiz);

*/

//REKURZIJA


function reduciraj(niz) {

    if (niz.length <= 2) {
        return niz; 
    }

let novi = "";
let maxDuljina = niz.length;
for (let i = 0; i < Math.ceil(maxDuljina / 2); i++) {

    let prvi = parseInt(niz[i]);
    let zadnji = parseInt(niz[maxDuljina -1 -i]);

    if (i === maxDuljina -1 -i) {
        novi += prvi;
    } else { 
        novi += (prvi + zadnji);
    }
}   return reduciraj(novi);
}

let konacniRezultat = reduciraj(rezultat);

console.log("Konačni rezultat:", konacniRezultat,"%");

document.getElementById("ime1Prikaz").innerText = ime1;
document.getElementById("ime2Prikaz").innerText = ime2;
document.getElementById("rezultat").innerText = konacniRezultat + " %";



