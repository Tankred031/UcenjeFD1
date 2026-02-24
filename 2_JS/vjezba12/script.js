
// funkcionalne metode - skraćuju kod, standardno se koriste

// prvo nam trebaju podaci

const korisnici = [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Kruno', prezime: 'Đurić', godina: 29, admin: true},
    {id: 3, ime: 'Branko', prezime: 'Miš', godina: 45, admin: true},
    {id: 4, ime: 'Zoran', prezime: 'Zbašnik', godina: 46, admin: true},
    {id: 5, ime: 'Janko', prezime: 'Jelačić', godina: 32, admin: false}
];

// forEach();

// onako kako znate, ispišite sva imena korisnika jedno ispod drugog

for(let i=0; i<korisnici.length; i++){
    console.log(korisnici[i].ime);
}

// console.log(korisnici, [1]);

console.log('****************************************');



korisnici.forEach(korisnik => console.log(korisnik.ime));


console.log('****************************************');


korisnici.forEach(o=>console.log(`${o.ime} ${o.prezime}`));         // o generički predstavlja objekt   

// idemo lijepo osloviti naše korisnike
korisnici.forEach(o => {
    let poruka = 'Poštovan';
    if(!o.ime.endsWith('a')){
        poruka += 'i gospodine'
    } else {
        poruka += 'a gospođo'
    }
    // poruka += o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine';  // Ova linija zamjenjuje gornjih 5
    console.log(`${poruka} ${o.ime} ${o.prezime}`);

    // console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`)
});

// map()
// želim iz ovoga niza izvući samo imena u novi niz
const samoImena = korisnici.map(o=>o.ime);
console.log(samoImena);

const maliNiz = korisnici.map(({id,ime,prezime}) => ({sifra: id, imeOsobe: ime + ' ' + prezime}));

console.log(maliNiz);

console.log('****************************************');

// find()

const prodadjen = korisnici.find(o => o.id === 3);
console.log(prodadjen);

console.log(korisnici.find(o => o.id === 3)?.ime);


console.log('****************************************');


// findIndex(

console.log(korisnici.findIndex(o => o.ime === 'Zoran'));


console.log('****************************************');


// filter()

console.log(korisnici.filter(o => o.godina>40));



console.log('****************************************');


// reduce()

console.log(korisnici.reduce((suma,o) => suma + o.godina, 0)); // 0 je početna vrijednost


// some()

const imaAdmin = korisnici.some(o => o.admin);
console.log(imaAdmin ? 'Ima admin' : 'Nema admin');


console.log('****************************************');


// every()

const sviPunoljetni = korisnici.every(o => o.godina>=18)
console.log(sviPunoljetni ? 'Svi su punoljetni' : 'Nisu svi punoljetni');



console.log('****************************************');