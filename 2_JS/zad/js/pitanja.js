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
        odgovori: ['element.style', 'element.setAttribute()', 'element.classList.toggle()', 'element.addClass()']
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
        pitanje: 'Koja je glavna svrha form validacije?',
        tocno: 'provjera inputa korisnika prije slanja podataka',
        odgovori: ['stiliziranje form polja', 'spremanje podataka u bazu', 'provjera inputa korisnika prije slanja podataka']
    },
    {
        pitanje: 'Koja metoda sprijećava formu da se pošalje automatski?',
        tocno: 'preventDefault()',
        odgovori: ['stopEvent()', 'preventDefault()', 'cancelSubmit()', 'blockForm()']
    },
    {
        pitanje: 'Koji HTML atribut traži obavezno field',
        tocno: 'required()',
        odgovori: ['required()', 'placeholder', 'validate', 'check']
    },
    {
        pitanje: 'Koja JS metoda uklanja ekstra razmake iz korisničkog inputa?',
        tocno: 'trim()',
        odgovori: ['strip()', 'clean()', 'trim()', 'removeSpace()']
    },
    {
        pitanje: 'Za što se uglavnom koristi React?',
        tocno: 'izdradnju korisničkog sučelja',
        odgovori: ['sigurnost mreže', 'konfiguraciju servera', 'izgradnju korisničkog sučelja', 'management baza podataka']
    },
    {
        pitanje: 'Što je React komponenta?',
        tocno: 'Dio UI kojeg možemo više puta koristiti',
        odgovori: ['Tablica baze podataka', 'CSS framework', 'JavaScript petlja', 'Dio UI kojeg možemo više puta koristiti']
    },
    {
        pitanje: 'Što su props u Reactu?',
        tocno: 'Podaci koje se prenose s roditelja na komponentu dijete',
        odgovori: ['Interne komponente podataka', 'CSS stilovi', 'Podaci koje se prenose s roditelja na komponentu dijete', 'Vrijednosti baze podataka']
    },
    {
        pitanje: 'Što se koristi za upravljanje podacima unutar komponenti?',
        tocno: 'state',
        odgovori: ['props', 'variable', 'state', 'funkcije']
    },
    {
        pitanje: 'Kakve kuka se koristi za upravljanje state-om u funkcionalnim komponenetama?',
        tocno: 'useState()',
        odgovori: ['useState()', 'useEffect()', 'useFetch()', 'useData()']
    },
    {
        pitanje: 'Što je JSX?',
        tocno: 'JavaScript XML',
        odgovori: ['Java Syntax Extension', 'JavaScript Extention', 'JavaScript XML']
    },
    {
        pitanje: 'U JSX koji atributi se koriste umjesto klase?',
        tocno: 'className',
        odgovori: ['classStyle', 'className', 'cssClass', 'styleClass']
    },
    {
        pitanje: 'Koliko mnogo roditelj elemenata mora JSX komponenta vratiti?',
        tocno: 'samo jedan roditelj element',
        odgovori: ['višestruke elemente', 'samo jedan roditelj element', 'barem dva elementa', 'nijedan roditelj element']
    },
    {
        pitanje: 'Gdje trebaju višestruko upotrebljive komponente biti pohranjene u React projektu?',
        tocno: 'u node_modulu',
        odgovori: ['javnom direktoriju', 'u node_modulu', 'u direktoriju komponenti unutar src-a']
    },
    {
        pitanje: 'Koja datoteka ima ulogu glavne komponente u React projektu',
        tocno: 'app.js',
        odgovori: ['index.html', 'package.json', 'style.css', 'app.js']
    },
    {
        pitanje: 'Što je to CRUD?',
        tocno: 'Create, Read, Update, Delete',
        odgovori: ['Create, Run, Update, Delete', 'Create, Read, Update, Delete', 'Copy, Read, Update, Delete', 'Create, Render, Use, Deploy']
    },
    {
        pitanje: 'Koje React naredba se koristi za upravljanje CRUD podacima?',
        tocno: 'State',
        odgovori: ['Props', 'CSS', 'State', 'HTML']
    },
    {
        pitanje: 'Koja JS metoda se uglavnom koristi za prikaz liste predmeta u Reactu?',
        tocno: 'map()',
        odgovori: ['filter()', 'map()', 'reduce()', 'find()']
    },
    {
        pitanje: 'Koja metoda se uglavnom koristi za brisanje predmeta iz niza u React CRUD-u?',
        tocno: 'filter()',
        odgovori: ['push()', 'join()', 'concat()', 'filter()']
    },
    {
        pitanje: 'Zašto Reactov state ne bi trebao biti mijenjan direktno?',
        tocno: 'React možda ne primjeti promjene i ne rirenderira',
        odgovori: ['Jer usporava browser', 'Jer uzrokuje syntax error', 'Jer JS to nedozvoljava', 'React možda ne primjeti promjene i ne rirenderira']
    },
    {
        pitanje: 'Koja je glavna svrha useEffect-a u Reactu?',
        tocno: 'upravljanje nuspojavama u komponentama',
        odgovori: ['upravljanje nuspojavama u komponentama', 'stiliziranje komponenti', 'kreiranje HTML elemenata', 'upravljanje routingom']
    },
    {
        pitanje: 'Kad useEffect pokreće ako je niz ovisnosti (dependencies) prazan ([])',
        tocno: 'samo jednom kad se komponenta učita',
        odgovori: ['samo jednom kad se komponenta učita', 'pri svakom renderu', 'samo kad se state promjeni']
    },
    {
        pitanje: 'Za što se useRef uglavnom koristi?',
        tocno: 'pristup DOM elementima ili spremnanju vrijednosti',
        odgovori: ['za automatski update UI-a', 'pristup DOM elementima ili spremnanju vrijednosti', 'za upravljanje API poziva', 'upravljanjem state komponenti']
    },
    {
        pitanje: 'Što useRef() vraća?',
        tocno: 'objekt s trenutnim svojstvima',
        odgovori: ['string vrijednost', 'niz', 'funkciju', 'objekt s trenutnim svojstvima']
    },
    {
        pitanje: 'Zašto vraća funkciju unutar useEffect-a?',
        tocno: 'da očisti nuspojave (poput timera ili listenera)',
        odgovori: ['da zaustavi renderiranje komponenti', 'da upravlja stiliziranjem komponenti', 'da automatski update-a state', 'da očisti nuspojave (poput timera ili listenera)']
    },
    {
        pitanje: 'Što je Node.js?',
        tocno: 'JavaScript runtime okruženje',
        odgovori: ['frontend framework', 'sustav baza podataka', 'CSS biblioteka', 'JavaScript runtime okruženje']
    },
    {
        pitanje: 'Za čega se uglavnom koristi Express?',
        tocno: 'kreiranje backend servera i API-a',
        odgovori: ['upravljanje bazama podataka', 'stiliziranje web stranica', 'kompajliranje JavaStripta', 'kreiranje backend servera i API-a']
    },
    {
        pitanje: 'Koja komanda se koristi za instaliranje Expresa u Node projektu',
        tocno: 'npm install express',
        odgovori: ['npm start express', 'install express', 'node install express', 'npm install express']
    },
    {
        pitanje: 'Koja metoda se koristi za kreiranje GET route u Expressu',
        tocno: 'app.get()',
        odgovori: ['app.post()', 'app.get()', 'app.listen()', 'app.route()']
    },
    {
        pitanje: 'Što čini res.json() u Expressu?',
        tocno: 'šalje JSON odgovor',
        odgovori: ['šalje HTML odgovor', 'šalje datoteku', 'šalje JSON odgovor', 'pokreće server']
    },
    {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    },
    {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    },
     {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    },
    {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    },
     {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    },
    {
        pitanje: '?',
        tocno: '',
        odgovori: ['', '', '', '']
    }
];
}