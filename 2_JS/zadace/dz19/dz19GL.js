const select = document.getElementById("zadaci");
const rezultat = document.getElementById("rezultati");

select.addEventListener("change", function() {
    if (select.value === "11") {
        console.log("Generator aktivan");
    }
});

document.getElementById("izvedi").addEventListener("click", function() {

    if (select.value !== "11") return;

    case "11":
































    rezultat.innerHTML = sveLozinke.join("<br>");
    break;

    rezultat.innerHTML = "Ovdje će se generirati lozinka";
});