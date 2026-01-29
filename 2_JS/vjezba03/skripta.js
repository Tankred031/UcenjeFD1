// Operatori
// = operator dodjeljivanja
// typeof omogućuje pristup tipu podatka

// aritmetički operatori
// + - * /


const a = 2, b = 3    // simulacija unosa od korisnika (ulaz)

let rez = a+b         // algoritam
console.log(rez)      // izlaz

// modulo operator %
// ostatak nakon cjelobrojnog djeljenja
console.log(9 % 2)      // 1
console.log(10%2)     // 0

console.log(1000%100 === 0)  // true

// operatori dodjele
// = 


// želim vrijednost varijable rez uvećati za 2
rez = rez+2        // u matematici se prvo izvodi desna str. i dodaje lijevoj
console.log(rez)   // 7
rez += 2
console.log(rez)   // 9
rez -= 5
console.log(rez)   // 4

const x = 2
rez += x
console.log(rez)   // 6

// ako ovo imaš u kodu nešto ne štima kod tebe :) :()

rez += 1
console.log(rez)   // 7

// operatori increment i decrement


rez++             //  -> ALI NI OVO SE NE RADI 
console.log(rez)  // 8
// u isto vrijeme možeš koristiti i uvećavati/umanjivati vrijednost varijable
console.log(rez++)  // 8 prvo sam ispisao trenutnu vrijednost od rez i nakon toga u ju uvećao
console.log(++rez)  // 10 (9 je bilo nakon ispisa u preth. liniji) pa prvo uvećanje tek onda ispis

console.log(--rez) // 9
console.log(rez--) // 9
console.log(rez)   // 8

// operatori uspoređivanja
// == uspoređuje po vrijednosti


console.log(5 == 5)     // true
console.log('5' == 5)   // true
console.log(3 == 7)     // false

// === uspoređuje po tipu i vrijednosti

console.log('Osijek' === 'Osijek')        // true
console.log('Osijek' === 'osijek')        // false
console.log(5 === '5')                   // false  
console.log('Edunova' === 'Druga škola')  // false

// != različito

console.log(4 != 3)   // true
console.log('4' != 4) // false

// veće od >
// veće jednako od >=
let godine = 18
console.log(godine > 18)  // false
console.log(godine >= 18) // true

// manje od <
// manje ili jednako od <=
godine = 21
console.log(godine < 21)  // false
console.log(godine <= 21) // true

// logički operatori
// and (i), or (ili), not (ne)

// booleova tablica za and (&&)  - mora se u JS napisati &&

// i1       i2      rez (i1 && i2)
// false    false   false
// false    true    false
// true     false   false
// true     true    true

const i1 = 5 == '5'     // i1 = true
const i2 = 7 > 9        // i2 = false
console.log(i1 && i2)   // false

// booleova tablica za or (||)  - mora se u JS napisati || (pipe)

// i1       i2      rez (i1 || i2)
// false    false   false
// false    true    true
// true     false   true
// true     true    true

console.log(i1 || i2)    // true 

// booleova tablica za not (!)  
// i1       rez ( !i1 )
// false    true
// true     false

console.log(!i1)    // false 




