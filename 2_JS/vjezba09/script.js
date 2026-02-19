const isDev = false;


// 1 ne prima vrijednost (parametar)- ne vraća vrijednost

function pozdraviSvijet() {
    console.log("Hello World");
    
}
pozdraviSvijet();

// 2 prima parametre, ne vraća vrijednost

function parniBrojevi (odBroja, doBroja) {
const max = odBroja>doBroja ? odBroja : doBroja;
const min = odBroja<doBroja ? odBroja : doBroja;
  //ovdje varijable
    for(let i=odBroja; i<doBroja; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}
log('Prvi poziv')
parniBrojevi(3,8);
log('Drugi poziv')
parniBrojevi(59,65);
log('Treći poziv')
parniBrojevi(12,7);


function log(poruka){
    if(!isDev){
    return;
    }
    
    console.log('----------------------');
    console.log(poruka);
    console.log('----------------------');    
}

// 3 ne prima parametre, ali vraća vrijednost

function slucajniBroj (){
    const broj = Math.random();
    log(broj);
    const uvecano = broj * 1000;
    const intb = parseInt(uvecano)
    return intb;
}
slucajniBroj();

// "ispravan" način poziva funkcije

const sb = slucajniBroj();
log(sb);
// slučajni broj načini
console.log((Math.random()*1000).toFixed(0));              // slučajni broj od 100 do 999
console.log((Math.random() * (58-22) + 22).toFixed(0));    // ovo je slučajni broj od 22 do 58

// 4 prima parametre i vraća vrijednost ---> NAJČEŠĆE KORIŠTEN

function zbrojPrimBrojeva(odBroja, doBroja){
    let suma=0, prim=true;
    for(let i=odBroja; i<=doBroja; i++){
        prim=true;
        for(let j=2; j<i; j++){
            if(i % j === 0){
                prim=false;
                break;
            }
        }
        if(prim){
            suma += i;
        }
    }
    return suma;   
}

// korištenje
log(zbrojPrimBrojeva(3,80));

// pozdravArrow(); --> ovo ne radi prije deklariranja funkcije zato što je arrow funkcija


// arrow funkcija

const pozdravArrow = () => console.log('Hello Arrow');  // vjerovali ili ne ovo je funkcija
pozdravArrow();


// funkcija u objektu

const brojevi = {
    slucajniBroj: () => {
        // to bi došao kod koji imam u funkciji slucajniBroj
        return 7;
    },
    nula: () =>{return 0}
}
log(brojevi['slucajniBroj']());