document.getElementById("triangleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        document.getElementById("result").innerText = "Por favor, insira valores numéricos para os lados do triângulo.";
        return;
    }

    if ((sideA + sideB <= sideC) || (sideA + sideC <= sideB) || (sideB + sideC <= sideA)) {
        document.getElementById("result").innerText = "Os lados fornecidos não formam um triângulo.";
        return;
    }

    if (sideA === sideB && sideB === sideC) {
        document.getElementById("result").innerText = "O triângulo é equilátero.";
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        document.getElementById("result").innerText = "O triângulo é isósceles.";
    } else {
        document.getElementById("result").innerText = "O triângulo é escaleno.";
    }
});
