const rezultat = document.getElementById('rezultat');

document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {

    case '1': {
      // 1. zadatak
      const command = "start";

      switch (command) {
        case "start":
          rezultat.innerHTML = "Pokretanje programa";
          break;
        case "stop":
          rezultat.innerHTML = "Zaustavljanje";
          break;
        case "pause":
          rezultat.innerHTML = "Pauza programa";
          break;
        default:
          rezultat.innerHTML = "Nepoznata naredba";
      }
      break;
    }

    case '2': {
      // 2. zadatak
      const ocjena = a.toUpperCase();

      switch (ocjena) {
        case "A":
        case "B":
        case "C":
          rezultat.innerHTML = "Položio";
          break;
        case "D":
        case "F":
          rezultat.innerHTML = "Nije položio";
          break;
        default:
          rezultat.innerHTML = "Nije dobar unos";
      }
      break;
    }

    case '3': {
      // 3. zadatak
      const x = Number(a);

      switch (true) {
        case x < 0 || x > 100:
          rezultat.innerHTML = 'Unesi broj od 0 do 100';
          break;
        case x >= 90:
          rezultat.innerHTML = 'Izvrstan';
          break;
        case x >= 80:
          rezultat.innerHTML = 'Vrlo dobar';
          break;
        case x >= 70:
          rezultat.innerHTML = 'Dobar';
          break;
        case x >= 60:
          rezultat.innerHTML = 'Dovoljan';
          break;
        default:
          rezultat.innerHTML = 'Nedovoljan';
      }
      break;
    }

    case '4': {
      // 4. zadatak – decimalni dio
      const x = parseFloat(a);

      if (isNaN(x)) {
        rezultat.innerHTML = 'Niste unijeli dobru vrijednost';
        break;
      }

      const decimalniDio = Math.abs(x % 1);
      rezultat.innerHTML = Math.round(decimalniDio * 100);
      break;
    }

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});
