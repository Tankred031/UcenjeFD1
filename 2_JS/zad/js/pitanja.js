function kreirajPitanja() {
    return [{
        pitanje: 'Kojom ključnom rječju definiramo varijablu čiju vrijednost možemo mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'var']
    },
    {
        pitanje: 'Koje CSS svojstvo aktivira Flexbox na kontejneru?',
        tocno: 'display: flex',
        odgovori: ['position: flex', 'layout: flex', 'display: flex', 'flex: container']
    },
    {
        pitanje: 'Koje svojstvo poravnava Flexbox predmete po glavnoj osi?',
        tocno: 'justify-items',
        odgovori: ['align-items', 'align.content', 'justify-content', 'place-items']
    },
    {
        pitanje: 'Što čini CSS Grid drugačijim od Flexbox-a?',
        tocno: 'Grid omogućuje 2D layoute',
        odgovori: ['Grid radi samo vertikalno', 'Grid zamjenjuje media querije', 'Grid omogućuje 2D layoute', 'Grid radi samo sa slikama']
    },
    {
        pitanje: 'Koje CSS svojstvo definira broj i veličiniu kolona u Gridu?',
        tocno: 'grid-template-columns',
        odgovori: ['grid-auto-flow', 'grid-column', 'grid-template-columns', 'column-count']
    },
    {
        pitanje: 'Koja ključna riječ se treba koristiti za varijable čija se vrijednost ne mijenja?',
        tocno: 'const',
        odgovori: ['var', 'let', 'const', 'static']
    },
    {
        pitanje: 'Što će biti rezultat slijedećeg koda - console.log(typeof null)?',
        tocno: 'object',
        odgovori: ['null', 'undefined', 'number', 'object']
    },
    {
        pitanje: 'Koji oprator provjerava i vrijednost i tip podatka u JavaScriptu',
        tocno: '===',
        odgovori: ['==', '=', '===', '!=']
    },
    {
        pitanje: 'Koji od navedenih je Boolean vrijednost?',
        tocno: 'true',
        odgovori: ['"true"', '1', 'true', '"false"']
    },
    {
        pitanje: 'Što će biti rezultat ovog izraza - 10 + "5"?',
        tocno: '150',
        odgovori: ['15', '105', 'NaN']
    },
    {
        pitanje: 'Koja je prava svrha funkcije u JavaScriptu?',
        tocno: 'Grupiranje logike za višestruku upotrebu',
        odgovori: ['Pohranjivati podatke', 'Stilizirati elemente', 'Grupiranje logike za višestruku upotrebu', 'Ponovljati HTML kod']
    },
    {
        pitanje: 'Koja ključna riječ šalje vrijednost natrag iz funkcije?',
        tocno: 'return',
        odgovori: ['break', 'console.log', 'return', 'output']
    },
    {
        pitanje: 'Za čega se arrow funkcija uglavnom koristi?',
        tocno: 'pisanje kraćih sintaksi funkcije',
        odgovori: ['kreiranje klasa', '', 'deklariranje varijabli', 'Petlje podataka']
    },
    {
        pitanje: 'Koji tip Scope-a se kreira putem let i const?',
        tocno: 'block scope',
        odgovori: ['global scope', 'function scope', 'module scope', 'block scope']
    },
    {
        pitanje: 'Što će se dogoditi ako pokušavamo pristupiti let varijabli izvan bloka)?',
        tocno: 'izbacuje grešku',
        odgovori: ['izbacuje grešku', 'ispisuje undefined', 'vraća null', 'radi normalno']
    },
    {
        pitanje: 'Što znači DOM u JavaScripti?',
        tocno: 'Document Object Model',
        odgovori: ['Data Object Model', 'Display Object Method', 'Document Object Model', 'Digital Order Model']
    },
    {
        pitanje: 'Koja metoda odabire jedan element po svom jednistvenom ID-u?',
        tocno: 'document.getElementById()',
        odgovori: ['document.querySelectorAll()', 'document.getElementByClassName()', 'document.getElementById()', 'document.getElementByTagName()']
    },
    {
        pitanje: 'Koja metoda vraća SVE elemente koji pristaju CSS selektoru?',
        tocno: 'document.querySelectorAll()',
        odgovori: ['document.querySelector()', 'document.querySelectorAll()', 'document.getElementById()', 'document.getElementByTagName()']
    },
    {
        pitanje: 'Koje svojstvo je najbolje za mijenjanje samo teksta elementa?',
        tocno: 'textContent',
        odgovori: ['innerHTML', 'innerText', 'textContent', 'valuet']
    },
    {
        pitanje: 'Koja metoda se koristi da dodamo ili maknemo CSS klasu dinamički?',
        tocno: 'element.setAttribute()',
        odgovori: ['element.style', 'element.setAttribute()', 'element.classList.toggle()', 'elmenent.addClass()']
    },
    {
        pitanje: 'Koja metoda se korist da stavi event listener u JavaScripti?',
        tocno: 'element.addEventListener()',
        odgovori: ['element.addEvent()', 'element.attachEvent()', 'element.addEventListener()', 'element.listen()']
    },
    {
        pitanje: 'Što e.target predstavlja unutar event handlera?',
        tocno: 'Element koji je pokrenuo event',
        odgovori: ['Browser window', 'Event type', 'Element roditelj', 'Element koji je pokrenuo event']
    },
    {
        pitanje: 'Što radi e.preventDefault() u form submit eventu?',
        tocno: 'Spriječava reload stranice',
        odgovori: ['Zaustavlja JS izvršenje', 'Briše form vrijednost', 'Zaustavlja event bubbling', 'Spriječava reload stranice']
    },
    {
        pitanje: 'Koji event s pokreće kad korisnik unosi podatke u input polje?',
        tocno: 'input',
        odgovori: ['keypress', 'click', 'change', 'input']
    },
    {
        pitanje: 'Koji event je najbolje koristiti da se odredi kad je tipka pritisnuta?',
        tocno: 'keydown',
        odgovori: ['keydown', 'keyup', 'keypress', 'input']
    },
    {
        pitanje: 'Knj?',
        tocno: 'textContent',
        odgovori: ['innerHTML', 'innerText', 'textContent', 'valuet']
    },
    {
        pitanje: 'Koja metoda se koristi da dodamo ili maknemo CSS klasu dinamički?',
        tocno: 'element.setAttribute()',
        odgovori: ['element.style', 'element.setAttribute()', 'element.classList.toggle()', 'elmenent.addClass()']
    },
    {
        pitanje: 'Koja metoda se korist da stavi event listener u JavaScripti?',
        tocno: 'element.addEventListener()',
        odgovori: ['element.addEvent()', 'element.attachEvent()', 'element.addEventListener()', 'element.listen()']
    },
    {
        pitanje: 'Što e.target predstavlja unutar event handlera?',
        tocno: 'Element koji je pokrenuo event',
        odgovori: ['Browser window', 'Event type', 'Element roditelj', 'Element koji je pokrenuo event']
    }
];
}