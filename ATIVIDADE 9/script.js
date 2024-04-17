function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    var imc = peso / (altura * altura);
    var classificacao, grauObesidade;

    if (imc < 18.5) {
        classificacao = "Magreza";
        grauObesidade = 0;
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
        grauObesidade = 0;
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
        grauObesidade = 1;
    } else if (imc >= 30 && imc <= 39.9) {
        classificacao = "Obesidade";
        grauObesidade = 2;
    } else {
        classificacao = "Obesidade Grave";
        grauObesidade = 3;
    }

    var mensagem = "Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao + "\nGrau de obesidade: " + grauObesidade;
    alert(mensagem);
    
}
