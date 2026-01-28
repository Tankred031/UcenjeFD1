// varijabla je prostor u memoriji
// može biti različitih tipova
// u JS se može definirati na tri različita načina

// ulaz podataka u program
// prompt uvijek unosi string
const ime = 'Edunova' //prompt('Unesi svoje ime');     1
// fiksno stavljam neku vrijednost da me pri unosu više ne traži
// ako hoćete testirati obrišite 'Edunova" //

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

// unos godina je string
const unosGodina=prompt('Unesi godinu')

// konverzija u broj
const godina = Number(unosGodina);
console.log(typeof godina, godina);

// odavdje više ne koristim prompt već fiksno string


// decimalni broj - floating point
const unosDecimalniBroj = '3.14'; // decimalni dio se odvaja točkom

const decimalniBroj = parseFloat(unosDecimalniBroj);

console.log(typeof decimalniBroj, decimalniBroj);

// cijeli broj
const cijeliBroj = parseInt('12');
console.log(typeof cijeliBroj, cijeliBroj);

// logička vrijednost
const logickaVrijednost = true;  // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);

// const je konstanta, varijabla se ne može mijenjati
//logickaVrijednost=false; //Uncaught TypeError: Assignment to constant variable

// "prava" varijabla u JS                            2
let broj = 7;

// let dozvoljava promjenu vrijednosti varijable
broj = 9;

console.log(typeof broj, broj);

// let broj = 2; Ne može se redeklarirati varijabla s let

//JS je interpreter
broj = '9'  // ja sada mijenjam tip varijable

console.log(typeof broj, broj);

// STARO, ne koristiti - što ne znači da ne postoji          3

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true    // var omogućava redeklaraciju i to nije dobro
console.log(typeof i, i);

// String, number, Boolean - tipovi podataka
// const; let; "var"  - varijable



const velikiCijeliBroj = 456456456456456n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

let x;   //undefined
console.log(typeof x, x);
x=6;
console.log(typeof x, x);

let y = null;
console.log(typeof y, y);

// JSON - javaScript Object Notation
const osobaObjekt = {
    ime:'Pero',
    godine: 27,
    znaProgramirati: true
};

console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt)

const brojevi = [2,3,1,2]   
console.log(typeof brojevi, brojevi); // piše object ali to je array

const podaciBackend = [
    {
        ime: 'Pero',
        prezime: 'Perić'
    },
    {
        ime: 'Ana',
        prezime: 'Majić'
    }
];
console.table(podaciBackend);


// tradicionalni način pisanja funkcija
function pozdrav(){
    console.log('Hello iz funkcije')
}

console.log(typeof pozdrav, pozdrav)

// trenutni način pisanja funkcija
const pozdravi = () => console.log('Hello iz funkcije nove')
console.log(typeof pozdravi, pozdravi)

// => se zove lambda


const id1 = Symbol('id');  //ovo ispod '' je opis
const id2 = Symbol('id');

console.log(typeof id1, id1)

// operator provjere jednakosti
// ==   -> provjerava samo po vrijednosti '2' je jednako 2
// ===  -> provjerava po tipu i po vrijednosti '2' nije jednako 2
console.log(id1==id2)
console.log(id1===id2)

