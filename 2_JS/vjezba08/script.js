
// beskonačna while petlja -- mora imati -- break
while(true){
    console.log('Edunova');
    break;
}

let brojac = 0;
console.time('while petlja');
while(brojac++ < 100){
    //console.log(brojac);
}
console.timeEnd('while petlja');


let brojUnos = '1262';
// zbroji sve znamenke danog broja
// ulaz: 1262, izlaz: 11

console.time('ZB1');
let zbroj=0;
for (let i=0; i<brojUnos.length; i++){
    zbroj += parseInt(brojUnos[i]);
}
console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');
let broj = parseInt(brojUnos);
zbroj = 0;
while(broj>0){
    zbroj += broj % 10;
    broj = broj - (broj % 10);
    broj = broj / 10;
}
console.log(zbroj);
console.timeEnd('ZB2');

// čitati više o optimizaciji
// big o notacija
// smanjiti kompleksnost je riješenje optimizacije

/**
 * ==============================================================================
 * BIG O NOTATION CHEAT SHEET
 * ==============================================================================
 * Complexity  |    Name         |  Performance |  Example
 * -------------|-----------------|--------------|-------------------------------
 * O(1)        |  Constant       |  Excellent   | Accessing array index
 * O(log n)    |  Logarithmic    |  Good        | Binary Search
 * O(n)        |  Linear         |  Fair        | Single loop (for/forEach)
 * O(n log n)  |  Linearithmic   |  Acceptable  | Efficient sorting (MergeSort)
 * O(n^2)      |  Quadratic      |  Slow        | Nested loops
 * O(2^n)      |  Exponential    |  Very Slow   | Recursive Fibonacci
 * O(n!)       |  Factorial      |  Horrible    | Traveling Salesman Problem
 * ------------------------------------------------------------------------------
 * n = broj elemenata (input size)
 * ==============================================================================
 */


// ČINJENICA: niti u for, niti u while se ne mora ući

let br = -5; // ova vrijednost je ostalo od koda prije

for(let i=0; i>br; i--){
    console.log('Ušao u for pelju', i);    
}

// dođu podaci s API
let podaciSAPI = [];  // [{ime: 'Pero'}, {ime: 'Marko'}];

while(podaciSAPI.length>0){
    console.log('Ušao u while petlju', podaciSAPI.pop()?.ime);    
}