// nizovi su struktura podataka
const niz = []  //prazan niz
console.log(niz, niz.length)


// nizovi služe za pohranjivanje više vrijednosti po istim nazivom varijable
// potreba unosa 12 mjesečnih temperatura
const temperature = [-2,2,10,15,21,26,29,31,28,19,10,4]
console.log(temperature.length);  //12

// niz ima pojam index i index kreće od broja 0
// prvi element se nalazi na indexu 0 a zadnji element se nalazi na length -1

console.log('siječanj',temperature[0]); //prvi element niza
const zadnji = temperature.length-1
console.log('prosinac', temperature[zadnji]); // zadnji element niza

console.log(temperature);

// const se ne može mijenjati
// kod nizova to znači da ga ne mogu redeklarirati niti promjeniti tip
// temperature=222 // ovo ne mogu
// vrijednosti u nizu se ne mogu mijenjati!!1
// postaviti za mjesec ožujak 17
temperature[2] = 17
console.log(temperature);

// niz može imati bilo koji tip podatka i može se miješati
// ponavljanje tipova podataka (ptp)

const ptp = [
    'Osijek',       // String
    12,             // Number
    {ime: 'pero'},  // Object
    15n,            // Bigint
    [],             // Niz
    true,           // Boolean
    null,           // Nepoznata vrijednost objekta
    undefined,      // Nedefinirana vrijednost
    Symbol('id')    // Jedinstvena vrijednost
]
console.log(ptp);

// nakon zadnjeg elementa niza dozvoljen je ,

// sve ovo gore je jednodimenzionalni niz

// nizovi mogu biti višedimenzionalni - u teoriji beskonački broj dimenzija

// 2D niz je tablica (matrica)
const tablica = [
    [1,2,3], // index reda 0
    [4,5,6], // index reda 1
    [7,8,9]  // index reda 2
]
console.log(tablica)
// indeksi idu prvo po redovima pa u redu po koloni
// ispisati broj 6
console.log(tablica[1][2]);

// na mjesto gdje se nalazi vrijednost 7 postaviti 10

tablica[2][0] = 10
console.log(tablica);

// 3D niz je kocka
// 4D niz je Tensor
// ....









