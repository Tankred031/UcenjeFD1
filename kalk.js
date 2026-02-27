case "10":

    let brojA = Number(a);
    let brojB = Number(b);

    if (isNaN(brojA) || isNaN(brojB)) {
        rezultat.innerHTML = "Unesi ispravne brojeve";
        break;
    }

    let operacija = document.querySelector('input[name="operacija"]:checked');

    if (!operacija) {
        rezultat.innerHTML = "Odaberi operaciju";
        break;
    }

    switch (operacija.value) {
        case "+":
            rezultat.innerHTML = brojA + brojB;
            break;
        case "-":
            rezultat.innerHTML = brojA - brojB;
            break;
        case "*":
            rezultat.innerHTML = brojA * brojB;
            break;
        case "/":
            if (brojB === 0) {
                rezultat.innerHTML = "Dijeljenje s 0 nije dozvoljeno";
            } else {
                rezultat.innerHTML = brojA / brojB;
            }
            break;
    }

    break;