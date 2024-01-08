var inMasc = document.getElementById("inMasc");
var inFem = document.getElementById("inFem");

inMasc.addEventListener("click", () => {
    inFem.checked = false;
});

inFem.addEventListener("click", () => {
    inMasc.checked = false;
});

function calcIMC() {
    var inPeso = document.getElementById("inPeso");
    var inAlt = document.getElementById("inAlt");

    var peso = Number(inPeso.value.replace(',', '.'));
    var alt = Number(inAlt.value.replace(',', '.'));

    if (peso == "" || isNaN(peso) || alt == "" || isNaN(alt)) {
        alert("Informe os dados corretamente");
        inPeso.focus();
        return;
    }

    if (Number.isInteger(alt)) {
        alt = alt / 100;
    }

    var calc = "";

    calc = peso / (alt * alt);

    if (calc >= 40) {
        document.getElementById("inIdeal").textContent = "Você tem obesidade grave (Grau III)!";
    }
    else if (calc >= 30 && calc < 40) {
        document.getElementById("inIdeal").textContent = "Você tem obesidade (Grau II)!";
    }
    else if (calc >= 25 && calc < 30) {
        document.getElementById("inIdeal").textContent = "Você tem sobrepeso (Grau I)!";
    }
    else if (calc >= 18.5 && calc < 25) {
        document.getElementById("inIdeal").textContent = "Seu IMC é Normal!";
    }
    else {
        document.getElementById("inIdeal").textContent = "Você tem magresa!";
    }

    document.getElementById("inResultado").textContent = "Seu IMC é " + calc.toFixed(2) + "\n";

    document.getElementById("modalResult").style.display = "block";
    document.getElementById("escurecer").style.display = "block";
}

function fecharModal(){
    document.getElementById("modalResult").style.display = "none";
    document.getElementById("escurecer").style.display = "none";

    location.reload();
}
