
// Generator funkcije su posebna vrsta funkcije koje se mogu zaustaviti usljed izvođenja i nastaviti
// * označava da je to generator funkcija

function* brojevniGenerator() {
    console.log("Početak rada generatora");
    yield true; // 1. pauza
    yield 2.8; // 2. pauza
    yield '3'; // 3. pauza
    return 'Gotov';    
}

// ovdje se funkcija brojevniGenerator() ne izvršava
const generator = brojevniGenerator();
// sada će se tek krenuti izvoditi funkcija brojevniGenerator()
/*
console.log(generator.next());  // {value: true, done: false}
console.log(generator.next());  // {value: 2.8, done: false}
console.log(generator.next());  // {value: '3', done: false}
console.log(generator.next());  // {value: 'Gotov', done: true}
*/

let g;
do{
    g = generator.next();
    console.log(g);    
}while(!g.done);

function* sljedeciId(){
    let id = 1;
    while(true){
        yield `ID_${id++}`;         // može biti samo i yield id++
    }
}

const id = sljedeciId();

console.log(`sljedeći id: ${id.next().value}`);

for(let i=0; i<10; i++){
    console.log(`Sljedeći id u petlji: ${id.next().value}`);    
}

function* razgovor(){
    let odgovor; 
    while(true){
        odgovor = yield 'Kako se zoveš?';
        console.log(`generator kaže: Drago mi je, ${odgovor}`);
        
    }
}

const chat = razgovor();

// 1. pokreni generator do 1. yield
let pitanje = chat.next().value;
console.log(pitanje);

// 2. Pošalji Marko i odmah dohvati slijedeće pitanje
pitanje = chat.next('Marko').value;
console.log(pitanje);

console.log(chat.next('Marija').value);






